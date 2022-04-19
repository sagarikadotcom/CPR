import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import group from '../../../assets/images/FacilityIcons/group.png'
import { Hidden } from '@material-ui/core';
import { useStyles } from "./styles";
import { withStyles } from '@material-ui/styles';


const MediaControlCard=()=> {
  const theme = useTheme();

  return (

    <Card sx={{ display: 'flex' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column',margin:"auto" }}>
    <CardContent sx={{ flex: '1 0 auto' }} style={{textAlign:"center", }}>
          <Typography component="div" variant="h4" style={{fontSize:30, fontWeight:700, marginTop:30}}>
          WELCOME TO CANAAN PET RESORT
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" style={{width:"70%", margin:"40px auto"}}>
          Canaan Pet Resort is a safe, stress - free and clean environment for your dog’s boarding and daycare. Located in North Bangalore off Hennur road, we are easily accessible from most parts of Bangalore.

Canaan Pet Resort is a off leash facility to provide the best physical and mental enrichment for your dogs with individual boarding for every dog, agility/play area, lawn and a covered swimming pool. We also take care of any specific dietary or medical needs.

Canaan Pet Resort offers overnight stay, daycare, training and behavior correction, play areas, swimming, hydrotherapy and grooming services.
          </Typography>
        </CardContent>
    </Box>
    <Hidden smDown>
    <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={group}
        style={{width:"50%", objectFit:"contain"}}
      />
      </Hidden>
  </Card>
  );
}


export default withStyles(useStyles)(MediaControlCard);