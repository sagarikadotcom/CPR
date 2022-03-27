import { Card, Grid, Typography } from '@material-ui/core'
import react from 'react'
import Header from '../../components/SubHeader'

import Pet from '../../assets/images/Boarding/pet.jpg'
import Board from '../../assets/images/Boarding/boarding.jpg'
import Food from '../../assets/images/Boarding/food.png'
import {IoPawOutline}from 'react-icons/io5'
import Footer from '../../components/Footer'
const Boarding=()=>{
return(
    <>
   <Header/>
    <Card raised style={{ width:"80%", margin:"auto", marginTop:150., color:"black"}}>
        <Typography style={{fontSize:38, fontWeight:700, textAlign :"center", margin:"20px auto"}}> BOARDING SERVICES</Typography>
        <Grid container style={{margin:"30px auto"}} spacing={2}>
            <Grid item sm={7} style={{display:"flex", justifyContent:"center", margin:"auto 0px"}}>
                <div  style={{width:"80%", color:"black",fontSize :16 }}>
                <Typography style={{fontSize :16,marginTop:10}}>Boarding does not have to be stressful for you or your dog(s).
                </Typography>
                <Typography style={{fontSize:16}}>
                At Canaan Pet Resort we guarantee the best care and individualized attention for your four-legged family member. Our organized boarding facility is open to all dogs who will be housed in the finest kennel suite infrastructure and hygienic environments for stay and play. The open-play environment allows dogs to socialize with other dogs, exercise and education they deserve. Don’t worry, they also get plenty of ‘down’ time to unwind and relax in their kennel suites. 
<br/>
<br/>
<br/>
Every inch of Canaan was built keeping in mind the needs of the dogs – from various textured surfaces, to large kennel suites and lawn area for play. The aesthetic of Canaan is very earthy, providing calm habitats for dogs they are closer to nature.
</Typography>
<br/>
<br/>
<br/>
<Typography style={{fontSize:16}}>What to expect when you leave your dogs with us: </Typography>
<br/>
<br/>
<br/>
<Typography style={{fontSize:20, fontWeight:600}}>Facilities and Infrastructure: 
</Typography>
<br/>
<br/>       
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Highly secure environment with 24/7 CCTV monitoring</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Comfortable, indoor clean kennels</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Individual attention by Canaan Staff</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Pickup and Drop Cab service (Upon request and based on availability)</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Purified drinking water in all kennels and play areas</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Fans to keep the dog's stay comfortable</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Ample off-leash play time in open areas</Typography>

</div>
</Grid>
<Grid item sm={4} >
<img src={Pet} style={{width:"100%", borderRadius:"25%"}}/>
</Grid>
         
        </Grid>

        <Grid container style={{margin:"50px auto"}} spacing={2}>
       
            <Grid item sm={7} style={{display:"flex", justifyContent:"center", margin:"auto 0px"}}>
                <div  style={{width:"80%", color:"black",fontSize :16 }}>
    <Typography style={{fontSize:20, fontWeight:600}}>Medical Assistance:
</Typography>
<br/>
<br/>       
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Vet on call</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Medications and supplements administered on schedule (If required)</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Daily health check to ensure health issues are addressed immediately</Typography>
<br/>
<br/>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Updates via pictures and videos of your furry companion, shared once a day on WhatsApp</Typography>

</div>
</Grid>
<Grid item sm={4} >
<img src={Board} style={{width:"100%", borderRadius:"25%"}}/>
</Grid> 
        </Grid>

        <Grid container style={{margin:"50px auto"}} spacing={2}>
        <Grid item sm={6} >
<img src={Food} style={{width:"80%", borderRadius:"25%"}}/>
</Grid> 
       <Grid item sm={5} style={{display:"flex", justifyContent:"center", margin:"auto 0px"}}>
           <div  style={{width:"80%", color:"black",fontSize :16 }}>
<Typography style={{fontSize:20, fontWeight:600}}>Food Routine:
</Typography>
<br/>
<br/>       
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Fresh food diet – all dogs are fed DogSpot Meals</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>2 main meals a day for adult dogs (Puppies will be fed as per schedule followed at home)</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>1 mid-day snack for all dogs</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Meals include: Rice with Chicken and Vegetables</Typography>

<br/>
<br/>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Updates via pictures and videos of your furry companion, shared once a day on WhatsApp</Typography>
</div>
</Grid>
   </Grid>

   <Grid container style={{margin:"50px auto"}} spacing={2}>

       <Grid item  style={{display:"flex", justifyContent:"center", margin:"auto 0px", width:"100%"}}>
           <div  style={{width:"80%", color:"black",fontSize :16 }}>
<Typography style={{fontSize:20, fontWeight:600}}>Boarding Pre-requisites:

</Typography>
<br/>
<br/>       
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Boarding works on reservations only, we do not accept walk-ins
</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Fill out the Boarding Google form and share with Canaan representative</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>At least 50% of the boarding fees are to be paid in advance before check-in date</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Proof of current vaccination record must be shared before check-in:
 Rabies, Bordetella (Kennel Cough) and DHPP (distemper, hepatitis, parainfluenza and parvovirus.)
</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Tick & Flea treatment - such as spot on or Bravecto are compulsory for boarders
This should be done 1-2 weeks prior to boarding, if it hasn’t been done before. 
</Typography>
</div>
</Grid>
   </Grid>
    </Card>
    <Footer/>
    </>
)
}

export default Boarding