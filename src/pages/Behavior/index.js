import { Card, Grid, Typography, useMediaQuery, useScrollTrigger, useTheme } from '@material-ui/core'
import react from 'react'
import Header from '../../components/SubHeader'

import Behavior from '../../assets/images/Behavior/behavior.png'
import {IoPawOutline}from 'react-icons/io5'
import Footer from '../../components/Footer'
import { withStyles } from '@material-ui/styles'
import { useStyles } from './styles'

const Behaviour=(props)=>{
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));
  let trigger = useScrollTrigger({ disableHysteresis: true });
return(
    <>
   <Header trigger={trigger}/>
    <Card  raised={matches} className={props.classes.card} elevation={matches?8:0}>
        <Typography className={props.classes.heading}>Behavioral Correction Programs</Typography>
        <Grid container style={{margin:"30px auto"}} spacing={2}>
            <Grid item sm={7} style={{display:"flex", justifyContent:"center", margin:"auto 0px"}}>
                <div  style={{width:"80%", color:"black",fontSize :16 }}>
                <Typography style={{fontSize :16,marginTop:10}}>Assessment is key when resolving any behavioral issue. Our trainers will work with you to really understand why your dog behaves the way they do. The only way to solve behavioral issues is to know how your dog sees the world.</Typography>
                <br/>
<Typography style={{fontSize :16,marginTop:10}}>In our experience, we have learnt that such issues arise as a result of miscommunication between the pet parent and the dog(s), leading to misunderstandings and frustrations on both parts.</Typography>
<br/>
<Typography style={{fontSize :16,marginTop:10}}>Our program is catered to be a holistic solution to not only work through the issue but make the bond between you and your dog(s) healthier and stronger.</Typography>
<br/>
<br/>
<br/>
<Typography style={{fontSize:20, fontWeight:600}}>Behavioral issues we tackle:
</Typography>
<br/>
<br/>       
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Nuisance barking
</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Destructive behaviors (Ex - chewing & digging)</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Separation anxiety (Ex - crying or barking when left and scratching at doors)</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Inappropriate toilet habits indoors
</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Resource Guarding (Ex – growling over their food, toys, personal effects or even furniture)
</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Dog Aggression 
</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Human Aggression
</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Chasing cats, squirrels, livestock, cyclists, joggers or anything that moves
</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Hyper-activity

</Typography>
<Typography style={{fontSize:16}}><IoPawOutline style={{marginRight:10}}/>Lunging on the leash

</Typography>


</div>
</Grid>
<Grid item sm={4} >
<img src={Behavior} style={{width:"100%",}}/>
</Grid>
         
        </Grid>

    </Card>
    <Footer/>
    </>
)
}
export default withStyles(useStyles)(Behaviour);
