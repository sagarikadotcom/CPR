import { Box, Button, Checkbox, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers';
import { SetStateAction, useState } from 'react';
import axios from 'axios';

const RegistrationForm =()=>{
  const [name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[number,setNumber]=useState("")
  const[city,setCity]=useState("")
  const [date,setDate]=useState()
  
  const handleName=(e: { target: { value: SetStateAction<string>; }; })=>{
    setName(e.target.value)
    console.log(name)
  }
  const handleEmail=(e: { target: { value: SetStateAction<string>; }; })=>{
    setEmail(e.target.value)
  }
  const handleNumber=(e: { target: { value: SetStateAction<string>; }; })=>{
    setNumber(e.target.value)
  }
  const handleCity=(e: { target: { value: SetStateAction<string>; }; })=>{
setCity(e.target.value)
  }
  const handleDate=(value: SetStateAction<undefined>)=>{
    setDate(value)
  }
    const sendData = () => {
        let data = JSON.stringify({
            "emails": [
                {
                    "to": "sagarika.katikam@gmail.com",
                    "subject": "Hello from Node!",
                    "text": "This is the text part",
                    "html": "<b>This is HTML</b>",
                    "attachments": []
                },
                {
                    "to": "sagarika.katikam@gmail.com",
                    "subject": "Another Email",
                    "text": "Different text content",
                    "html": "<i>Different HTML content</i>",
                    "attachments": []
                }
            ]
        });

        let config = {
            method: 'post',
            url: 'https://intense-basin-14503-973a3419579b.herokuapp.com/send-emails',
            headers: { 
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error sending emails:', error);
            });
    };

  return(
  <div style={{display:"flex", alignItems:"center", height:"100%", margin:"auto"}}>
 <Box component="form" noValidate  sx={{ mt: 3 }} style={{margin:"auto"}}>
    <div>
<Typography style={{display:"flex", justifyContent:"center", fontSize:45, fontWeight:900,color:"black"}}>Register Now!
      </Typography>
    <Typography  style={{display:"flex", justifyContent:"center", fontSize:20, fontWeight:600,color:"black"}}>Get Course Deatils Instantly</Typography>

    </div>
  <Grid container spacing={2} style={{marginTop:"2rem"}}>
    
    <Grid item xs={12} sm={12}>
      <TextField
        required
        fullWidth
        id="Name"
        label="Name"
        name="Name"
        autoComplete="name"
        style={{marginBottom:"1px white"}}
        value={name}
        onChange={handleName}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        value={email}
        onChange={handleEmail}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        required
        fullWidth
        name="MobileNumber"
        label="Contact Number"
        type="number"
        id="number"
        autoComplete="number"
        value={number}
        onChange={handleNumber}
      />
      
    </Grid>
       <Grid item xs={12}> 
        <TextField
        required
        fullWidth
        id="city"
        label="city"
        name="city"
        autoComplete="city"
        value={city}
        onChange={handleCity}
      /></Grid>
       <Grid item xs={12}> 
              <LocalizationProvider  dateAdapter={AdapterDayjs}>
      <DemoContainer  components={['DatePicker']}>
        <DatePicker   label="Date of Birth" value={date}/>
      </DemoContainer>
    </LocalizationProvider>
   </Grid>

  </Grid>
  <Button
    fullWidth
    variant="contained"
    sx={{ mt: 3, mb: 2 }}
    onClick={sendData}
  >
 Register Now!
  </Button>
  
</Box>


  </div>
 
)    
}

export default RegistrationForm