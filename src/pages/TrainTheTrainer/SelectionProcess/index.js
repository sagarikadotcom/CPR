import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React from 'react'
import { useStyles } from './styles';
import {BsCheckLg} from "react-icons/bs"

const SelectionProcess=(props)=>{
    return(
        <Grid container className={props.classes.mainGridContainer}>
<Grid item sm={6} xs={12}className={props.classes.leftItem}>
<Grid container className={props.classes.grid} >
               <Grid item >
                   <Typography className={props.classes.header}>
                   Selection process
                   </Typography>
          <Grid container className={props.classes.listContainer}>
              <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.list}>First level: Application screening</Typography>
             </Grid> 
             <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.list}>Second level: One on one zoom call</Typography>
             </Grid>       
                                           
         </Grid>

        </Grid>
   
         </Grid>
         <Grid container className={props.classes.grid} >
               <Grid item >
                   <Typography className={props.classes.header}>
                   Eligibility Criteria
                   </Typography>
          <Grid container className={props.classes.listContainer}>
              <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.list}>18+ years of age</Typography>
             </Grid> 
             <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.list}>Should have a dog or experience in the dog industry</Typography>
             </Grid>       
             <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.list}>
Clearance of the selection process</Typography>
             </Grid>                                 
         </Grid>

        </Grid>
   
         </Grid>
</Grid>
<Grid item sm={6} xs={12}className={props.classes.leftItem}>
<Grid container className={props.classes.grid} >
               <Grid item >
                   <Typography className={props.classes.header}>
                   Eligibility for Certification
                   </Typography>
          <Grid container className={props.classes.listContainer}>
              <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.list}>
95% attendance</Typography>
             </Grid> 
             <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.list}>
Clearance of written and practical exam</Typography>
             </Grid>       
             <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.list}>
              Physical fitness check</Typography>
             </Grid>    
             <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.list}>

              Hard work and commitment</Typography>
             </Grid>                          
         </Grid>

        </Grid>
   
         </Grid>
       
</Grid>
        </Grid>
        
    )
}

export default withStyles(useStyles)(SelectionProcess);