import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/styles";
import { Button, Card, Grid, Hidden, Paper } from "@material-ui/core";
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
const Welcome = (props) => {

  let items = [
   Banner,Banner1,Banner2
]

const   Item=(props)=>
{
    return (
        <Paper style={{height:700}}>
           <img src={props.item} style={{width:"100%"}}/>
                  </Paper>
    )
}
  return (
    <>
      <CssBaseline />
    <Header/>
        <Carousel indicators={false}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
       <div style={{margin:"auto", display:"flex", justifyContent:"center"}}>
         <img src ={snippet}/>
       </div>
         <Grid container style={{display:"flex", justifyContent:"center",background: "transparent linear-gradient(180deg, #000000 0%, #00000000 100%) 0% 0% no-repeat padding-box",padding:100}}>
           <Description style={{display:"flex", justifyContent:"center",}}/>
         </Grid>
         <Services/>
         <Contactus/>

</>
  );
};

export default withStyles(useStyles)(Welcome);
