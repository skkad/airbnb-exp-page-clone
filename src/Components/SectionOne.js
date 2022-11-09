import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import { dFlex, flexBetweenCenter } from "../Themes/componentStyles";
import Container from "@mui/material/Container";
import BasicCard from "./BasicCard";
import { sectionOneData } from "../Data/mockData";
import { Grid } from "@mui/material";


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
                    {/* carsoule arrow */}
                </Box>
                {/* <BasicCard title="Collection" tagLine="Most popluar around the word" imgUrl="../../public/images/s1/img-1.jpg" /> 
                <BasicCard title="Collection" tagLine="Most popluar around the word" imgUrl="../../public/images/s1/img-1.jpg"/>
                <BasicCard title="Collection" tagLine="Most popluar around the word" imgUrl="../../public/images/s1/img-1.jpg"/> */}

                <Grid container spacing={{ xs: 2, md: 3 }}>
                {data.map((item)=>{
                    return (
                        <Grid item xs='auto' sm={6} md={4} key={item.id}>
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