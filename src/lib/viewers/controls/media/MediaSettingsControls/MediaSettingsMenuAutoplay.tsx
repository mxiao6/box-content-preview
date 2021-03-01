import React from 'react';
import classNames from 'classnames';
import MediaSettingsMenu, { Props as MediaSettingsMenuProps, Ref as MediaSettingsMenuRef } from './MediaSettingsMenu';
import MediaSettingsMenuBackItem from './MediaSettingsMenuBackItem';
import MediaSettingsMenuSubItem from './MediaSettingsMenuSubItem';

export type Props = MediaSettingsMenuProps & {
    autoplay: boolean;
    onAutoplayChange: (autoplay: boolean) => void;
    onReturn: () => void;
};

export type Ref = MediaSettingsMenuRef;

function MediaSettingsMenuAutoplay(
    { autoplay, className, isActive, onAutoplayChange, onReturn }: Props,
    ref: React.Ref<Ref>,
): JSX.Element {
    const handleEnabledClick = (): void => {
        onAutoplayChange(true);
        onReturn();
    };

    const handleDisabledClick = (): void => {
        onAutoplayChange(false);
        onReturn();
    };

    return (
        <MediaSettingsMenu ref={ref} className={classNames('bp-SettingsMenuAutoplay', className)} isActive={isActive}>
            <MediaSettingsMenuBackItem label={__('media_autoplay')} onClick={onReturn} />
            <MediaSettingsMenuSubItem
                isSelected={!autoplay}
                onClick={handleDisabledClick}
                value={__('media_autoplay_disabled')}
            />
            <MediaSettingsMenuSubItem
                isSelected={autoplay}
                onClick={handleEnabledClick}
                value={__('media_autoplay_enabled')}
            />
        </MediaSettingsMenu>
    );
}

export default React.forwardRef(MediaSettingsMenuAutoplay);
