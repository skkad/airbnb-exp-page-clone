import React from "react";
import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import {FaStar,FaRegHeart } from 'react-icons/fa'
import { flexBetween,fixedIcon,carouselImage} from "../Themes/componentStyles";

const TopCard = ({locationImages,location,desc,price,rating})=>{
    return(
        // <Container height="350">
        //     <Box>
        //         <Card>
        //             <CardMedia component="img" height="240" image={locationImages.url} alt="image loading" 
        //             sx={{borderRadius:2}}/>
        //             <CardContent sx={{backgroundColor:'#ededed'}}>
        //                 <Typography componet="div" sx={{display:"flex",flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}} >
        //                     <FaStar ml={1}/> 
        //                     <Typography component="span">{rating}</Typography>
        //                     <Typography component="span">{location}</Typography>
        //                 </Typography>
                        
        //                 <Typography variant="body2" color="text.secondary"sx={{display:"flex",flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}} >
        //                     {desc} 
        //                 </Typography>
        //                 <Typography component="div" sx={{fontFamily:'Bold'}} sx={{display:"flex",flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
        //                     {price}
        //                 </Typography>
        //             </CardContent>
        //         </Card>
        //     </Box>
        // </Container>

        <Box className="carouselCard"
            sx={{
            flexGrow: 1,
            position: 'relative',
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
            <Box sx={flexBetween}>
                <Box sx={{ mt: 2 }} >
                    <FaStar/>
                    <Typography component="span">{rating}</Typography>
                    <Typography component="span">{location}</Typography>
                    <Typography>{desc}</Typography>
                    <Typography sx={{fontWeight:'Bold'}}>{price}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default TopCard;