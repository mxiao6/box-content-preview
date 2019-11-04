/* eslint-disable no-unused-vars */
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

const virtualizedTestData = [
    {
        id: 0,
        name: "01 - Adam Sanders - Life I'm Livin'.m4a",
        modified_at: '2019-05-10T18:02:30Z',
        size: 6823316,
        type: 'file',
        modified_by: {
            id: '666',
            name: 'Mingze',
            email: 'mxiao@box.com',
            login: 'mxiao',
        },
        path: {
            id: 0,
            name: "01 - Adam Sanders - Life I'm Livin'.m4a",
            size: 6823316,
            itemPath: [{ name: 'folder1' }, { name: 'folder2' }],
            itemType: 'file',
        },
    },
    {
        id: 1,
        name: 'coraline.mp4',
        modified_at: '2013-02-19T19:56:50Z',
        size: 4464268,
        type: 'file',
        path: {
            id: 1,
            name: 'coraline.mp4',
            size: 4464268,
            itemPath: [{ id: '0' }],
            itemType: 'file',
        },
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
            .then(this.postLoad)
            .catch(this.handleAssetError);
    }

    /**
     * Loads archive file representation.
     *
     * @private
     * @return {Promise} promise to get archive content
     */
    postLoad = () => {
        const { representation } = this.options;
        const template = representation.content.url_template;
        const contentUrl = this.createContentUrlWithAuthParams(template);
        this.startLoadTimer();

        this.api
            .get(contentUrl)
            .then(data => {
                if (this.isDestroyed()) {
                    return;
                }

                this.data = testData;

                this.finishLoading();
            })
            .catch(this.handleAssetError);
    };

    /**
     * Finishes loading the archive data
     *
     * @private
     * @return {void}
     */
    finishLoading() {
        /* global BoxArchive */
        this.archiveComponent = new BoxArchive(this.archiveEl, this.data);
        this.archiveComponent.renderArchive();

        this.loaded = true;
        this.emit(VIEWER_EVENT.load);
    }
}

export default ArchiveViewer;