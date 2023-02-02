import { Button, CircularProgress, Dialog, DialogContent, Grid, TextField, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { useState } from 'react'
import { useStyles } from './styles';
import {BsCheckLg} from "react-icons/bs"
import { send } from 'emailjs-com';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const RegistrationForm=(props)=>{
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[number,setNumber]= useState("")
    const[city,setCity]=useState("")
    const [status,setStatus]= useState(false)
    const[progress,setProgress]=useState(false)

    const handleName=(event)=>{
setName(event.target.value)
    }
    const handleEmail=(event)=>{
        setEmail(event.target.value)

    }
    const handleNumber=(event)=>{
        setNumber(event.target.value)

    }
    const handleCity=(event)=>{
                setCity(event.target.value)

    }
     
    const handleSendMessage=()=>{
        setStatus(false)
        setProgress(true)
        send(
            'service_u7xd2on',
            'template_viev20s',
            {to_name:"kumar", from_name:name,contact_number:number,email:email, city:city},
            'q33-Ga0FNZ7h3oVIZ'
          )
            .then((response) => {
        setProgress(false)
              setStatus(true)
            })
            .catch((err) => {
        setProgress(false)

              console.log('FAILED...', err);
            });
    }
    return(
        <>
        {progress&&  <Dialog
        open={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
        <CircularProgress color="success"  style={{color:"#00ABF7"}}/>
        </DialogContent>
         </Dialog>
   }
<Grid container className={props.classes.mainGridContainer}>
<Grid item sm={7} xs ={12} className={props.classes.leftItem}>
<Grid Container className={props.classes.feesContainer}>
    <Grid item xs={6} sm={6}>
<Typography className={props.classes.header}>
Fees
</Typography>
<Typography className={props.classes.subHeader}>
₹ 70,000 /-
</Typography>
    </Grid>
    <Grid item sm={6} xs={6} >
<Typography className={props.classes.header}>
Dates
</Typography>
<Typography className={props.classes.subHeader}>
21st Feb to 2nd Mar 2023
</Typography>
    </Grid>
</Grid>
<Grid container className={props.classes.includedContainer} >
               <Grid item >
                   <Typography className={props.classes.header}>
                   What's Included ?
                   </Typography>
          <Grid container className={props.classes.listContainer}>
              <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.list}>

              70+ hours of classroom and hands-on training</Typography>
             </Grid> 
             <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.list}>

              1 on 1 Mentoring sessions</Typography>
             </Grid>       
             <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.list}>
              Hands-on assignments on site</Typography>
             </Grid>         
             <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.list}>
Accommodation assistance</Typography>
             </Grid>
             <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.list}>Program Marksheet</Typography>
             </Grid>
             <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.list}>
Join the ‘CANAAN K9 Coach" family
</Typography>
             </Grid>
             <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.list}>Guide on setting up a pet business</Typography>
             </Grid>
             <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.list}>
Two K9 Coach t-shirts</Typography>
             </Grid>                  
         </Grid>

        </Grid>
   
         </Grid>
</Grid>
{status?
<Grid item sm={5} xs ={12} className={props.classes.formContainer}>
    <div style={{width:"100%", height:"100%", display:"flex", justifyContent:"center"}}>
    <CheckCircleRoundedIcon style={{fontSize:300,color:"green"}}/>
   
    </div>
    <div style={{width:"100%", height:"100%", display:"flex", justifyContent:"center"}}>
    <Typography style={{fontSize:17, fontWeight:900}}>Thank you for registering, our team will get back to you.</Typography>

    </div>

</Grid>:
 <Grid item sm={5} xs ={12} className={props.classes.formContainer}>
   
        <Typography className={props.classes.formHeader}>I’m interested in this programme</Typography>
<Typography className={props.classes.subHeader}>Fill details and reserve your seat with us.</Typography>
<div>
    <Typography className={props.classes.textFieldHeader}> Name*</Typography>
    <TextField  size="small"  className={props.classes.textField} placeholder='Enter your name' onChange={handleName} value={name} ></TextField>
</div>
<div>
    <Typography className={props.classes.textFieldHeader}> Contact Number *</Typography>
    <TextField  size="small"  className={props.classes.textField} placeholder='Enter your contact number' onChange={handleNumber}value={number} ></TextField>
</div>
<div>
    <Typography className={props.classes.textFieldHeader}> Email *</Typography>
    <TextField  size="small"  className={props.classes.textField} placeholder='Enter your Email' onChange={handleEmail}value={email} ></TextField>
</div>
<div>
    <Typography className={props.classes.textFieldHeader}> City*</Typography>
    <TextField  size="small"  className={props.classes.textField} placeholder='Enter your City' onChange={handleCity} value={city} ></TextField>
</div>
<div className={props.classes.btnContainer} >
<Button variant="contained" className={props.classes.btn} onClick={handleSendMessage}>Send Message</Button>

</div>
</Grid> }

</Grid>
</>
    )
}

export default withStyles(useStyles)(RegistrationForm);