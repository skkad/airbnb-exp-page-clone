import React from 'react';
// import {FiCard,
//   FiCardActions,
//   FiCardContent,
//   FiCardMedia} from './FullimageCard';

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
// import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import makeStyles from "@mui/material/styles/makeStyles";
import Box from "@mui/material/Box";


// const useStyles = makeStyles({
//   container: {
//     display: "flex",
//     flexDirection: "row",
    
//   },
//   card:{
//     maxWidth: 345,
//   },
//   media:{
//     height: 140,
//   },
//   fiCardContent: {
//     color: "#ffffff",
//     backgroundColor: "rgba(0,0,0,.24)"
//   },
//   fiCardContentTextSecondary: {
//     color: "rgba(255,255,255,0.78)"
//   }
// })

const BasicCard = ({title,tagLine,imgUrl})=> {
  // const classes = useStyles();
    return (
      // <Box my={4}>
      //   <Typography>{title}</Typography>
      //   <FiCard className={classes.card}>
      //     <FiCardMedia media="picture" image={imgUrl} />
      //     <FiCardContent>
      //       <Typography variant='h6'>{title}</Typography>
      //       <Typography variant='body2' component="h3">{tagLine}</Typography>
      //     </FiCardContent>
      //     <FiCardActions>
      //       <Button size="small" color="inherit" variant="outlined">Show All</Button>
      //     </FiCardActions>
      //   </FiCard>
      // </Box>
      <Container  sx={{border:'1px solid #ddd', borderRadius: 5,backgroundColor: 'black',color:'#ddd'}}>
        <Box my={10} >
          <Card sx={{height:'140px',backgroundColor: 'black',color:'#ddd'}}>
            <CardMedia component="img" alt={title} img={imgUrl}/>
            <CardContent>
              <Typography variant='h6' >{title}</Typography>
              <Typography variant='body2' component="h3">{tagLine}</Typography>
            </CardContent>
            <CardActions >
              <Button size="small" color="inherit" variant="outlined">Show All</Button>
            </CardActions>
          </Card>
        </Box>
      </Container>

    );
  }

  export default BasicCard