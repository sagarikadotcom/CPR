
import { Button, Card, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React from 'react'
import Header from '../../components/Header';
import { useStyles } from './styles';
import Banner from "../../assets/Socialization/Banner.png"
import Creative from "../../assets/Socialization/Creative.jpg"
import {FcCalendar} from "react-icons/fc"
import {GoPrimitiveDot} from 'react-icons/go'
import { GlobalRoutes } from '../../GlobalRouter/Routes';
import {  useNavigate } from 'react-router-dom';

const Socialization =(props)=>{
    const Navigate = useNavigate();


    const handleRegisterNow=()=>{
        Navigate(GlobalRoutes.SOCIALIZATION.path);

    }
    return(<>
    <Grid container style={{ margintop:110,   maxWidth:1152,margin:"auto", display:"block" }}>
        <Header/>
       <Grid className={props.classes.banner} style={{backgroundImage :` url(${Creative})`,position:"relative"}} >
        {/* <img src={Banner} style={{width:"100%", height:"100%", objectFit:"cover"}}/> */}
        <div style={{position:"absolute", bottom:23, width:"100%", display:"flex", justifyContent:"end"}}>
        <Button variant="contained" className={props.classes.button} onClick={handleRegisterNow}> Register Now!</Button>

        </div>
       </Grid>
<Grid style={{margin:28, display:"flex", justifyContent:"space-between"}}>
    <div>
<div style={{fontWeight:"bolder"}}> Dates</div>

<div className={props.classes.eventDetails}>
    <FcCalendar/>
Sat, March 04, 2023 - 9am to 10am
</div>
<div className={props.classes.eventDetails}>
    <FcCalendar/>
Sat, March 11, 2023 - 9am to 10am
</div>
<div className={props.classes.eventDetails}>
    <FcCalendar/>
Sat, March 18, 2023 - 9am to 10am
</div>
</div>
</Grid>

<Card style={{margin:28, padding:10, background:"linear-gradient(45deg, #afcbfd, transparent)",color:"black"}}>
<div style={{fontWeight:"bolder"}}> Topics Covered</div>
<div style={{margin:5}}><GoPrimitiveDot/> Environmental Conditioning</div>
<div style={{margin:5}}><GoPrimitiveDot/>Dog to Dog Socialization</div>
<div style={{margin:5}}><GoPrimitiveDot/> loose leash walking</div>

</Card>


<Grid style={{margin:28, }}>
<div style={{fontWeight:"bolder"}}> What's included?</div>
<div style={{margin:5}}><GoPrimitiveDot/>Right tools awareness.</div>
<div style={{margin:5}}><GoPrimitiveDot/>Tips to solve leash pulling.</div>
<div style={{margin:5}}><GoPrimitiveDot/> Basics of heeling.</div>
<div style={{margin:5}}><GoPrimitiveDot/> Dog to dog interactions.</div>
<div style={{margin:5}}><GoPrimitiveDot/> Dog to human interactions.</div>
<div style={{margin:5}}><GoPrimitiveDot/> Dogs anatomy and their behavior.</div>
</Grid>


<Card style={{margin:28, padding:10, background:"linear-gradient(45deg, #afcbfd, transparent)", color:"black"}}>

<div style={{fontWeight:"bolder"}}> Things to carry.</div>
<div style={{margin:5}}><GoPrimitiveDot/>Flat collar</div>
<div style={{margin:5}}><GoPrimitiveDot/>Flat leash</div>
<div style={{margin:5}}><GoPrimitiveDot/> your dog's favourite treats</div>
</Card>
<div style={{display:"flex", justifyContent:"center"}}>
<Button variant="contained" className={props.classes.button} onClick={handleRegisterNow}> Register Now!</Button>

</div>

<Grid style={{margin:28,}}>
<div style={{fontWeight:"bolder"}}> Location</div>
<div> Venue</div>
<div> canaan Pet Resort & K9 Academy</div>

</Grid>
<div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.930257408946!2d77.65990081433695!3d13.103604690769362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1bf762cbc475%3A0x2bfdcc5fcbe8a27e!2sCanaan%20pet%20resort%20and%20K9%20Academy!5e0!3m2!1sen!2sin!4v1677614121368!5m2!1sen!2sin" width="100%" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
    </Grid>
    <div style={{height:70, background:"black", display:"grid", justifyContent:"center", alignItems:"center", color:"white"}}>
  <Typography style={{textAlign:"center"}}>©{new Date().getFullYear()} Canaan Pet Resort is a unit of Canaan Pet Ventures Pvt. Ltd. All Rights Reserved</Typography>
</div>
    </>)
}

export default withStyles(useStyles)(Socialization);
