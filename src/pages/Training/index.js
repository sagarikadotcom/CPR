import { Card, Grid, Typography, useMediaQuery, useScrollTrigger, useTheme } from '@material-ui/core'
import react from 'react'
import Header from '../../components/SubHeader'

import Pet from '../../assets/images/Boarding/pet.jpg'
import Board from '../../assets/images/Boarding/boarding.jpg'
import Food from '../../assets/images/Boarding/food.png'
import {IoPawOutline}from 'react-icons/io5'
import Footer from '../../components/Footer'
import { useStyles } from './styles'
import { withStyles } from '@material-ui/styles'
const Training=(props)=>{


    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));
  let trigger = useScrollTrigger({ disableHysteresis: true });
    return(
    <>
   <Header trigger={trigger}/>
<div style={{ width:"100%", margin:"auto", marginTop:200, color:"black"}}>
<Typography className={props.classes.heading}>TRAINING SERVICES</Typography>

<Grid container style={{width:"90%", margin:"auto"}} spacing={4} >
<Grid item sm={6}>
    <Card raised style={{padding:"5%", background:"transparent linear-gradient(178deg, #01b7ff08 0%, #00000000 100%) 0% 0% no-repeat padding-box"}}>
        <Typography style={{fontSize:21, color:"black", fontWeight:600, textAlign:"center"}}>BASIC OBEDIENCE PROGRAM</Typography>

        <div style={{color:"black", fontSize:16, marginTop:50}}>
            <Typography style={{fontSize:16}}>Is your dog having trouble understanding basic commands?</Typography>
            <Typography style={{fontSize:16}}>Do you find yourself getting frustrated at their progress?</Typography>
            <Typography style={{fontSize:16}}>Do you have to bribe them with treats all the time, yet wish there was an easier way to communicate with them?</Typography>
            <Typography style={{fontSize:16}}>Our Basic Obedience Programme is aimed to help pet parents who struggle with the above challenges. It’s ideal for dogs who only need foundational training for basic ‘manners’ and live peacefully with their families. 
</Typography>
<br/>
<br/>
<br/>
<Typography style={{fontSize:20, fontWeight:600}}>Program Overview:
</Typography>
<br/>   
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Basic commands taught: sit, stay, wait & come/recall
</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Loose leash walking
</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>How to greet people 
</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Good food manners (Ex – No begging)</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Good house manners (Ex – not jumping on furniture, boundaries)</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>How to play with your dog, teaching fetch
</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Socializing the dog under various external and internal conditions (Ex – grooming, touch, smells, sounds, objects)</Typography>


        </div>
    </Card>
</Grid>
<Grid item sm={6}>
    <Card raised style={{padding:"5%", background:"transparent linear-gradient(178deg, #01b7ff08 0%, #00000000 100%) 0% 0% no-repeat padding-box"}}>
        <Typography style={{fontSize:21, color:"black", fontWeight:600, textAlign:"center"}}>PUPPY TRAINING PROGRAM</Typography>

        <div style={{color:"black", fontSize:16, marginTop:50}}>
            <Typography style={{fontSize:16}}>By bringing a puppy into your life, you are taking on a huge responsibility. It is very intimate journey to bring up a pup on your own, but can quickly get frustrating and scary if you don’t have the guidance on what to do and what not to do.</Typography>
            <Typography style={{fontSize:16}}>We found that a lot of first-time pet parents struggle to train their new puppies in their living environments and miss out on key teachable moments. Which is why we designed this program to help pet parents cover all the bases.
</Typography>
            <Typography style={{fontSize:16}}>The one-on-one puppy program operates on a board and train model, where the puppy will be boarded at the Canaan facility and trained on a daily basis on the below points. We encourage this as boarding will give the puppy a neutral space to learn and have consistency to reinforce desirable behaviors.
</Typography>
           
<br/>
<br/>
<br/>
<Typography style={{fontSize:20, fontWeight:600}}>Program Overview:
</Typography>
<br/>   
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>House training / toilet training

</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Stopping nipping or mouthing
</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Crate Training

</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Basic Obedience commands: sit, stay, down, wait
</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Preventative measures against chewing
</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Setting appropriate boundaries

</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Mentally and physically stimulating the dog during boarding
</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Nutrition Advice: what foods are best for your puppy and which foods to avoid
</Typography><Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Education on objects that are toxic for your puppy

</Typography><Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Socialization: To dogs, objects, people, sensations (Ex – touch, smell, sounds)

</Typography><Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Basic recall training (Coming when called)

</Typography><Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Support to ensure living environment is puppy proof
</Typography>


        </div>
    </Card>
</Grid>
   </Grid>
</div>

    <Footer/>
    </>
)
    }
export default withStyles(useStyles)(Training);
