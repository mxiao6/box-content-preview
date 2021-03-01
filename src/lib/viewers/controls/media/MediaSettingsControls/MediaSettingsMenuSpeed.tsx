import React from 'react';
import classNames from 'classnames';
import MediaSettingsMenu, { Props as MediaSettingsMenuProps, Ref as MediaSettingsMenuRef } from './MediaSettingsMenu';
import MediaSettingsMenuBackItem from './MediaSettingsMenuBackItem';
import MediaSettingsMenuSubItem from './MediaSettingsMenuSubItem';

export type Props = MediaSettingsMenuProps & {
    onRateChange: (rate: string) => void;
    onReturn: () => void;
    rate: string;
};

export type Ref = MediaSettingsMenuRef;

const rateOptions = ['0.5', '1.0', '1.25', '1.5', '2.0'];

function MediaSettingsMenuSpeed(
    { className, isActive, onRateChange, onReturn, rate }: Props,
    ref: React.Ref<Ref>,
): JSX.Element {
    const handleRateChange = (nextRate: string) => (): void => {
        onRateChange(nextRate);
        onReturn();
    };

    return (
        <MediaSettingsMenu ref={ref} className={classNames('bp-SettingsMenuSpeed', className)} isActive={isActive}>
            <MediaSettingsMenuBackItem label={__('media_speed')} onClick={onReturn} />

            {rateOptions.map(rateOption => (
                <MediaSettingsMenuSubItem
                    key={rateOption}
                    isSelected={rateOption === rate}
                    onClick={handleRateChange(rateOption)}
                    value={rateOption === '1.0' ? __('media_speed_normal') : rateOption}
                />
            ))}
        </MediaSettingsMenu>
    );
}

export default React.forwardRef(MediaSettingsMenuSpeed);
