import React from 'react';
import Logo from './Logo';
import Box from '@mui/material/Box';
import { flexBetweenCenter,displayOnDesktop, dFlex} from '../Themes/componentStyles';
import Container  from '@mui/material/Container';
import ProfileSetting from './ProfileSetting';
import MobileSearch from './MobileSearch';

const Header = ()=>{
    return(
        <Box sx={{
            ...dFlex,
            minHeight: 70,
            borderBottom: '1px solid #ddd'
        }}>
            <Container maxWidth="xl">
                <Box sx={{
                    ...flexBetweenCenter,
                    minHeight: 90,
                    px: 4
                    // border: '1px solid #ddd'
                }}>
                    <Box sx={displayOnDesktop}>
                        <Logo/>
                    </Box>
                    <Box sx={displayOnDesktop}>
                        <ProfileSetting/>
                    </Box>
                    <Box sx={{display: {xs: 'flex', md:'none' }}}>
                        <MobileSearch/>
                    </Box>
                    
                </Box>
            </Container>
            
            {/* <h3>This is the header section</h3> */}
        </Box>
    )
}

export default Header;