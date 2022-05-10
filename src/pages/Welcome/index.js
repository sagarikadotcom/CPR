import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/styles";
import { Button, Card, Grid, Hidden, Paper, useScrollTrigger } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Carousel from 'react-material-ui-carousel'
import { useStyles } from "./styles";
import { GlobalRoutes } from "../../GlobalRouter/Routes";
import GoToTop from "../../assets/images/go-top-bt.svg";
import Header from '../../components/Header'
import Banner from '../../assets/images/corousel/banner.png'
import Banner1 from '../../assets/images/corousel/banner2.jpg'

import Banner2 from '../../assets/images/corousel/banner3.jpg'
import Offleash from '../../assets/images/FacilityIcons/offleash.png'
import Clean from '../../assets/images/FacilityIcons/clean.png'
import CCTV from '../../assets/images/FacilityIcons/cctv.png'
import fan from '../../assets/images/FacilityIcons/fan.png'
import pickup from '../../assets/images/FacilityIcons/pickup.png'
import updates from '../../assets/images/FacilityIcons/updates.png'

import { green, pink } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import snippet from '../../assets/images/snippet.PNG'
import Description from './Description'
import Services from './Services'
import Contactus from './Contactus'
import Footer from "./Footer"
import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import Aboutus from './Aboutus'
const Welcome = (props) => {

  const homeRef = useRef(null);
  const serviceRef = useRef(null);
  const aboutUsRef = useRef(null);
  const contactUsRef=useRef(null)
  let trigger = useScrollTrigger({ disableHysteresis: true });

  const scrollToHome = () => homeRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToServices = () => serviceRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToAboutUs = () => aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToContactUs = () => contactUsRef.current.scrollIntoView({ behavior: "smooth" });

  let items = [
   Banner,Banner1,Banner2
]

const   Item=(props)=>
{
    return (
        <Paper className={props.props.classes.paper}>
           <img src={props.item} style={{width:"100%"}}/>
                  </Paper>
    )
}
  return (
    <>
    <Header  trigger={trigger} scrollToHome={scrollToHome} scrollToServices={scrollToServices} scrollToAboutUs={scrollToAboutUs} scrollToContactUs={scrollToContactUs}/>
        <Carousel indicators={false}   >
            {
                items.map( (item, i) => <Item key={i} item={item} props={props} /> )
            }
        </Carousel>
       <div style={{margin:"auto", display:"flex", justifyContent:"center"}}ref={homeRef}>
         <img src ={snippet} className={props.classes.snippet}/>
       </div>
       <div style={{background: "transparent linear-gradient(180deg, #11b3f229 0%, #00000000 100%) 0% 0% no-repeat padding-box"}}>

         <Grid container style={{display:"flex", justifyContent:"center",maxWidth:1298, margin:"auto", }}>
           <Description style={{display:"flex", justifyContent:"center",}}/>
         
         </Grid>
         <Grid container style={{display:"flex", justifyContent:"center",maxWidth:1298, margin:"auto", padding:50}} ref={serviceRef}>
            <Services/>
         </Grid>
         {/* <Grid container style={{display:"flex", justifyContent:"center",maxWidth:1298, margin:"auto", padding:50}}>
            <Aboutus/>
         </Grid> */}
         </div>
         <Grid container style={{display:"flex", justifyContent:"center",}} ref={contactUsRef} >
         <Contactus />
         </Grid>
          
         <div style={{height:70, background:"black", display:"grid", justifyContent:"center", alignItems:"center", color:"white"}}>
 {/*  <div style={{display:"flex", justifyContent:"space-evenly", padding:"3px 0px"}}>
    <Facebook />
    <Instagram/>
    <YouTube/>
  </div> */}
  <Typography style={{textAlign:"center"}}>©{new Date().getFullYear()} Canaan Pet Resort is a unit of Canaan Pet Ventures Pvt. Ltd. All Rights Reserved</Typography>
</div>
</>
  );
};

export default withStyles(useStyles)(Welcome)
