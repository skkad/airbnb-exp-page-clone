import React ,{useState} from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Container from '@mui/material/Container';
import { locationsTab,fixedTab } from '../Data/mockData';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

const OptionsTab = ()=>{
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return(
        <Container maxWidth='xl'>
            {/* fixed tab box*/}
            <Box sx={{
                    display: 'flex',
                    flexGrow: 1,
                    px: { xs: 0, md: 2 },
                    alignItems: 'center',
                    mt: 2,
                    mb: 2,
             }}>
                <Tabs >
                    
                    {fixedTab.map((tab)=>{
                        return <Typography key={tab.id} sx={{border:'1px solid #ddd',borderRadius: 4,p:1}} mx={0.3} >{tab.lable}</Typography>
                    })}
                </Tabs> 
                {/* scroll tab box*/}
                <Container>
                    <Tabs value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons
                        sx={{
                            [`& .${tabsClasses.scrollButtons}`]: {
                            '&.Mui-disabled': { opacity: 0.3 },
                            },
                    }}>
                        {locationsTab.map((tab)=>{
                            return <Typography key={tab.id} sx={{border:'1px solid #ddd',borderRadius: 4,p:1,backgroundColor:'#ededed'}} mx={2} >
                                <Link href={tab.locationUrl}>{tab.lable}</Link>
                                </Typography>
                        })}
                    </Tabs>
                </Container>
            </Box>     
        </Container>
    )
}

export default OptionsTab;