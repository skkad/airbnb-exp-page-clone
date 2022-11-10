import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {FaStar,FaRegHeart } from 'react-icons/fa'
import { fixedIcon,carouselImage} from "../Themes/componentStyles";

const TopCard = ({locationImages,location,desc,price,rating})=>{
    return(
        <Box className="carouselCard"
            width="300px"
            height="400px"
            sx={{
            flexGrow: 1,
            position: 'relative',
            p:1
            }}
        >
            <Box sx={fixedIcon}>
                <FaRegHeart size={24} color="#fff" />
            </Box>
            <Box
                component="img"
                sx={carouselImage}
                src={locationImages.url}
                 alt={locationImages.id}
            ></Box>
            <Box sx={{overflowWrap:"break-word"}}>
                <Box sx={{ mt: 2 }} >
                    <FaStar/>
                    <Typography component="span">{rating}</Typography>
                    <Typography component="span">{location}</Typography>
                    <Typography variant="body2"  >{desc}</Typography>
                    <Typography ><b>{price}</b></Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default TopCard;