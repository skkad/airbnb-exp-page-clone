import React from 'react';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {carouselImage,fixedDataBottom,fixedDataTop} from '../Themes/componentStyles'


const BasicCard = ({title,tagLine,imgUrl})=> {
  
    return (
      <Box className="carouselCard"
            sx={{flexGrow:1,position:'relative'}}
      >
        <Box sx={carouselImage} component="img" alt={title} src={imgUrl}></Box>
        <Box sx={fixedDataTop} >
          <Box>
            <Typography variant='h6' sx={{color:'white'}}>{title}</Typography>
            <Typography variant='body2' component="h3" sx={{color:'white',fontWeight:'Bold',fontSize:'30px'}}>{tagLine}</Typography>
          </Box>

        </Box>
        <Box sx={fixedDataBottom}>
          <Button size="small" color="inherit" variant="outlined" sx={{backgroundColor:'white',borderRadius:3}}>Show All</Button>
        </Box>
      </Box>   
    );
  }

  export default BasicCard