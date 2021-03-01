import React from 'react';
import IconArrowLeft24 from '../../icons/IconArrowLeft24';
import './MediaSettingsMenuBackItem.scss';

export type Props = {
    onClick: () => void;
    label: string;
};

export default function MediaSettingsMenuBackItem({ onClick, label }: Props): JSX.Element {
    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div
            aria-haspopup="true"
            className="bp-MediaSettingsMenuBackItem"
            data-type="menu"
            onClick={onClick}
            role="menuitem"
            tabIndex={0}
        >
            <div className="bp-MediaSettingsMenuBackItem-arrow">
                <IconArrowLeft24 />
            </div>
            <div aria-label={label} className="bp-MediaSettingsMenuBackItem-label">
                {label}
            </div>
        </div>
    );
}
