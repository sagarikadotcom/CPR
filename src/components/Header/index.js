import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/styles";
import { Button, Hidden, Toolbar, Typography } from "@material-ui/core";

import { useStyles } from "./styles";
import LogoDarkBig from "../../assets/images/logos/header-logo.png";
import LogoLightBig from "../../assets/images/logos/header-logo.png";
import {  useNavigate  } from "react-router-dom";
import {MdOutlineLocationOn} from "react-icons/md"
import {FiPhoneCall} from 'react-icons/fi'
import { GlobalRoutes } from "../../GlobalRouter/Routes";

const OfflineHeader = (props) => {
  const navigate = useNavigate();
 
  const handleLogoClick=()=>{
    navigate(GlobalRoutes.WELCOME.path);
}

const handleTrainTheTrainer=()=>{
navigate(GlobalRoutes.TRAIN_THE_TRAINER.path);

}
  return (<>
  <Hidden smUp>
  <AppBar  >
      <Toolbar className={props.classes.eventToolbar} >
       <Typography>Become a certified dog trainer in 15 days!</Typography>
       <Typography  style={{color:"#01b7ff"}}>(1st July to 15 July)</Typography>
        </Toolbar>
    </AppBar></Hidden>
    <Hidden  only={"xs"}>
    <AppBar  >
      <Toolbar style={{background:"black", width:"-webkit-fill-available",color:"white", margin:"auto", padding:"0px 75px", display:"flex", justifyContent:"space-between"}} >
      <Typography style={{fontSize:24}}><span ><MdOutlineLocationOn style={{paddingTop:8}}/></span>Bangalore | Events</Typography>
      <Typography style={{fontSize:24}}>Become a certified dog trainer in 15 days! <span  style={{color:"#01b7ff"}}>(1st July to 15 July)</span></Typography>
      <Button onClick={handleTrainTheTrainer}className={props.classes.registerNowbtn}>Register Now</Button>
      </Toolbar>
    </AppBar>
    </Hidden>
   
    <AppBar
      classes={{ root: props.trigger ? props.classes.triggeredRoot : props.classes.appBarRoot }}
      elevation={props.trigger ? 24 : 0}
      >
      <Toolbar classes={{ root: props.classes.toolBarRoot }}>
        <div className={props.classes.toolBarDiv}>
          <img
            src={props.trigger ? LogoDarkBig : LogoLightBig}
            alt="logo"
            className={props.classes.logo}
            onClick={props.scrollToHome}
          />
          <div className={props.classes.buttonsDiv}>
          <Hidden only={"xs"}>
              <Button
                className={props.trigger ?props.classes.hoverBtn:props.classes.btn}
                onClick={handleLogoClick}
              >
                HOME
              </Button>
              <Button
                 className={props.trigger ?props.classes.hoverBtn:props.classes.btn}
                onClick={props.scrollToServices}
              >
                SERVICES
              </Button>
             {/*  <Button
                 className={props.trigger ?props.classes.hoverBtn:props.classes.btn}
              
              >
               ABOUT US
              </Button> */}
              <Button
                 className={props.trigger ?props.classes.hoverBtn:props.classes.btn}
             onClick={props.scrollToContactUs}
              >
              CONTACT US
              </Button>
              </Hidden>
              <Hidden smUp>
              <Button style={{cursor:"none",cursor:"pointer"}} onClick={handleTrainTheTrainer}
                 className={props.trigger ?props.classes.hoverBtn:props.classes.btn}
                           >
                             <FiPhoneCall style={{marginRight:10}}/>
                +91 8951133804
              </Button>
                </Hidden>
          
          </div>
        </div>
      </Toolbar>
    </AppBar>
    </>
  
  );
};

export default withStyles(useStyles)(OfflineHeader);
