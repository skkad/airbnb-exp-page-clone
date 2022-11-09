import  IconButton  from '@mui/material/IconButton';
import  Paper  from '@mui/material/Paper';
import React from 'react';
import {FaArrowCircleLeft} from 'react-icons/fa';

const MobileSearch = ()=>{
    return(
        <Paper >
            <IconButton sx={{display: 'flex', alignContent:'flex-start',border:'1px solid #ddd'}}>
                <FaArrowCircleLeft/>
            </IconButton>
        </Paper>
    )
}

export default MobileSearch;