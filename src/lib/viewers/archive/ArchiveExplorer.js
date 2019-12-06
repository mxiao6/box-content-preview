import * as React from 'react';
import PropTypes from 'prop-types';
import Internationalize from 'box-ui-elements/es/elements/common/Internationalize';
import {
    readableTimeCellRenderer,
    sizeCellRenderer,
    itemNameCellRenderer,
} from 'box-ui-elements/es/features/virtualized-table-renderers';
import VirtualizedTable from 'box-ui-elements/es/features/virtualized-table';
import { Column } from 'react-virtualized/dist/es/Table/index';
import { TABLE_COLUMNS } from './constants';

const { KEY_NAME, KEY_MODIFIED_AT } = TABLE_COLUMNS;

class ArchiveExplorer extends React.Component {
    static propTypes = {
        itemList: PropTypes.arrayOf(
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
        const { cache, root } = this.buildCache(props.itemList);
        this.cache = cache;
        this.root = root;

        this.state = {
            itemList: cache[root],
            fullPath: root,
        };
    }

    buildCache = itemList => {
        const folders = [];
        const temp = {};
        const cache = {};
        let root;

        itemList.forEach(info => {
            if (!info.parent) {
                root = info.absolute_path;
            }
            if (info.type === 'folder') {
                folders.push(info);
            }
            temp[info.absolute_path] = info;
        });

        folders.forEach(folderInfo => {
            cache[folderInfo.absolute_path] = folderInfo.item_collection.entries.map(item => temp[item.absolute_path]);
        });

        return { cache, root };
    };

    updateData = absolutePath => {
        this.setState({
            itemList: this.cache[absolutePath],
        });
    };

    getRowData = ({ index }) => {
        const { itemList } = this.state;
        const currentRow = itemList[index];
        const { name, type, modified_at: modifiedAt } = currentRow;

        const rowData = {
            ...currentRow,
            [KEY_NAME]: {
                isExternal: false,
                name,
                type,
            },
            [KEY_MODIFIED_AT]: `20${modifiedAt}`,
        };
        return rowData;
    };

    handleClick = cellValue => {
        const { name } = cellValue;
        const { fullPath } = this.state;
        const nextFullPath = `${fullPath}${name}/`;
        this.updateData(nextFullPath);
        this.setState({
            fullPath: nextFullPath,
        });
    };

    render() {
        const { itemList } = this.state;
        return (
            <Internationalize language="en-us" messages={{}}>
                <VirtualizedTable className="ArchiveFilesTable" rowData={itemList} rowGetter={this.getRowData}>
                    {intl => [
                        <Column
                            key="Filename"
                            cellRenderer={itemNameCellRenderer(intl, this.handleClick)}
                            dataKey={KEY_NAME}
                            disableSort
                            flexGrow={3}
                            label="Filename"
                            width={1}
                        />,
                        <Column
                            key="Last modified date"
                            cellRenderer={readableTimeCellRenderer}
                            dataKey={KEY_MODIFIED_AT}
                            disableSort
                            flexGrow={2}
                            label="Last modified date"
                            width={1}
                        />,
                        <Column
                            key="Size"
                            cellRenderer={sizeCellRenderer()}
                            dataKey="size"
                            disableSort
                            flexGrow={1}
                            label="Size"
                            width={1}
                        />,
                    ]}
                </VirtualizedTable>
            </Internationalize>
        );
    }
}

export default ArchiveExplorer;
