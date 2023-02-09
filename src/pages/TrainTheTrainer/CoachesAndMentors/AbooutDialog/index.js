import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Typography, withStyles } from '@material-ui/core';
import { useStyles } from './styles';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const  AbooutDialog=(props)=> {


  const handleClose = () => {
   props.setOpenDialog(false)
  };
const KumarsDetails=()=>{
    return(
<Dialog
    open={true}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
  
  >
    <DialogTitle >
        <Typography className={props.classes.name}>
        Mr. kumar R
            </Typography></DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
        <Typography  >
        Mr. Kumar has been actively involved in the pet industry for the last 15 years and is an accomplished trainer who has participated in the IGP dog sports competition in Europe with  his Belgian Malinois – Cairo (The only IGP1 dog in South India) and PDC in PSA dog sports competetion. 
        </Typography>
        <br/>
        <Typography>
        Canaan Pet Resort & K9 Academy was established in 2010 by him, to provide the best boarding and training facility to all pets. Kumar specializes in obedience training through positive reinforcement, resolving fear & aggression issues, and has trained 1000+ dogs.
        </Typography>
        <br/>
        <Typography>
        Kumar regularly conducts ‘Advanced dog training’ workshops in Bangalore at his facility and trained 180+ trainers. He has mastered this training over years of experience, practical training, and theoretical learning.  He has worked personally with top trainers in Europe and completed formal courses under various nationally and internationally acclaimed trainers. These include Shirin Merchant, Jeff Riccio, Arnold Kivago, Michael Lee, and currently with Nino Drowaert [STSK9].
        </Typography>
       
      </DialogContentText>
    </DialogContent>
    <DialogActions>
    <Button size="small" color="primary" onClick={handleClose}>
   Close
    </Button>
    </DialogActions>
  </Dialog>
    )
    
}
const AjaysDetails=()=>{
    return(
<Dialog
    open={true}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
  
  >
    <DialogTitle >
        <Typography className={props.classes.name}>
        Mr. Ajay Thambi
            </Typography></DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
        <Typography  >
        Ajay is a postgraduate in management and has worked for over 15 years with India’s top business groups in various leadership roles. With an urge to build something meaningful of his own and to follow his passion, Ajay decided to call his corporate career quits and dedicate his time and skills to Canaan Pet Resort & K9 Academy. He is a trained Canine Behaviourist and trainer under Shirin Merchant, IGP training under Arnold Kivago (2016 FMBB  IPO World Champion), and IGP helper training David Hanel (FMBB and WUSV world  championship helper) </Typography>
        
      </DialogContentText>
    </DialogContent>
    <DialogActions>
    <Button size="small" color="primary" onClick={handleClose}>
   Close
    </Button>
    </DialogActions>
  </Dialog>
    )
    
}
console.log("props.details",props.details)
  return (
    <div>
        {props.details==="KUMAR"?<KumarsDetails/>:<AjaysDetails/>}
   
    </div>
  );
}

export default withStyles(useStyles)(AbooutDialog);

