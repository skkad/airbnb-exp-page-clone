import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { dFlex, flexBetweenCenter } from "../Themes/componentStyles";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import {FaArrowCircleLeft,FaArrowCircleRight} from 'react-icons/fa';
import  IconButton  from '@mui/material/IconButton';
import { locations } from "../Data/mockData";
import TopCard from "./TopCard";

const TopSellerSection = ()=>{
    const data = locations;
    return(
        <Box sx={{...dFlex}}>
        <Container maxWidth="xl">
            <Box sx={{...flexBetweenCenter,minHeight: 70}}>
                <Typography sx={{ml:1,fontWeight:'Bold',fontSize:'30px'}}>
                    Top Sellers
                </Typography>
                <Container sx={{...dFlex,justifyContent:'flex-end',alignItems:'center'}}>
                    <IconButton >
                        <FaArrowCircleLeft />  
                    </IconButton>
                    <IconButton >
                        <FaArrowCircleRight />
                    </IconButton>
                </Container>               
            </Box>
            <Grid container spacing={{ xs: 2,md:1}}>
                {data.map((item)=>{
                    return(
                        <Grid item xs={12} sm={3} md={2} key={item.id}>
                            <TopCard locationImages={item.locationImages} location={item.location} desc={item.desc} price={item.price} rating={item.rating} />
                        </Grid>
                    )
                })}
                {/* <TopCard/> */}
            </Grid>
            
        </Container>
        </Box>
    );
}

export default TopSellerSection;