import { Card, Grid, Typography } from '@material-ui/core'
import react from 'react'
import Header from '../../components/SubHeader'

import Swim from '../../assets/images/Swimming/Swim.jpg'
import {IoPawOutline}from 'react-icons/io5'
import Footer from '../../components/Footer'

const Swimming=()=>{

return(
    <>
   <Header/>
    <Card raised style={{ width:"80%", margin:"auto", marginTop:150., color:"black"}}>
        <Typography style={{fontSize:38, fontWeight:700, textAlign :"center", margin:"20px auto"}}> SWIMMING SERVICES</Typography>
        <Grid container style={{margin:"30px auto"}} spacing={2}>
            <Grid item sm={7} style={{display:"flex", justifyContent:"center", margin:"auto 0px"}}>
                <div  style={{width:"80%", color:"black",fontSize :16 }}>
                <Typography style={{fontSize :16,marginTop:10}}>More than being a good pastime, swimming is a great form of exercise and therapy for dogs who have medical conditions such as arthritis, athletic & post-surgical conditioning, geriatrics, paralysis, dysplasia and for general overall wellness. It is a form of therapy that is highly recommended by many vets
                </Typography>
                <br/>
<br/>
<Typography style={{fontSize :16,marginTop:10}}>A swimming session helps improve flexibility, increases endurance, helps in weight loss, promotes relaxation and builds confidence in your dog(s)! It is a zero-impact exercise, where the buoyancy of water releases any weight or strain on a dog’s joint, relaxing the body and improving mobility. Without stress on his or her joints, a dog recovering from surgery or an accident can exercise and gain the muscle strength needed for rehabilitation.
</Typography>
<br/>
<br/>
<Typography style={{fontSize :16,marginTop:10}}>Your dog(s) will love the supervised private pool time, great for fun and fitness. It really rejuvenates your dog’s body and mind. Not to mention it lets you strengthen the bond you have with you dog, as you try this new adventure!</Typography>
<br/>
<br/>
<Typography style={{fontSize :16,marginTop:10}}>Swimming sessions are private and must be booked through an appointment. It will be a 60-minute session, with absolutely no distractions for your dog. Dog toys and a life jacket will be given for your dog during the session.  If it’s your dog’s first time in water, don’t worry!  We have trained professionals on standby who can help guide you through the session, so that your dog has a great relationship with water! We allow for self-swims – where you can swim with your dog(s) or instructor led swims - where we get wet and you stay dry!</Typography>
<br/>
<br/>
<Typography style={{fontSize :16,marginTop:10}}>**Please note: this service at Canaan Pet Resort is not a medical solution, nor is it a substitute for medical rehabilitation. If you have any specific medical questions or concerns about your dog, please contact your veterinarian. 
Swimming sessions are chargeable at INR 500/- per hour.
</Typography>

</div>
</Grid>
<Grid item sm={4} >
<img src={Swim} style={{width:"100%",}}/>
</Grid>
         
        </Grid>

    </Card>
    <Footer/>
    </>
)
}

export default Swimming