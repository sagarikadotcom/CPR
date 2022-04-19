import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/styles";
import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Grid, Hidden, Paper, useTheme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Carousel from 'react-material-ui-carousel'
import { useStyles } from "./styles";
import Boarding from '../../../assets/images/services/boarding.jpg'
import Behaviour from '../../../assets/images/services/behaviour.png'
import Pickup from '../../../assets/images/services/Pickupanddrop.jpg'
import Swimming from '../../../assets/images/services/swimming.jpg'
import Training from '../../../assets/images/services/training.jpg'
import Grooming from '../../../assets/images/services/grooming.jpg'
import useMediaQuery from "@material-ui/core/useMediaQuery";

import {FiMail,FiPhoneCall} from "react-icons/fi"
import {ImLocation} from "react-icons/im"
import {MdOutlineDoubleArrow} from 'react-icons/md'

const Contactus = (props) => {
  const theme = useTheme();
  
  const matches = useMediaQuery(theme.breakpoints.only("xs"));
  return (
  <div style={{ background:"aliceblue", width:"100%"}}>
    <h1 style={{color:"black", textAlign:"center", fontSize:30, fontWeight:700 }}>CONTACT US</h1>
   <Grid container spacing ={matches?0:4} className={props.classes.gridContainer}>
          
 <Grid item sm={6} xs={12}style={{textAlign:"center", display:"flex",justifyContent:"center", color:"black"}}>
   <Card style={{width:"100%", display:"flex", justifyContent:"center"}}>
     <div style={{margin:"auto",}}>
     <Typography style={{color:"black", fontSize:16, fontWeight:700, margin:20}}><FiMail style={{margin:"0px 5px"}}/> hello@canaanpetresort.com</Typography>
     <Typography style={{color:"black", fontSize:16, fontWeight:700,margin:20}}><FiPhoneCall style={{margin:"0px 5px"}}/> +91 8951133804, +91 8722804740</Typography>
     <Grid container  style={{margin:20, width:"100%"}}>
       <Grid item  style={{margin:5,fontSize:16}}>
         <Typography style={{color:"black", fontSize:16, fontWeight:700}}><ImLocation/>Canaan Pet Resort
</Typography>
         <Typography style={{color:"black", fontSize:16}}>Dodda Gubbi Main Rd,
         </Typography>
         <Typography style={{color:"black", fontSize:16}}>Off Hennur – Bagalur Road
         </Typography>
         <Typography style={{color:"black", fontSize:16}}>Near Alpha College of Engineering.
         </Typography>
         <Typography style={{color:"black", fontSize:16}}>Dodda Gubbi, Karnataka 560077
</Typography>
       </Grid>
       <Grid item>
       <Typography style={{color:"black", fontSize:16, fontWeight:700}}><ImLocation/>Canaan pet resort and K9 Academy
</Typography>
<Typography style={{color:"black", fontSize:16}}>1st Main road, 
         </Typography>
         <Typography style={{color:"black", fontSize:16}}>Mitganahalli,
         </Typography>
         <Typography style={{color:"black", fontSize:16}}>Kadusonnapanahalli,
         </Typography>
         <Typography style={{color:"black", fontSize:16}}>Bengaluru, Karnataka 562149
</Typography>
       </Grid>
     </Grid>
     </div>

   </Card>
 </Grid>
 <Grid item sm={6} xs={12}><div style={{width:"100%"}}>
   <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15545.499877250826!2d77.6683694!3d13.0754058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa310a7b7921c7e56!2sCanaan%20Pet%20Resort.%20(Cpr%201)!5e0!3m2!1sen!2sin!4v1648294753891!5m2!1sen!2sin" width="100%" height="500" frameBorder="0"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div></Grid>

     </Grid>
 
   
</div>
  );
};

export default withStyles(useStyles)(Contactus);
