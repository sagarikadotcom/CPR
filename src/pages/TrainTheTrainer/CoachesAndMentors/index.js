import React, { useEffect, useState } from 'react'

import { useStyles } from './styles'
import { withStyles } from '@material-ui/styles'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import Kumar from '../../../assets/images/coaches&Mentors/kumar.jpg'
import Ajay from '../../../assets/images/coaches&Mentors/Ajay.jpg'
import AbooutDialog from './AbooutDialog'

const AboutTheCourse=(props)=>{
const[openDialog,setOpenDialog]= useState(false)
const [details,setDetails]=useState("")

const handleKumarDetails=()=>{
setOpenDialog(!openDialog)
setDetails("KUMAR")
}
const handleAjaysDetails=()=>{
    setOpenDialog(!openDialog)
    setDetails("AJAY")
    }
return(  
    <>
    {openDialog&& <AbooutDialog details={details} openDialog={openDialog} setOpenDialog={setOpenDialog}/>}
<div className={props.classes.mainGridContainer}>
<Typography className={props.classes.mainHeader}>Coaches and Mentors</Typography>
<Grid container spacing={3}>
    <Grid item sm={6}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Kumar}
          alt="green iguana"
          style={{height:800}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className={props.classes.name}>
          Mr. KUMAR R
          </Typography>
          <Typography variant="body2" color="text.secondary" className={props.classes.title}>
            IGP-1, PDC-PSA
            </Typography>
            <Typography variant="body2" color="text.secondary" className={props.classes.title}>
            Head Trainer for the Program.
            </Typography>
            <Typography variant="body2" color="text.secondary" className={props.classes.title}>
            Founder , Director and Master Trainer at Canaan Pet Resort & K9 Academy
            </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={props.classes.cardActions}>
        <Button size="small" color="primary" className={props.classes.btn} onClick={handleKumarDetails}>
        About Kumar R 
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item sm={6}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Ajay}
          alt="green iguana"
          style={{height:800}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className={props.classes.name}>
          Ajay Thambi
          </Typography>
         
            <Typography variant="body2" color="text.secondary" className={props.classes.title}>
            Mentor for the Program
            </Typography>
            <Typography variant="body2" color="text.secondary" className={props.classes.title}>
            Director at Canaan Pet Resort & K9 Academy </Typography>
           <br/>
           <br/>
           <br/>
        </CardContent>
      </CardActionArea>
      <CardActions className={props.classes.cardActions}>
        <Button size="small" color="primary" className={props.classes.btn} onClick={handleAjaysDetails}>
        About Ajay Thambi
        </Button>
      </CardActions>
    </Card>
    </Grid>
</Grid>

</div>
</>
)

 }
 export default withStyles(useStyles)(AboutTheCourse);