import React, { Fragment, useRef } from "react";
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
import FooterLogo from "../../../assets/images/logos/footer-logo.png"
import {BsInstagram} from 'react-icons/bs'
import {AiFillFacebook}from "react-icons/ai"
import {BsYoutube } from "react-icons/bs"


/* import facebook from "../../../assets/images/SocialMediaIcons/facebook.png"
import instagram from "../../../assets/images/SocialMediaIcons/instagram.png"
import youtube from "../../../assets/images/SocialMediaIcons/youtube.png"
 */
const Footer = (props) => {

  return (
  <>
  <div style={{display:"flex",marginTop:"50", }}>
  <div style={{height:200}}>
      <img style={{height:200}} src={FooterLogo}/>
  </div>
  <Grid container style={{marginLeft:100}}>
<Grid item sm={3} >
  <Typography style={{color:"#0000007a", fontSize:30, fontWeight:600}}>COMPANY</Typography>
  <div style={{display:"grid", justifyContent:"flex-start", marginTop:10}}>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px"}}>ABOUT US</Typography>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px"}}>MEDIA KIT</Typography>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px"}}>NEWSLETTER</Typography>
  </div>
</Grid>
<Grid item sm={3} >
  <Typography style={{color:"#0000007a", fontSize:30, fontWeight:600}}>SERVICES</Typography>
  <div style={{display:"grid", justifyContent:"flex-start", marginTop:10}}>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px"}}>BOARDING</Typography>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px"}}>GROOMING</Typography>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px"}}>SWIMMING</Typography>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px"}}>TRAINING</Typography>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px"}}>PICK AND DROP</Typography>

  </div>
</Grid>
<Grid item sm={3} >
  <Typography style={{color:"#0000007a", fontSize:30, fontWeight:600}}>SUPPORT</Typography>
  <div style={{display:"grid", justifyContent:"flex-start", marginTop:10}}>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px"}}>HELP CENTER</Typography>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px"}}>CONTACT US</Typography>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px"}}>LOCATION</Typography>
  </div>
</Grid>
<Grid item sm={3} >
  <Typography style={{color:"#0000007a", fontSize:30, fontWeight:600}}>COMMUNITY</Typography>
  <div style={{display:"grid", justifyContent:"flex-start", marginTop:10}}>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px"}}>FACEBOOK<AiFillFacebook/> </Typography>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px"}}><BsInstagram/>INSTAGRAM</Typography>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px"}}>YOUTUBE</Typography>
  </div>
</Grid>

</Grid>
</div>
<div style={{height:80, background:"black", display:"grid", justifyContent:"center", alignItems:"center"}}>
  <div style={{display:"flex", justifyContent:"space-evenly"}}>
    <facebook />
    <instagram/>
    <yutube/>
  </div>
  <Typography>©{new Date().getFullYear()} Canaan Pet Resort is a unit of Canaan Pet Ventures Pvt. Ltd. All Rights Reserved</Typography>
</div>
</>
  );
};

export default withStyles(useStyles)(Footer);
