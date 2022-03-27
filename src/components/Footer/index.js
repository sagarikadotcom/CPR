import React, { Fragment, useRef } from "react";
import { useHistory } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/styles";
import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Grid, Hidden, Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";

import FooterLogo from "../../assets/images/logos/footer-logo.png"
import {BsInstagram} from 'react-icons/bs'
import {AiFillFacebook}from "react-icons/ai"
import {BsYoutube } from "react-icons/bs"
import { GlobalRoutes } from "../../GlobalRouter/Routes";
import {  useNavigate  } from "react-router-dom";


/* import facebook from "../../../assets/images/SocialMediaIcons/facebook.png"
import instagram from "../../../assets/images/SocialMediaIcons/instagram.png"
import youtube from "../../../assets/images/SocialMediaIcons/youtube.png"
 */
const Footer = (props) => {
  const navigate = useNavigate();

    const handleBoarding=()=>{
        navigate(GlobalRoutes.BOARDING.path);
       
    }

    const handleTraining=()=>{
        navigate(GlobalRoutes.TRAINING.path);
    }

    const handleGrooming=()=>{
        navigate(GlobalRoutes.GROOMING.path);
    }

    const handleSwimming=()=>{
        navigate(GlobalRoutes.SWIMMING.path);
    }

    const handlePickup=()=>{
        navigate(GlobalRoutes.PICKUP.path);
    }

    const handleBehavior=()=>{
        navigate(GlobalRoutes.BEHAVIOR.path);
    }
  return (
  <>
  <div style={{display:"flex",marginTop:100,padding:"10px 0px", boxShadow:"0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)" }}>
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
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px"}} onClick={handleBoarding}>BOARDING</Typography>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px"}}onClick={handleGrooming}>GROOMING</Typography>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px"}}onClick={handleSwimming}>SWIMMING</Typography>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px"}}onClick={handleTraining}>TRAINING</Typography>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px"}}onClick={handlePickup}>PICK AND DROP</Typography>

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
