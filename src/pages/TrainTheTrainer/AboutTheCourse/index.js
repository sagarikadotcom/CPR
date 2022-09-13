import React, { useEffect } from 'react'

import { useStyles } from './styles'
import { withStyles } from '@material-ui/styles'
import { Grid, Typography } from '@material-ui/core'
import AboutTheCourseCoverPage from '../../../assets/images/AboutTheCourseCoverPage.jpg'

const AboutTheCourse=(props)=>{

return(  
<div className={props.classes.mainGridContainer}>
<Typography className={props.classes.mainHeader}>
    About the course
</Typography>
<Typography className={props.classes.secondHeader}>Hear from our Master Trainer - Kumar Rich</Typography>
<div>
<img src={AboutTheCourseCoverPage} style={{width:"100%"}}/>
</div>
</div>
)

 }
 export default withStyles(useStyles)(AboutTheCourse);