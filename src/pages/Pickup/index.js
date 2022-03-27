import { Card, Grid, Typography } from '@material-ui/core'
import react from 'react'
import Header from '../../components/SubHeader'

import Pick from '../../assets/images/Pickup/pick.jpg'
import {IoPawOutline}from 'react-icons/io5'
import Footer from '../../components/Footer'

const Pickup=()=>{

return(
    <>
   <Header/>
    <Card raised style={{ width:"80%", margin:"auto", marginTop:"15%", color:"black"}}>
        <Typography style={{fontSize:38, fontWeight:700, textAlign :"center", margin:"20px auto"}}> PICK-UP and DROP SERVICES</Typography>
        <Grid container style={{margin:"30px auto"}} spacing={2}>
            <Grid item sm={7} style={{display:"flex", justifyContent:"center", margin:"auto 0px"}}>
                <div  style={{width:"80%", color:"black",fontSize :16 }}>
                <Typography style={{fontSize :16,marginTop:10}}>Life in the city can get busy, time goes by in a flash. Managing hectic work schedules and travel schedules is not easy. Make life easier for you and your pet with our pick-up and drop services. Where we bring your dog from your home straight to our facility and back through our partner pet cab service providers. Making life easier for you and your pet. </Typography>
                <br/>
<br/>
<Typography style={{fontSize :16,marginTop:10}}>Booking: Must be done at least 1-2 days in advance</Typography>
<br/>
<br/>
<Typography style={{fontSize :16,marginTop:10}}>**Please note: We do not offer this service on Sundays. </Typography>


</div>
</Grid>
<Grid item sm={4} >
<img src={Pick} style={{width:"100%",}}/>
</Grid>
         
        </Grid>

    </Card>
    <Footer/>
    </>
)
}

export default Pickup