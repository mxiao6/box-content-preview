import AssetLoader from '../AssetLoader';
import ArchiveViewer from './ArchiveViewer';
import { ORIGINAL_REP_NAME } from '../../constants';

const VIEWERS = [
    {
        NAME: 'Archive',
        CONSTRUCTOR: ArchiveViewer,
        REP: 'json',
        EXT: ['zip', 'jar'],
    },
    {
        NAME: 'Archive',
        CONSTRUCTOR: ArchiveViewer,
        REP: ORIGINAL_REP_NAME, // for testing purposes, will remove later
        EXT: ['zip', 'jar'],
    },
];

class ArchiveLoader extends AssetLoader {
    /**
     * [constructor]
     *
     * @return {ArchiveLoader} ArchiveLoader instance
     */
    constructor() {
        super();
        this.viewers = VIEWERS;
    }
}

export default new ArchiveLoader();
