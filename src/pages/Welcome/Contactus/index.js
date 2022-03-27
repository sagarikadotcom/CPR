import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/styles";
import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Grid, Hidden, Paper } from "@material-ui/core";
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




import {MdOutlineDoubleArrow} from 'react-icons/md'
const Contactus = (props) => {

  return (
  <>
   <Grid container spacing ={4} style={{margin:"10px auto", display:"flex", justifyContent:"center", width:"80%", }}>
     <h1 style={{color:"black"}}>We are Located at</h1>
     
     </Grid>
 
   <div style={{width:"100%"}}>
   <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15545.499877250826!2d77.6683694!3d13.0754058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa310a7b7921c7e56!2sCanaan%20Pet%20Resort.%20(Cpr%201)!5e0!3m2!1sen!2sin!4v1648294753891!5m2!1sen!2sin" width="100%" height="500" frameBorder="0"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
</>
  );
};

export default withStyles(useStyles)(Contactus);
