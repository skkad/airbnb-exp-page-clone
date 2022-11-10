import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React  from "react";
import { dFlex, flexBetweenCenter } from "../Themes/componentStyles";
import Container from "@mui/material/Container";
import BasicCard from "./BasicCard";
import { sectionOneData } from "../Data/mockData";
import Grid from "@mui/material/Grid";
import {FaArrowCircleLeft,FaArrowCircleRight} from 'react-icons/fa';
import  IconButton  from '@mui/material/IconButton';


const SectionOne = ()=>{
    const data = sectionOneData;
    return(
        <Box sx={{...dFlex}}>
        {/* // heading component
        //cards carsoule */}
            <Container maxWidth="xl">
                <Box sx={{...flexBetweenCenter,minHeight: 90}}>
                    <Typography sx={{ml:1,fontWeight:'Bold',fontSize:'30px'}}>
                        New This Week
                    </Typography>
                    
                    <Container sx={{...dFlex,justifyContent:'flex-end',alignItems:'center'}}>
                        <IconButton >
                            <FaArrowCircleLeft />  
                        </IconButton>
                        <IconButton>
                            <FaArrowCircleRight />
                        </IconButton>
                    </Container>   
                </Box>
                <Grid container spacing={{ xs: 2, md: 3 }}>
                        {data.map((item)=>{
                            return (
                                <Grid item xs={12} sm={4} md={4} key={item.id}>
                                    
                                    <BasicCard  title={item.title} tagLine={item.tagLine} imgUrl={item.imgUrl}/>
                                    
                                </Grid>
                            )
                            
                        })}
                </Grid>                               
            </Container>
        </Box>
    )
}

export default SectionOne;