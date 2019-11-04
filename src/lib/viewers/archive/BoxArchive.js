import React from 'react';
import ReactDOM from 'react-dom';
import ArchiveExplorer from './ArchiveExplorer';

class BoxArchive {
    /**
     * [constructor]
     *
     * @param {HTMLElement} archiveEl - Archive element
     * @param {Object} data - Archive data
     * @return {BoxArchive} Instance
     */
    constructor(archiveEl, data) {
        this.archiveEl = archiveEl;
        this.data = data;
    }

    /**
     * [destructor]
     *
     * @return {void}
     */
    destroy() {
        if (this.archiveExplorer) {
            ReactDOM.unmountComponentAtNode(this.archiveEl);
            this.archiveExplorer = null;
        }
    }

    /**
     * Renders Archive Content into an html table
     *
     * @return {void}
     * @private
     */
    renderArchive() {
        this.archiveExplorer = ReactDOM.render(<ArchiveExplorer data={this.data} />, this.archiveEl);
    }
}

global.BoxArchive = BoxArchive;
export default BoxArchive;
