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

    const handleFb=()=>{
      const url = "https://www.facebook.com/petzservices/"
      window.open(url, "_blank");
    }
    const handleInsta=()=>{
      const url = "https://instagram.com/canaanpetresort?utm_medium=copy_link"
      window.open(url, "_blank");
    }
    const handleYt=()=>{
      const url = "https://youtube.com/channel/UCCCsSEZ5fFPwWjVuWqy6i6Q"
      window.open(url, "_blank");
    }


  return (
  <>
   <Hidden only={"xs"}>
  <div style={{display:"flex",marginTop:100,padding:"10px 0px", boxShadow:"0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)" }}>
  <div style={{height:200}}>
      <img style={{height:200}} src={FooterLogo}/>
  </div>
  <Grid container style={{marginLeft:100}}>
<Grid item sm={3} >
  <Typography style={{color:"#0000007a", fontSize:30, fontWeight:600}}>COMPANY</Typography>
  <div style={{display:"grid", justifyContent:"flex-start", marginTop:10}}>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px",cursor:"pointer"}}>ABOUT US</Typography>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px",cursor:"pointer"}}>MEDIA KIT</Typography>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px",cursor:"pointer"}}>NEWSLETTER</Typography>
  </div>
</Grid>
<Grid item sm={3} >
  <Typography style={{color:"#0000007a", fontSize:30, fontWeight:600}}>SERVICES</Typography>
  <div style={{display:"grid", justifyContent:"flex-start", marginTop:10}}>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px",cursor:"pointer"}} onClick={handleBoarding}>BOARDING</Typography>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px",cursor:"pointer"}}onClick={handleGrooming}>GROOMING</Typography>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px",cursor:"pointer"}}onClick={handleSwimming}>SWIMMING</Typography>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px",cursor:"pointer"}}onClick={handleTraining}>TRAINING</Typography>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px",cursor:"pointer"}}onClick={handlePickup}>PICK AND DROP</Typography>

  </div>
</Grid>
<Grid item sm={3} >
  <Typography style={{color:"#0000007a", fontSize:30, fontWeight:600}}>SUPPORT</Typography>
  <div style={{display:"grid", justifyContent:"flex-start", marginTop:10}}>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px",cursor:"pointer"}}>HELP CENTER</Typography>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px",cursor:"pointer"}}>CONTACT US</Typography>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px",cursor:"pointer"}}>LOCATION</Typography>
  </div>
</Grid>
<Grid item sm={3} >
  <Typography style={{color:"#0000007a", fontSize:30, fontWeight:600}}>COMMUNITY</Typography>
  <div style={{display:"grid", justifyContent:"flex-start", marginTop:10}}>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px", cursor:"pointer"}} onClick={handleFb}>FACEBOOK </Typography>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px",cursor:"pointer"}} onClick={handleInsta}>INSTAGRAM</Typography>
  <Typography  style={{color:"#0000007a", fontSize:18, fontWeight:500, margin:"5px 0px",cursor:"pointer"}} onClick={handleYt}>YOUTUBE</Typography>
  </div>
</Grid>

</Grid>
</div>
</Hidden>
<div style={{height:80, background:"black", display:"grid", justifyContent:"center", alignItems:"center"}}>
  <div style={{display:"flex", justifyContent:"space-evenly"}}>
    <facebook />
    <instagram/>
    <yutube/>
  </div>
 
  <Typography style={{color:"white", textAlign:"center"}}>©{new Date().getFullYear()} Canaan Pet Resort is a unit of Canaan Pet Ventures Pvt. Ltd. All Rights Reserved</Typography>

</div>
</>
  );
};

export default withStyles(useStyles)(Footer);
