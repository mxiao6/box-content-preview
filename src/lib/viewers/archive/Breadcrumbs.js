import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from 'box-ui-elements/es/components/breadcrumb';
import PlainButton from 'box-ui-elements/es/components/plain-button/PlainButton';
import { VIEWS } from './constants';
import './Breadcrumbs.scss';

class Breadcrumbs extends React.PureComponent {
    static propTypes = {
        fullPath: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        view: PropTypes.string.isRequired,
    };

    /**
     * Split full path string to path items
     *
     * @param {string} fullPath - Full path for current folder
     * @return {Array<Object>} path items including name and path string
     */
    getPathItems = fullPath => {
        const { view } = this.props;

        if (view === VIEWS.VIEW_SEARCH) {
            return [
                {
                    name: __('search_results'),
                },
            ];
        }

        const pathNames = fullPath.split('/').slice(0, -1);

        return pathNames.map((name, index) => ({
            name,
            path: `${pathNames.slice(0, index + 1).join('/')}/`,
        }));
    };

    /**
     * render breadcrumbs
     *
     * @return {jsx} Breadcrumbs
     */
    render() {
        const { fullPath, onClick, view } = this.props;
        const pathItems = this.getPathItems(fullPath);

        return (
            <div className="bp-header-breadcrumbs">
                <Breadcrumb>
                    {pathItems.map(pathItem =>
                        view === VIEWS.VIEW_SEARCH ? (
                            <span key={pathItem.name}>{pathItem.name}</span>
                        ) : (
                            <PlainButton key={pathItem.path} onClick={() => onClick(pathItem.path)} type="button">
                                {pathItem.name}
                            </PlainButton>
                        ),
                    )}
                </Breadcrumb>
            </div>
        );
    }
}

export default Breadcrumbs;
