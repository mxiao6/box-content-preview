/* eslint-disable no-unused-vars */
import get from 'lodash/get';
import './Archive.scss';
import BaseViewer from '../BaseViewer';
import { VIEWER_EVENT } from '../../events';

const JS = ['archive.js'];
const CSS = ['archive.css'];

const testData = [
    {
        type: 'file',
        absolute_path: 'test/csv-level-1.csv',
        name: 'csv-level-1.csv',
        modified_at: '19-Nov-04 16:11',
        size: 133,
        path_collection: {
            total_count: 1,
            entries: [{ type: 'folder', absolute_path: 'test/', name: 'test' }],
        },
        parent: 'test',
        item_collection: null,
    },
    {
        type: 'folder',
        absolute_path: 'test/level-1/level-2-2/',
        name: 'level-2-2',
        modified_at: '19-Dec-02 16:44',
        size: 0,
        path_collection: {
            total_count: 2,
            entries: [
                { type: 'folder', absolute_path: 'test/', name: 'test' },
                {
                    type: 'folder',
                    absolute_path: 'test/level-1/',
                    name: 'level-1',
                },
            ],
        },
        parent: 'level-1',
        item_collection: {
            total_count: 1,
            entries: [
                {
                    type: 'file',
                    absolute_path: 'test/level-1/level-2-2/コラボレーションフォルダマニュアル.pptx',
                    name: 'コラボレーションフォルダマニュアル.pptx',
                },
            ],
        },
    },
    {
        type: 'file',
        absolute_path: 'test/level-1/Principles of Object Oriented Programming in JavaScript - Nicholas Zakas.pdf',
        name: 'Principles of Object Oriented Programming in JavaScript - Nicholas Zakas.pdf',
        modified_at: '19-Nov-04 11:04',
        size: 1758869,
        path_collection: {
            total_count: 2,
            entries: [
                { type: 'folder', absolute_path: 'test/', name: 'test' },
                {
                    type: 'folder',
                    absolute_path: 'test/level-1/',
                    name: 'level-1',
                },
            ],
        },
        parent: 'level-1',
        item_collection: null,
    },
    {
        type: 'file',
        absolute_path: 'test/test-level-1.jpg',
        name: 'test-level-1.jpg',
        modified_at: '19-Nov-08 15:08',
        size: 57379,
        path_collection: {
            total_count: 1,
            entries: [{ type: 'folder', absolute_path: 'test/', name: 'test' }],
        },
        parent: 'test',
        item_collection: null,
    },
    {
        type: 'folder',
        absolute_path: 'test/level-1/level-2/',
        name: 'level-2',
        modified_at: '19-Dec-02 16:46',
        size: 0,
        path_collection: {
            total_count: 2,
            entries: [
                { type: 'folder', absolute_path: 'test/', name: 'test' },
                {
                    type: 'folder',
                    absolute_path: 'test/level-1/',
                    name: 'level-1',
                },
            ],
        },
        parent: 'level-1',
        item_collection: {
            total_count: 1,
            entries: [
                {
                    type: 'file',
                    absolute_path: 'test/level-1/level-2/content-explorer-safari-blinking.mov',
                    name: 'content-explorer-safari-blinking.mov',
                },
            ],
        },
    },
    {
        type: 'folder',
        absolute_path: 'test/level-1/',
        name: 'level-1',
        modified_at: '19-Dec-02 16:44',
        size: 0,
        path_collection: {
            total_count: 1,
            entries: [{ type: 'folder', absolute_path: 'test/', name: 'test' }],
        },
        parent: 'test',
        item_collection: {
            total_count: 3,
            entries: [
                {
                    type: 'folder',
                    absolute_path: 'test/level-1/level-2-2/',
                    name: 'level-2-2',
                },
                {
                    type: 'file',
                    absolute_path:
                        'test/level-1/Principles of Object Oriented Programming in JavaScript - Nicholas Zakas.pdf',
                    name: 'Principles of Object Oriented Programming in JavaScript - Nicholas Zakas.pdf',
                },
                {
                    type: 'folder',
                    absolute_path: 'test/level-1/level-2/',
                    name: 'level-2',
                },
            ],
        },
    },
    {
        type: 'folder',
        absolute_path: 'test/',
        name: 'test',
        modified_at: '19-Dec-02 16:43',
        size: 0,
        path_collection: { total_count: 0, entries: [] },
        parent: null,
        item_collection: {
            total_count: 3,
            entries: [
                {
                    type: 'file',
                    absolute_path: 'test/csv-level-1.csv',
                    name: 'csv-level-1.csv',
                },
                {
                    type: 'file',
                    absolute_path: 'test/test-level-1.jpg',
                    name: 'test-level-1.jpg',
                },
                {
                    type: 'folder',
                    absolute_path: 'test/level-1/',
                    name: 'level-1',
                },
            ],
        },
    },
    {
        type: 'file',
        absolute_path: 'test/level-1/level-2-2/コラボレーションフォルダマニュアル.pptx',
        name: 'コラボレーションフォルダマニュアル.pptx',
        modified_at: '19-Nov-13 15:33',
        size: 2899183,
        path_collection: {
            total_count: 3,
            entries: [
                { type: 'folder', absolute_path: 'test/', name: 'test' },
                {
                    type: 'folder',
                    absolute_path: 'test/level-1/',
                    name: 'level-1',
                },
                {
                    type: 'folder',
                    absolute_path: 'test/level-1/level-2-2/',
                    name: 'level-2-2',
                },
            ],
        },
        parent: 'level-2-2',
        item_collection: null,
    },
    {
        type: 'file',
        absolute_path: 'test/level-1/level-2/content-explorer-safari-blinking.mov',
        name: 'content-explorer-safari-blinking.mov',
        modified_at: '19-Nov-13 16:25',
        size: 4472460,
        path_collection: {
            total_count: 3,
            entries: [
                { type: 'folder', absolute_path: 'test/', name: 'test' },
                {
                    type: 'folder',
                    absolute_path: 'test/level-1/',
                    name: 'level-1',
                },
                {
                    type: 'folder',
                    absolute_path: 'test/level-1/level-2/',
                    name: 'level-2',
                },
            ],
        },
        parent: 'level-2',
        item_collection: null,
    },
];

class ArchiveViewer extends BaseViewer {
    /**
     * @inheritdoc
     */
    setup() {
        if (this.isSetup) {
            return;
        }

        // Call super() first to set up common layout
        super.setup();

        this.archiveEl = this.createViewer(document.createElement('div'));
        this.archiveEl.className = 'bp-archive';
    }

    /**
     * [destructor]
     *
     * @return {void}
     */
    destroy() {
        if (this.archiveComponent) {
            this.archiveComponent.destroy();
        }
        super.destroy();
    }

    /**
     * Loads a archive file.
     *
     * @return {void}
     */
    load() {
        super.load();

        return Promise.all([this.loadAssets(JS, CSS), this.getRepStatus().getPromise()])
            .then(() => {
                const { representation } = this.options;
                const template = get(representation, 'info.url') || get(representation, 'content.url_template');
                const contentUrl = this.createContentUrlWithAuthParams(template);
                this.startLoadTimer();

                return this.api.get(contentUrl);
            })
            .then(this.finishLoading)
            .catch(this.handleAssetError);
    }

    /**
     * Finishes loading the archive data
     *
     * @private
     * @param {Array<Object>} data - archive data collection
     * @return {void}
     */
    finishLoading = data => {
        if (this.isDestroyed()) {
            return;
        }

        /*
            global BoxArchive
            The BoxArchive is loaded from archive.js
        */
        this.archiveComponent = new BoxArchive(this.archiveEl, testData);

        this.loaded = true;
        this.emit(VIEWER_EVENT.load);
    };
}

export default ArchiveViewer;
