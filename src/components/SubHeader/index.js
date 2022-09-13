/* import React from "react";
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
    <img src={Facebo0ok} onClick={handleFb}/>
    <img src={Insta} onClick={handleInsta}/>
    <img src={Youtube} onClick={handleYt}/>
    <span style={{display:"flex", cursor:"none"}}> <img src={Call}/><div><Typography style={{fontSize:"1rem", fontWeight:600}}>+91 8951133804</Typography><Typography  style={{fontSize:"1rem", fontWeight:600}}>+91 8722804740
</Typography></div> </span>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(useStyles)(SubHeader);
 */

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

const SubHeader = (props) => {
  const navigate = useNavigate();
 
  const handleLogoClick=()=>{
    navigate(GlobalRoutes.WELCOME.path);
}
const handleTrainTheTrainer=()=>{
  navigate(GlobalRoutes.TRAIN_THE_TRAINER.path);
  
  }
  return (
    <><Hidden smUp>
    <AppBar  >
        <Toolbar className={props.classes.eventToolbar} >
         <Typography>Become a certified dog trainer in 15 days!</Typography>
         <Typography  style={{color:"#01b7ff"}}>(22 Nov - 6 Dec)</Typography>
          </Toolbar>
      </AppBar></Hidden>
      <Hidden  only={"xs"}>
      <AppBar  >
        <Toolbar style={{background:"black", width:"-webkit-fill-available",color:"white", margin:"auto", padding:"0px 75px", display:"flex", justifyContent:"space-between"}} >
        <Typography style={{fontSize:24}}><span ><MdOutlineLocationOn style={{paddingTop:8}}/></span>Bangalore | Events</Typography>
        <Typography style={{fontSize:24}}>Become a certified dog trainer in 15 days! <span  style={{color:"#01b7ff"}}>(22 Nov - 6 Dec)</span></Typography>
        <Button className={props.classes.registerNowbtn}>Register Now</Button>
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
            onClick={handleLogoClick}
          />
           <Hidden smUp>
           <div className={props.classes.buttonsDiv}>
       
       <Button style={{cursor:"none"}}
          className={props.classes.btn}
                    >
                      <FiPhoneCall style={{marginRight:10}}/>
         +91 8951133804
       </Button>
   </div>
           </Hidden>
       
        </div>
      </Toolbar>
    </AppBar>
    </>
  );
};

export default withStyles(useStyles)(SubHeader);
