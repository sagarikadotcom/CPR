import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/styles";
import { Button, Hidden, Toolbar, Typography } from "@material-ui/core";

import { useStyles } from "./styles";
import LogoDarkBig from "../../assets/images/logos/header-logo.png";
import LogoLightBig from "../../assets/images/logos/header-logo.png";
import Facebo0ok from "../../assets/images/SocialMediaIcons/fb.png"
import Insta from "../../assets/images/SocialMediaIcons/insta.png"
import Youtube from "../../assets/images/SocialMediaIcons/yt.png"
import Call from "../../assets/images/SocialMediaIcons/call.png"
import {  useNavigate  } from "react-router-dom";
import { GlobalRoutes } from "../../GlobalRouter/Routes";

const SubHeader = (props) => {
    const navigate = useNavigate();

    const handleLogoClick=()=>{
        navigate(GlobalRoutes.WELCOME.path);
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
            onClick={handleLogoClick}
          />
          <div className={props.classes.buttonsDiv}>
    <img src={Facebo0ok}/>
    <img src={Insta}/>
    <img src={Youtube}/>
    <span style={{display:"flex"}}> <img src={Call}/><div><Typography style={{fontSize:"1rem", fontWeight:600}}>+91 8951133804</Typography><Typography  style={{fontSize:"1rem", fontWeight:600}}>+91 8722804740
</Typography></div> </span>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(useStyles)(SubHeader);
