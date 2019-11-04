import * as React from 'react';
import PropTypes from 'prop-types';
import Internationalize from 'box-ui-elements/es/elements/common/Internationalize';
import {
    dateCellRenderer,
    sizeCellRenderer,
    fileNameCellRenderer,
} from 'box-ui-elements/es/features/virtualized-table-renderers';
import VirtualizedTable from 'box-ui-elements/es/features/virtualized-table';
import { Column } from 'react-virtualized/dist/es/Table/index';

class ArchiveExplorer extends React.Component {
    static propTypes = {
        data: PropTypes.arrayOf(
            PropTypes.shape({
                type: PropTypes.string,
                absolute_path: PropTypes.string,
                name: PropTypes.string,
                modified_at: PropTypes.string,
                size: PropTypes.number,
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
                            absolute_path: PropTypes.string,
                            name: PropTypes.string,
                        }),
                    ),
                }),
            }),
        ).isRequired,
    };

    constructor(props) {
        super(props);
        const { cache, root } = this.buildCache(props.data);
        this.cache = cache;
        this.root = root;

        this.state = {
            currentData: this.getCurrentData(cache, root),
        };
    }

    buildCache = data => {
        const cache = {};
        let root;

        data.forEach(info => {
            if (!info.parent) {
                root = info.absolute_path;
            }
            cache[info.absolute_path] = info;
        });

        return { cache, root };
    };

    getCurrentData = (cache, currentFolder) => {
        const currentFolderInfo = cache[currentFolder];

        const currentData = currentFolderInfo.item_collection.entries.map(item => cache[item.absolute_path]);

        return currentData;
    };

    updateData = absolutePath => {
        this.setState({
            currentData: this.getCurrentData(this.cache, absolutePath),
        });
    };

    getRowData = ({ index }) => {
        const { currentData } = this.state;
        const currentRow = currentData[index];
        const { name, type, modified_at: modifiedAt, absolute_path: absolutePath } = currentRow;

        const rowData = {
            ...currentRow,
            name: {
                id: undefined,
                name,
                isExternal: false,
                type,
                onClick: type === 'folder' ? () => this.updateData(absolutePath) : undefined,
            },
            date: `20${modifiedAt}`,
            modifiedDate: {
                modified_at: `20${modifiedAt}`,
                modified_by: undefined,
            },
        };
        return rowData;
    };

    render() {
        const { currentData } = this.state;
        return (
            <Internationalize language="en-us" messages={{}}>
                <VirtualizedTable className="ArchiveFilesTable" rowData={currentData} rowGetter={this.getRowData}>
                    {intl => [
                        <Column
                            key="Filename"
                            cellRenderer={fileNameCellRenderer(intl)}
                            dataKey="name"
                            disableSort
                            flexGrow={3}
                            label="Filename"
                            width={1}
                        />,
                        <Column
                            key="Last modified date"
                            cellRenderer={dateCellRenderer}
                            dataKey="date"
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
