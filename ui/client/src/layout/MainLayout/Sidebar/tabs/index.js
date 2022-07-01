import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { InsertEmoticonOutlined, ExtensionOutlined, AppsOutlined, MonitorOutlined } from '@mui/icons-material';
import Loadable from '../../../../ui-component/Loadable';
import { lazy } from 'react';

// ==============================|| MAIN CONTENT/TABS ||============================== //

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

export default function BasicTabs() {
    const DappsPage = Loadable(lazy(() => import('views/dapps/appsPage')));

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab icon={<InsertEmoticonOutlined />} iconPosition="start" label="我的" {...a11yProps(0)} />
                    <Tab icon={<ExtensionOutlined />} iconPosition="start" label="插件" {...a11yProps(1)} />
                    <Tab icon={<AppsOutlined />} iconPosition="start" label="Dapps" {...a11yProps(2)} />
                    <Tab icon={<MonitorOutlined />} iconPosition="start" label="监控" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                开发中...
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                <DappsPage />
            </TabPanel>
        </Box>
    );
}
