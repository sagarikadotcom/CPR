import { Card, Grid, Typography } from '@material-ui/core'
import react from 'react'
import Header from '../../components/SubHeader'

import Groom from '../../assets/images/Grooming/gpet.jpg'
import {IoPawOutline}from 'react-icons/io5'
import Footer from '../../components/Footer'

const Grooming=()=>{

return(
    <>
   <Header/>
    <Card raised style={{ width:"80%", margin:"auto", marginTop:150., color:"black"}}>
        <Typography style={{fontSize:38, fontWeight:700, textAlign :"center", margin:"20px auto"}}> GROOMING SERVICES</Typography>
        <Grid container style={{margin:"30px auto"}} spacing={2}>
            <Grid item sm={7} style={{display:"flex", justifyContent:"center", margin:"auto 0px"}}>
                <div  style={{width:"80%", color:"black",fontSize :16 }}>
                <Typography style={{fontSize :16,marginTop:10}}>Did your dog(s) have too much fun at the park and is now too muddy to take home?
                </Typography>
                <Typography style={{fontSize :16,marginTop:10}}>Does your dog’s coat look matted and dusty?</Typography>
                <Typography style={{fontSize :16,marginTop:10}}>Are your dog’s nails scratching you every time they jump on you?
</Typography>
<Typography style={{fontSize :16,marginTop:10}}>Is your dog shedding more than usual, leaving a trail of hair all over the house?
</Typography>
<br/>
<br/>
<Typography style={{fontSize :16,marginTop:10}}>If the answer to any of these is yes, then your dog needs a trip to Canaan Pet Resort’s grooming center!
</Typography>
<br/>
<br/>
<Typography style={{fontSize :16,marginTop:10}}>We know that at-home grooming can be very tiring and extremely messy, and without any assistance it can be difficult to manage. That’s why you should leave the hard work to us professionals. 
</Typography>
<br/>
<br/>
<Typography style={{fontSize :16,marginTop:10}}>Canaan is equipped with the best grooming tools, safe shampoos and conditioners that are specific to every breed and health conditions. Our trained staff knows how to handle all kinds of dogs and ensure your dog is not only comfortable but is left with a great grooming experience.</Typography>
<br/>
<br/>
<Typography style={{fontSize :16,marginTop:10}}>Our basic grooming package includes a bath, hair trim, nail clipping which starts from INR 1000/- (Note: price depends on the size and breed of dog)
</Typography>
<br/>
<br/>
<Typography style={{fontSize :16,marginTop:10}}>Canaan Pet Resort offers the following individual grooming services:
</Typography>             
<br/>
<br/>       
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Basic bath and blow dry</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Full body haircut</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Sanitary clipping</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Medicated baths</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Anti-flea and tick treatment</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Nail clipping and Ear cleaning</Typography>
</div>
</Grid>
<Grid item sm={4} >
<img src={Groom} style={{width:"100%", borderRadius:"25%"}}/>
</Grid>
         
        </Grid>

    </Card>
    <Footer/>
    </>
)
}

export default Grooming