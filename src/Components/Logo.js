import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { flexCenter } from '../Themes/componentStyles';
import { FaAirbnb } from 'react-icons/fa';
import {pink} from '@mui/material/colors';
const Logo = ()=>{
    return(
        <Box sx={flexCenter}>
            <FaAirbnb size={40}  color={pink[500]} />
            <Typography sx={{
                ml:1,
                fontWeight: 'bold',
                fontSize: '20px',
                color: (theme)=> theme.palette.secondary.main
            }}
            component= 'h3'
            >
                airBnB
            </Typography>
        </Box>
    )
}

export default Logo;