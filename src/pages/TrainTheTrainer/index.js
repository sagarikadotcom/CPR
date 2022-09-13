import { Button, Card, Grid, Typography, useMediaQuery, useScrollTrigger, useTheme } from '@material-ui/core'
import react, { useEffect } from 'react'
import Header from '../../components/SubHeader'
import Pet from '../../assets/images/Boarding/pet.jpg'
import Board from '../../assets/images/Boarding/boarding.jpg'
import Food from '../../assets/images/Boarding/food.png'
import {IoPawOutline}from 'react-icons/io5'
import Footer from '../../components/Footer'
import { useStyles } from './styles'
import { withStyles } from '@material-ui/styles'
import Logo from '../../assets/images/logos/footer-logo.png'
import NumOneDogTrainerImage from "../../assets/images/num_one_dogTrainer.png"
import TTT from "../../assets/images/TTT.png"
import {BsCheckLg} from "react-icons/bs"
import { AiOutlinePropertySafety } from 'react-icons/ai'
import CollasableList from './CollapsableList'
import CertifiedinfifteenDays from '../../assets/images/CertifiedinfifteenDays.jpg'
import AboutTheCourse from './AboutTheCourse'
import CoachesAndMentors from './CoachesAndMentors'
import SelectionProcess from './SelectionProcess'
import RegistrationForm from './RegistrationForm'
import Disclaimer from './Disclaimer'
const Training=(props)=>{
return(  
<>
 <div >
   {/* Header Grid */}
   <Grid container className={props.classes.headerGridContainer}>
    <Grid item sm={6} xs={12} className={props.classes.logoGrid}>
      <img src = {Logo} style={{height:147}}/>
      </Grid>
      <Grid item sm={6} xs={12} className={props.classes.callUsBtnGrid}>
        <div>
          <Button style={{background:"#00ABF7", borderRadius:20}} > 
          <a href="tel: +91 9938390000" className={props.classes.anchor}>Call Us - +91 99004 20777</a>
          </Button>
          </div>
          </Grid>
           </Grid>
           {/* #1 Dog trainer */}
           <Grid container style={{ padding:16, maxWidth:1248, margin:"auto",marginTop:20}} >
            <Grid item xs={12} sm={6}>
              <div style={{display:"flex", justifyContent:"center"}}>
                <img src={NumOneDogTrainerImage}/>
                </div>
                <h2 className={props.classes.mainHeader} style={{marginBottom:0}}>The #1 Dog Trainer</h2>
                <h2 className={props.classes.mainHeader} style={{marginTop:0}}>Certification Program in India</h2>
              <Typography style={{fontSize:"1.125rem", fontWeight:700, marginBottom:"1.75em",textAlign:"center"}}>Highly rated by Alumni and Industry Professionals</Typography>
              <Typography style={{fontSize:"1.125rem", fontWeight:400, overflowWrap: "break-word", marginBottom:"1.75em",textAlign:"center"}}>With a blend of classroom and hands-on approach, Canaan Pet Resort & K9 Academy has designed a professional canine trainer course taught by globally recognized industry professionals</Typography>  <Typography style={{fontStyle:"italic", fontSize:"1.125rem", marginBottom:"1.75em", color:"red", fontWeight:700,textAlign:"center"}}>Limited seats available, registration on a first come first serve basis</Typography>   <Typography style={{fontStyle:"italic", fontSize:"1.125rem", marginBottom:"1.75em", color:"#0000ff", fontWeight:700,textAlign:"center"}}>Early bird discount of 15% ends on 8th June 2022</Typography>   <div style={{display:"flex", justifyContent:"center"}}>    <Button  style={{background:"#00ABF7", padding:15, borderRadius:30, marginRight:10, fontWeight:800}} >Know More</Button>    <Button style={{background:"#00ABF7", padding:15, borderRadius:30,fontWeight:800}}>Register Now</Button>
               </div>
               </Grid>
               <Grid item xs={12} sm={6}>
                <img src={TTT} style={{width:"100%"}}/>
                 </Grid>
                 </Grid>
                 {/* numbers */}
                 <div style={{ background:"#00ABF7",  padding:20}}>
                   <Grid container className={props.classes.numberGridContainer}>
                   <Grid item className={props.classes.numbersGridItem}>
                      <h4 className={props.classes.numnbersH4}> 150+</h4>
                      <h4>Trainers certified</h4>
                   </Grid>
                   <Grid item className={props.classes.numbersGridItem}>
                   <h4 className={props.classes.numnbersH4}> 120+</h4>
                      <h4>Hours of Learning</h4>
                   </Grid>
                   <Grid item className={props.classes.numbersGridItem}>
                   <h4 className={props.classes.numnbersH4}>  5+</h4>
                      <h4>5+ Industry Experts as Coaches</h4>
                   </Grid>
                   <Grid item className={props.classes.numbersGridItem}>
                   <h4 className={props.classes.numnbersH4}> 1000 +</h4>
                      <h4>Dogs Trained</h4>
                   </Grid>
                   <Grid item className={props.classes.numbersGridItem}>
                   <h4 className={props.classes.numnbersH4}> Nov 22 - Dev 6</h4>
                      <h4>Dates</h4>
                   </Grid>
                   </Grid>
              </div>
              {/* Highlights */}
            
              <Grid container className={props.classes.hightLightGidContainer} >
               <Grid item sm={6} xs={12}>
                   <Typography className={props.classes.highLightsHeader}>
                    Highlights of the Course
                   </Typography>
          <Grid container className={props.classes.listContainer}>
              <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography>5+ industry experts as Coaches and Mentors</Typography>
             </Grid> 
             <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography>120+ hours and classroom and practical training</Typography>
             </Grid>       
             <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography>Certificate by Canaan Pet Resort and K9 Academy</Typography>
             </Grid>       <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography>Part of the CANAAN K9 Coach community for future assistance</Typography>
             </Grid>       <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography>25% scholarship assistance to best performers post the certification point</Typography>
             </Grid>                        
         </Grid>

        </Grid>
        <Grid item sm={6} xs={12}>
                   <Typography className={props.classes.highLightsHeader}>
                   Who should opt for this course?
                   </Typography>
          <Grid container className={props.classes.listContainer}>
              <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography>Those who would like to make a career as a Dog Trainer</Typography>
             </Grid> 
             <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography>Those who would like to become a Dog Trainer as a secondary profession</Typography>
             </Grid>    
             <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon} style={{fontSize:32}}/>
              <Typography>Professionals in the dog industry who would want to master dog behaviour. e.g Boarders, Groomers and Dog walkers</Typography>
             </Grid>       
          
               <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography>Dog parents interested in learning training methods and dog behaviour</Typography>
             </Grid>                           
         </Grid>

        </Grid>
         </Grid>
           {/* Syllabus */}

<Grid container className={props.classes.syllabusGridContainer}>
<Grid item sm={6} xs={12}>
  <Typography className={props.classes.syllabusHeader}>
Syllabus
  </Typography>
  <CollasableList/>
</Grid>
<Grid item sm={6} xs={12}>
<img src={CertifiedinfifteenDays} className={props.classes.syllausuImg}/>
</Grid>
</Grid>

{/* Master class details */}
<Grid style={{background:"#E9E9E9"}}>

<Grid container className={props.classes.masterClassContainer}>
<Typography className={props.classes.masterClassHeader}>Masterclass by Industry Experts
                   </Typography>
          <Grid container className={props.classes.masterclassdiv}>
              <Grid item className={props.classes.masterClassItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.masterClassItemText}>
‘The Role of Form and Structure in Breed Functions' by Mr. Shharath Sharma, international dog show judge, ex-civil servant</Typography>
             </Grid> 
             <Grid item className={props.classes.masterClassItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.masterClassItemText}>
‘Borderline Aggression’ and ‘Behavioural Issues’ by Ms. Meera Thosar of Happy tails Pune</Typography>
             </Grid>       
             <Grid item className={props.classes.masterClassItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.masterClassItemText}>‘Anxiety and Hormones in Dogs’ by Srinivas Jakkani aka The Doggie Professor.</Typography>
             </Grid>       <Grid item className={props.classes.masterClassItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.masterClassItemText}>‘Nutrition and Pet Industry business’ by Rana Atheya</Typography>
             </Grid>       <Grid item className={props.classes.masterClassItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.masterClassItemText}>
'Grooming is Health Care' by Mr. Cherian MJ</Typography>
             </Grid>                        
         </Grid>

        </Grid>
</Grid>

{/* About the Course */}
<AboutTheCourse/>

{/* Coaches and Mentors */}
<CoachesAndMentors/>

{/* selection process */}
<SelectionProcess/>

{/* RegistrationFrom */}
<RegistrationForm/>

{/* Disclaimer */}
<Disclaimer/>
</div>
</>
)
 }
 export default withStyles(useStyles)(Training);