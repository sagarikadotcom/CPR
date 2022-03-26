import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/styles";
import { Grid, Hidden } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import { useStyles } from "./styles";
import { GlobalRoutes } from "../../GlobalRouter/Routes";
import GoToTop from "../../assets/images/go-top-bt.svg";

const Welcome = (props) => {
  const history = useHistory();

  const fanRef = useRef(null);
  const topRef = useRef(null);
  const artistRef = useRef(null);
  let trigger = useScrollTrigger({ disableHysteresis: true });

  const scrollToFan = () => fanRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToArtist = () => artistRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToTop = () => topRef.current.scrollIntoView({ behavior: "smooth" });

  const handleSignup = () => {
    history.push(GlobalRoutes.SIGNUP.path);
  };

  return (
    <>
      <CssBaseline />
      <Toolbar id="back-to-top-anchor" />
     
      <Grid container direction="column" className={props.classes.container} ref={topRef}>
        <Grid item className={props.classes.bannerGrid}>
          <div>
            <Typography className={props.classes.typo}>WHERE</Typography>
            <Typography className={props.classes.typo}>FANS ARE</Typography>
            <Typography className={props.classes.typo}>INFLUENCERS</Typography>
          
          
          </div>
        </Grid>
      </Grid>
    
      <img src={GoToTop} onClick={scrollToTop} className={props.classes.scrollToTop} alt="scroll to top" />
     
    </>
  );
};

export default withStyles(useStyles)(Welcome);
