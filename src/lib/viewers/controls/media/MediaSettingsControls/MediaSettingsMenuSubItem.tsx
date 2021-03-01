import React from 'react';
import classNames from 'classnames';
import IconCheckMark24 from '../../icons/IconCheckMark24';
import './MediaSettingsMenuSubItem.scss';

export type Props = {
    isSelected: boolean;
    onClick: () => void;
    value: string;
};

export default function MediaSettingsMenuSubItem({ isSelected, onClick, value }: Props): JSX.Element {
    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div
            aria-checked={isSelected ? 'true' : 'false'}
            className="bp-MediaSettingsMenuSubItem"
            onClick={onClick}
            role="menuitemradio"
            tabIndex={0}
        >
            <div
                className={classNames('bp-MediaSettingsMenuSubItem-icon', {
                    'bp-is-active': isSelected,
                })}
            >
                <IconCheckMark24 />
            </div>
            <div
                className={classNames('bp-MediaSettingsMenuSubItem-value', {
                    'bp-is-active': isSelected,
                })}
            >
                {value}
            </div>
        </div>
    );
}
