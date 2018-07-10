import React, { PureComponent } from 'react';
import Tab from 'box-react-ui/lib/components/tab-view/Tab';
import TabView from 'box-react-ui/lib/components/tab-view/TabView';
import PropTypes from 'prop-types';
import Sheet from './sheet';

class Workbook extends PureComponent {
    static propTypes = {
        // eslint-disable-next-line
        workbook: PropTypes.object.isRequired
    };

    render() {
        const { workbook } = this.props;

        const wbSettings = workbook.Workbook;

        const nonHiddenSheetsNames = wbSettings.Sheets.filter((s) => s.Hidden === 0).map((s) => s.name);

        const colorScheme = workbook.Themes ? workbook.Themes.themeElements.clrScheme : [];

        return (
            <TabView className='full-height'>
                {nonHiddenSheetsNames.map((name) => {
                    return (
                        <Tab key={name} title={name}>
                            <Sheet sheet={workbook.Sheets[name]} views={wbSettings.Views} theme={colorScheme} />
                        </Tab>
                    );
                })}
            </TabView>
        );
    }
}

export default Workbook;
