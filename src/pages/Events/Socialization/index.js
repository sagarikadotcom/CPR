
import { withStyles } from "@material-ui/styles";
import React, { useState } from "react";
import Footer from "../../Welcome/Footer";
import { useStyles } from "./styles";
import Header from '../../../components/SubHeader'
import { Box, Button, Card, CircularProgress, Dialog, DialogContent, FormControl, Grid, InputLabel, MenuItem, Select, Snackbar, TextField, Typography, useMediaQuery, useScrollTrigger, useTheme } from '@material-ui/core'
import axios from "axios";
import { Alert } from "@mui/material";

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


const Socialization=(props)=>{
    const[name,setName]=useState()
    const [number,setNumber]=useState()
      const[email,setEmail]=useState()
    const [DogsName,setDogsName]=useState()
    const[DogsBreed,setDogsBreed]=useState()
    const[DogsAge,setDogsAge]=useState()
    const[InstaHandle,setInstaHandle]=useState()
    const [SubmitStatus,setSubmitStatus]=useState(false)
  const [loader,setLoader]=useState()
  let trigger = useScrollTrigger({ disableHysteresis: true });

  const handleName=(event)=>{
setName(event.target.value)
  }

  const hanldeContactNumber=(event)=>{
    setNumber(event.target.value)

  }
  const handleEmail=(event)=>{
    setEmail(event.target.value)

  }
  const handleDogsName=(event)=>{
    setDogsName(event.target.value)

  }
  const handleDogsBreed=(event)=>{
    setDogsBreed(event.target.value)

  }
  const handleDogsAge=(event)=>{
    setDogsAge(event.target.value)

  }
const handleInstaHandle=(event)=>{
    setInstaHandle(event.target.value)

}
const handleSubmit=()=>{
    setSubmitStatus(false)
    console.log(name)
    const data={
        Name:name,
        Number:number,
        Email:email,
        DogName:DogsName,
        DogBreed:DogsBreed,
        DogAge:DogsAge,
        InstaHandle: InstaHandle
      }
      setLoader(true)
axios.post("https://sheet.best/api/sheets/f7a009bd-2d75-471a-ac12-e759bdde10ab",data).then((response)=>{
  if(response.status===200){
    setLoader(false)

    setSubmitStatus(true)
    setName("")
    setNumber("")
    setEmail("")
    setDogsName("")
    setDogsAge("")
    setDogsBreed("")
    setInstaHandle("")
  }
 
})
}
const handleClose=()=>{
    setSubmitStatus(false)
      }
    
    return(
        < >
        
    {SubmitStatus && <Snackbar open={true} autoHideDuration={3000} onClose={handleClose} >
        <Alert  severity="success" sx={{ width: '100%', backgroundColor:"lightgreen" }}>
         Enquiry submitted successfully!
        </Alert>
      </Snackbar>}
           
             <Header trigger={trigger}/>

          
      <Card elevation={2} className={props.classes.card}>
      <Typography style={{color:"black", fontSize:24, fontWeight:900, display:"flex", justifyContent:"center"}}>Project Socialization</Typography>

        <Typography style={{color:"black", fontSize:16, fontWeight:900, display:"flex", justifyContent:"center"}}>Register Now!</Typography>
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
        <TextField id="outlined-basic" placeholder="your Dog's Name*"variant="outlined"style={{margin:"16px 0px"}} value={DogsName} onChange={handleDogsName}fullWidth/>
        <TextField id="outlined-basic" placeholder="your Dog's Breed*"variant="outlined"style={{margin:"16px 0px"}} value={DogsBreed} onChange={handleDogsBreed}fullWidth/>
        <TextField id="outlined-basic" placeholder="your Dog's Age*"variant="outlined"style={{margin:"16px 0px"}} value={DogsAge} onChange={handleDogsAge}fullWidth/>
        <TextField id="outlined-basic" placeholder="Instagram handle*"variant="outlined"  style={{margin:"16px 0px"}} value={InstaHandle}onChange={handleInstaHandle}fullWidth/>
     
                  </Grid>
                  <Grid item sm={12} xs={8} className={props.classes.buttonContainer}>
                                       <Button style={{background:"#01b7ff  0% 0% no-repeat padding-box", width:"100%",borderRadius:"25px"}} onClick={handleSubmit}>
                   Submit
                    </Button>
                  
                  </Grid>
                </Grid>
            
            </div>
      </Card>
      <div style={{height:70, background:"black", display:"grid", justifyContent:"center", alignItems:"center", color:"white"}}>
  <Typography style={{textAlign:"center"}}>©{new Date().getFullYear()} Canaan Pet Resort is a unit of Canaan Pet Ventures Pvt. Ltd. All Rights Reserved</Typography>
</div> </>
    )
}
export default withStyles(useStyles)(Socialization);
