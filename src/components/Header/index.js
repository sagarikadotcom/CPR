import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/styles";
import { Button, Hidden, Toolbar } from "@material-ui/core";

import { useStyles } from "./styles";
import LogoDarkBig from "../../assets/images/logos/header-logo.png";
import LogoLightBig from "../../assets/images/logos/header-logo.png";
import {  useNavigate  } from "react-router-dom";

import {FiPhoneCall} from 'react-icons/fi'
import { GlobalRoutes } from "../../GlobalRouter/Routes";

const OfflineHeader = (props) => {
  const navigate = useNavigate();
 
  const handleLogoClick=()=>{
    navigate.push(GlobalRoutes.WELCOME.path);
}
  return (
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
            onClick={props.scrollToTop}
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
                onClick={props.scrollToArtist}
              >
                SERVICES
              </Button>
              <Button
                 className={props.trigger ?props.classes.hoverBtn:props.classes.btn}
              
              >
               ABOUT US
              </Button>
              <Button
                 className={props.trigger ?props.classes.hoverBtn:props.classes.btn}
             
              >
              CONTACT US
              </Button>
              </Hidden>
              <Button style={{cursor:"none"}}
                 className={props.trigger ?props.classes.hoverBtn:props.classes.btn}
                           >
                             <FiPhoneCall style={{marginRight:10}}/>
                +91 8722804740
              </Button>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(useStyles)(OfflineHeader);
