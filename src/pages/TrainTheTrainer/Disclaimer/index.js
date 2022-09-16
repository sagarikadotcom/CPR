import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { PersonPinCircleSharp } from '@mui/icons-material';
import React from 'react'
import { useStyles } from './styles';
import {GoPrimitiveDot} from 'react-icons/go'

const Disclaimer=(props)=>{
    return(
        <Grid container className={props.classes.mainGridContainer}>
            <div className={props.classes.textContainer}>
                <Typography className={props.classes.header}>Disclaimer</Typography>
                <Typography className={props.classes.textItem}><GoPrimitiveDot/> We encourage you to bring your own dog for the workshop for hands-on training sessions, if not possible, Team CPR shall try and provide a dog subject to availability.</Typography>
                <Typography className={props.classes.textItem}><GoPrimitiveDot/>Course timings are as follows Weekdays: 7:30 AM TO 12: 30 PM and 4:30 pm to 6:30pm Sunday: 8 am to 12:30 pm</Typography>
                <Typography className={props.classes.textItem}><GoPrimitiveDot/>We will recommend accommodation within 2 kilometers of the venue for candidates outside Bangalore</Typography>
                <Typography className={props.classes.textItem}><GoPrimitiveDot/> Dress code- K9 Coach t-shirt, track pants, sports shoes and cap. (Dress code must be followed, it is mandatory to wear the K9 t-shirt provided by the team)</Typography>
                <Typography className={props.classes.textItem}><GoPrimitiveDot/>Applicant must meet the eligibility criteria.</Typography>
                <Typography className={props.classes.textItem}><GoPrimitiveDot/> Limited seats available and admissions are subject to first come first serve basis, registrations close on 31ST October 2022 irrespective of the number of seats available.</Typography>
                <Typography className={props.classes.textItem}><GoPrimitiveDot/> Team CPR expects complete discipline, flexibility to learn and respect to all fellow trainers, irrespective of gender, caste, race or creed.</Typography>
                <Typography className={props.classes.textItem}><GoPrimitiveDot/> The course fee doesn’t include any accommodation or food</Typography>
                <Typography className={props.classes.textItem}><GoPrimitiveDot/> The decision of providing a 25% scholarship refund solely depends on the decision of the master trainer</Typography>
                <Typography className={props.classes.textItem}><GoPrimitiveDot/> Boarding charges shall be applicable if you keep the dog at the facility</Typography>
                <Typography className={props.classes.textItem}><GoPrimitiveDot/> There will be a medical assistance for emergencies during the entire tenure of the course.</Typography>
                <Typography className={props.classes.textItem}><GoPrimitiveDot/> Payment details: 5000 for registration (non -refundable)100% payment has to be done by 31ST October 2022. (refundable if cancelled).</Typography>
                <Typography className={props.classes.textItem}><GoPrimitiveDot/> We encourage you to bring your own dog for the workshop for hands-on training sessions, if not possible, Team CPR shall try and provide a dog subject to availability.</Typography>
                        </div>
                        <div style={{height:70, background:"black", display:"grid", justifyContent:"center", alignItems:"center", color:"white", width:"100%"}}>
  <Typography style={{textAlign:"center"}}>©{new Date().getFullYear()} Canaan Pet Resort is a unit of Canaan Pet Ventures Pvt. Ltd. All Rights Reserved</Typography>
</div>
            </Grid>
    )
}

export default withStyles(useStyles)(Disclaimer);