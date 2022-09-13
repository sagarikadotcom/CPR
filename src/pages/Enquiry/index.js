import { connect } from "react-redux";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@mui/material/Divider";
import { withStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { useHistory, useLocation } from "react-router-dom";
import { AppBar, Tabs, Tab, Box, Button, Snackbar, Dialog, DialogContent } from "@material-ui/core";
import axios from "axios"

import { useStyles } from "../Welcome/styles";
import EnquiryBackground from "../../assets/images/Enquiry/bg.jpg";
import { Alert, Autocomplete, CircularProgress } from "@mui/material";
import { SettingsBluetooth } from "@mui/icons-material";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const SignIn = (props) => {
 
  const options = [
  {label:"Boarding"},
  {label:"Board & Train"},
  {label:"Training"},
  {label:"Swimming"},
  {label:"Pet relocation"}
  ]

  const[name,setName]=useState()
  const [number,setNumber]=useState()

  const[email,setEmail]=useState()
  const [Address,setAddress]=useState()
  const[pincode,setPincode]=useState()
  const[service,setService]=useState()
  const [SubmitStatus,setSubmitStatus]=useState(false)
const [loader,setLoader]=useState()
  const handleName=(e)=>{
setName(e.target.value)
  }

  const hanldeContactNumber=(e)=>{
setNumber(e.target.value)
  }

  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }

  const handleAddress=(e)=>{
    setAddress(e.target.value)

  }
  const handlePinCode=(e)=>{
    setPincode(e.target.value)

  }

  const handleService=(e)=>{
    setService(e.target.innerText)
  }


  const handleSubmit=()=>{
    setSubmitStatus(false)

    const data={
      Name:name,
      Number:number,
      Email:email,
      Address:Address,
      Pincode:pincode,
      Service:service
    }
    setLoader(true)
axios.post("https://sheet.best/api/sheets/b4c8383f-7c0c-490f-829d-5cb0fdae6537",data).then((response)=>{
  if(response.status===200){
    setLoader(false)

    setSubmitStatus(true)
    setName("")
    setNumber("")
    setEmail("")
    setAddress("")
    setPincode("")
    setService("")
  }
 
})
  }
  const handleClose=()=>{
setSubmitStatus(false)
  }

  return (
    <>
   
    {SubmitStatus && <Snackbar open={true} autoHideDuration={3000} onClose={handleClose} >
        <Alert  severity="success" sx={{ width: '100%', backgroundColor:"lightgreen" }}>
         Enquiry submitted successfully!
        </Alert>
      </Snackbar>}
      <Grid container className={props.classes.root}>
        <Grid item xs={12} sm={12} md={6} className={props.classes.image} >
          <div>

          <Typography className={props.classes.signUpHeader} style={{color:"white"}}>Welcome</Typography>
        <Typography className={props.classes.signUpHeader}style={{color:"white"}}>To</Typography>
        <Typography className={props.classes.signUpHeader}style={{color:"white"}}>CANAAN PET RESORT</Typography>
          </div>
        </Grid>
      

        <Grid item xs={12} sm={12} md={6} className={props.classes.formGrid}>
          <Paper className={props.classes.paper}>
        
    {loader&&
    <Dialog
      open={true}
             aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
     
      <DialogContent style={{background:"transparent"}}>
      <CircularProgress/>
      </DialogContent>
           </Dialog>}
 
            <div className={props.classes.div}>
                 <Grid
                  container
                  direction="row"
                  spacing={3}
                  className={props.classes.formContainer}
                  justifyContent="center"
                >
                  <Grid item  sm={12} xs={8}>
        <TextField id="outlined-basic" placeholder="Name*" variant="outlined" style={{margin:"16px 0px"}} value={name} onChange={handleName} fullWidth/>
        <TextField id="outlined-basic" placeholder="Phone Number*" type="number" variant="outlined" style={{margin:"16px 0px"}} value={number} onChange={hanldeContactNumber}fullWidth/>
        <TextField id="outlined-basic" placeholder="Email*" variant="outlined" style={{margin:"16px 0px"}} value={email}onChange={handleEmail}fullWidth/>
        <TextField id="outlined-basic" placeholder="Address"variant="outlined"style={{margin:"16px 0px"}} value={Address} onChange={handleAddress}fullWidth/>
        <TextField id="outlined-basic" placeholder="pincode*"variant="outlined" type="number" style={{margin:"16px 0px"}} value={pincode}onChange={handlePinCode}fullWidth/>
        <Autocomplete
        sx={{
          display: 'inline-block',
          '& input': {
            width: 184,
            bgcolor: 'background.paper',
            border:"1px solid lightgray",
              height:39,
              padding:"9px",
              borderRadius:1,
               width:"93%"        
          },
          width:"100%"
        }}
        id="custom-input-demo"
        options={options}
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <input type="text" {...params.inputProps} placeholder="Select Service" />
          </div>
        )}
        onChange={handleService}
        clearOnBlur={true}
      />
                  </Grid>
                  <Grid item sm={12} xs={8} className={props.classes.buttonContainer}>
                                       <Button style={{background:"#01b7ff  0% 0% no-repeat padding-box", width:"100%",borderRadius:"25px"}} onClick={handleSubmit}>
                   Submit
                    </Button>
                  
                  </Grid>
                </Grid>
            
            </div>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default (withStyles(useStyles)(SignIn));