import * as React from 'react';
import PropTypes from 'prop-types';
import memoize from 'lodash/memoize';
import Internationalize from 'box-ui-elements/es/elements/common/Internationalize';
import {
    readableTimeCellRenderer,
    sizeCellRenderer,
    itemNameCellRenderer,
} from 'box-ui-elements/es/features/virtualized-table-renderers';
import VirtualizedTable from 'box-ui-elements/es/features/virtualized-table';
import { Column } from 'react-virtualized/dist/es/Table/index';
import { TABLE_COLUMNS } from './constants';

const { KEY_NAME, KEY_MODIFIED_AT, KEY_SIZE } = TABLE_COLUMNS;

class ArchiveExplorer extends React.Component {
    static propTypes = {
        itemCollection: PropTypes.arrayOf(
            PropTypes.shape({
                type: PropTypes.string.isRequired,
                absolute_path: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                modified_at: PropTypes.string.isRequired,
                size: PropTypes.number.isRequired,
                path_collection: PropTypes.shape({
                    total_count: PropTypes.number,
                    entries: PropTypes.arrayOf(
                        PropTypes.shape({
                            type: PropTypes.string,
                            absolute_path: PropTypes.string,
                            name: PropTypes.string,
                        }),
                    ),
                }),
                parent: PropTypes.string,
                item_collection: PropTypes.shape({
                    total_count: PropTypes.number,
                    entries: PropTypes.arrayOf(
                        PropTypes.shape({
                            type: PropTypes.string,
                            absolute_path: PropTypes.string.isRequired,
                            name: PropTypes.string,
                        }),
                    ).isRequired,
                }).isRequired,
            }),
        ).isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            fullPath: props.itemCollection.find(info => !info.parent).absolute_path,
        };

        this.memoBuildCache = memoize(this.buildCache);
    }

    buildCache = itemCollection => {
        const folders = [];
        const temp = {};
        const cache = {};

        itemCollection.forEach(info => {
            if (info.type === 'folder') {
                folders.push(info);
            }
            temp[info.absolute_path] = info;
        });

        folders.forEach(folderInfo => {
            cache[folderInfo.absolute_path] = folderInfo.item_collection.entries.map(item => temp[item.absolute_path]);
        });

        return cache;
    };

    getRowData = itemList => ({ index }) => {
        const { modified_at: modifiedAt, name, size, type, ...rest } = itemList[index];

        const rowData = {
            [KEY_NAME]: {
                isExternal: false,
                name,
                type,
            },
            [KEY_MODIFIED_AT]: `20${modifiedAt}`,
            [KEY_SIZE]: size,
            ...rest,
        };
        return rowData;
    };

    handleClick = cellValue => {
        const { name } = cellValue;
        const { fullPath } = this.state;
        const nextFullPath = `${fullPath}${name}/`;
        this.setState({
            fullPath: nextFullPath,
        });
    };

    render() {
        const { itemCollection } = this.props;
        const { fullPath } = this.state;
        const cache = this.memoBuildCache(itemCollection);

        const itemList = cache[fullPath];

        return (
            <Internationalize language="en-us" messages={{}}>
                <VirtualizedTable
                    className="ArchiveFilesTable"
                    rowData={itemList}
                    rowGetter={this.getRowData(itemList)}
                >
                    {intl => [
                        <Column
                            key={KEY_NAME}
                            cellRenderer={itemNameCellRenderer(intl, this.handleClick)}
                            dataKey={KEY_NAME}
                            disableSort
                            flexGrow={3}
                            label={__('filename')}
                            width={1}
                        />,
                        <Column
                            key={KEY_MODIFIED_AT}
                            cellRenderer={readableTimeCellRenderer}
                            dataKey={KEY_MODIFIED_AT}
                            disableSort
                            flexGrow={2}
                            label={__('last_modified_date')}
                            width={1}
                        />,
                        <Column
                            key={KEY_SIZE}
                            cellRenderer={sizeCellRenderer()}
                            dataKey={KEY_SIZE}
                            disableSort
                            flexGrow={1}
                            label={__('size')}
                            width={1}
                        />,
                    ]}
                </VirtualizedTable>
            </Internationalize>
        );
    }
}

export default ArchiveExplorer;
