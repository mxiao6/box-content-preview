import AssetLoader from '../AssetLoader';
import ArchiveViewer from './ArchiveViewer';
import { ORIGINAL_REP_NAME } from '../../constants';

// Order of the viewers matters. Prefer original before others. Go from specific to general.
const VIEWERS = [
    {
        NAME: 'Archive',
        CONSTRUCTOR: ArchiveViewer,
        REP: 'json',
        EXT: ['zip'],
    },
    {
        NAME: 'Archive',
        CONSTRUCTOR: ArchiveViewer,
        REP: ORIGINAL_REP_NAME,
        EXT: ['zip'],
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

    /**
     * @inheritdoc
     */
    determineViewer(file, disabledViewers = []) {
        const viewer = super.determineViewer(file, disabledViewers);

        return viewer;
    }
}

export default new ArchiveLoader();
