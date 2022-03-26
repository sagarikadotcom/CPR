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
   <Grid container spacing ={4} style={{margin:"50px auto", display:"flex", justifyContent:"center", width:"80%", }}>
     <h1 style={{color:"black"}}>We are Located at</h1>
     
     </Grid>
 
   <div style={{width:"100%"}}>
       <iframe src="https://www.google.com/maps/d/embed?mid=1xl1fPbEXygJT_jlIdRX4aCOVBRJVLqJj&ehbc=2E312F" width="100%" height="480"></iframe>
         </div>
</>
  );
};

export default withStyles(useStyles)(Contactus);
