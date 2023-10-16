import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { POST, QUESTION, ANSWER } from '../../constants/actionType'
import CardContent from './CardContent'
export default function LabTabs(props) {
    
    
    const [value, setValue] = React.useState(POST);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="Profile actions"  >
                        <Tab label="Question" value={QUESTION} />
                        <Tab label="Answer" value={ANSWER} />
                        <Tab label="Post" value={POST} />
                        <Tab label= "Followers" value ='FOLLOWERS'/>
                        <Tab label= "Following" value ='FOLLOWING'/>
                    </TabList>
                </Box>
                <TabPanel value={QUESTION}><CardContent type={QUESTION} profile={props.profile} /></TabPanel>
                <TabPanel value={ANSWER}><CardContent type={ANSWER} profile={props.profile} /></TabPanel>
                <TabPanel value={POST}><CardContent type={POST} profile={props.profile} /></TabPanel>
                <TabPanel value= 'FOLLOWERS' ><CardContent type='FOLLOWERS' profile={props.profile} /></TabPanel>
                <TabPanel value='FOLLOWING'><CardContent type='FOLLOWING' profile={props.profile} /></TabPanel>
            </TabContext>
        </Box>
    );
}
