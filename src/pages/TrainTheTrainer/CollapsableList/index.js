import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import {FaPlus} from 'react-icons/fa'
import {GoPrimitiveDot} from 'react-icons/go'
import { withStyles } from '@material-ui/styles';
import { useStyles } from '../styles';
import { Typography } from '@material-ui/core';
const NestedList=(props)=> {
  const [openLearnDog, setOpenLearnDog] = React.useState(false);
  const[openAssessDog, setOpenAssessDog]=React.useState(false)
  const[openObedience,setOpenObedience]=React.useState(false)
  const [openCommandTraining,setOpenCommandTraining]=React.useState(false)
  const [openSocialization,setOpenSocialization]=React.useState(false)
  const [openHowtoPlay,setOpenHowToPlay]=React.useState(false)
  const [openmanageSesnsitivity,setOpenManageSesnsitivity]=React.useState(false)
  const [openDemo,setOpenDemo]=React.useState(false)
  const [openBusinessmanagement,setOpenBusinessManagement]=React.useState(false)
  const [openLeadGeneration,setOpneLeadGeneration]=React.useState(false)





  const handleLearnDog = () => {
    setOpenLearnDog(!openLearnDog);
  };
  const handleAssessDog=()=>{
setOpenAssessDog(!openAssessDog)
  }

  const handleObedience=()=>{
    setOpenObedience(!openObedience)
  }
  const handleCommandTraining=()=>{
    setOpenCommandTraining(!openCommandTraining)
  }
  const handleSocialization=()=>{
    setOpenSocialization(!openSocialization)
  }
  const handleHowToPlay=()=>{
    setOpenHowToPlay(!openHowtoPlay)
  }
  const handleManageSesnsitivity=()=>{
    setOpenManageSesnsitivity(!openmanageSesnsitivity)
  }
  const handleDemo=()=>{
    setOpenDemo(!openDemo)
  }
  const handleBusinessmanagement=()=>{
    setOpenBusinessManagement(!openBusinessmanagement)
  }
  const handleLeadGeneration=()=>{
    setOpneLeadGeneration(!openLeadGeneration)
  }
  return (
    <>
    {/* learn Dog */}
    <List
      sx={{ width: '100%',  bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleLearnDog} style={openLearnDog? {background:"black", color:"white",display:"flex", justifyContent:"space-between"}:{display:"flex", justifyContent:"space-between"}}>
        <ListItemIcon >
          <FaPlus style={openLearnDog? {color:"white"}:{color:"black"}} />
        </ListItemIcon>
        <div style={{width:"100%"}}>
        <Typography style={{fontSize:17, fontWeight:700 }}>How do dogs learn.</Typography>

        </div>
       {/*  <ListItemText  primary="How do dogs learn."   sx={{ fontWeight: 'bold',}} /> */}
        {openLearnDog ? <ExpandLess/> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openLearnDog} timeout="auto" unmountOnExit>
        <List component="div" disablePadding  sx={{ bgcolor: '#00ABF7' }}>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Four Quadrant system. [+R, -R, +P, -P]</Typography>
   </ListItemButton>
   <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Classical conditioning</Typography>
   </ListItemButton>
   <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Operant conditioning</Typography>
   </ListItemButton>
   <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Clicker, clicker charging</Typography>
   </ListItemButton>
   <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Marker word</Typography>
   </ListItemButton>
   <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Behaviour and opposite Behaviour</Typography>
   </ListItemButton>
        </List>
      </Collapse>
    </List>

    {/* Assess Dog */}
    <List
      sx={{ width: '100%',  bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleAssessDog} style={openAssessDog? {background:"black", color:"white",display:"flex", justifyContent:"space-between"}:{display:"flex", justifyContent:"space-between"}}>
        <ListItemIcon >
          <FaPlus style={openAssessDog? {color:"white"}:{color:"black"}} />
        </ListItemIcon>
        <div style={{width:"100%"}}>
        <Typography style={{fontSize:17, fontWeight:700 }}>How to assess a dog.</Typography>

        </div>
       {/*  <ListItemText  primary="How do dogs learn."   sx={{ fontWeight: 'bold',}} /> */}
        {openAssessDog ? <ExpandLess/> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openAssessDog} timeout="auto" unmountOnExit>
        <List component="div" disablePadding  sx={{ bgcolor: '#00ABF7' }}>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Behaviour assessment techniques</Typography>
   </ListItemButton>
   <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Evaluate body language</Typography>
   </ListItemButton>
  </List>
      </Collapse>
    </List>
    {/* obedience */}
    <List
      sx={{ width: '100%',  bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleObedience} style={openObedience? {background:"black", color:"white",display:"flex", justifyContent:"space-between"}:{display:"flex", justifyContent:"space-between"}}>
        <ListItemIcon >
          <FaPlus style={openObedience? {color:"white"}:{color:"black"}} />
        </ListItemIcon>
        <div style={{width:"100%"}}>
        <Typography style={{fontSize:17, fontWeight:700 }}>How to get the best obedience.</Typography>

        </div>
       {/*  <ListItemText  primary="How do dogs learn."   sx={{ fontWeight: 'bold',}} /> */}
        {openObedience ? <ExpandLess/> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openObedience} timeout="auto" unmountOnExit>
        <List component="div" disablePadding  sx={{ bgcolor: '#00ABF7' }}>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Obedience training assessment steps</Typography>
   </ListItemButton>
   <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Obedience training methods and practices</Typography>
   </ListItemButton>
  </List>
      </Collapse>
    </List>
    {/* command training */}
    <List
      sx={{ width: '100%',  bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleCommandTraining} style={openCommandTraining? {background:"black", color:"white",display:"flex", justifyContent:"space-between"}:{display:"flex", justifyContent:"space-between"}}>
        <ListItemIcon >
          <FaPlus style={openCommandTraining? {color:"white"}:{color:"black"}} />
        </ListItemIcon>
        <div style={{width:"100%"}}>
        <Typography style={{fontSize:17, fontWeight:700 }}>Command training.</Typography>

        </div>
       {/*  <ListItemText  primary="How do dogs learn."   sx={{ fontWeight: 'bold',}} /> */}
        {openCommandTraining ? <ExpandLess/> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openCommandTraining} timeout="auto" unmountOnExit>
        <List component="div" disablePadding  sx={{ bgcolor: '#00ABF7' }}>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Come</Typography>
   </ListItemButton>
   <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Sit</Typography>
   </ListItemButton>
   <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Stand</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Down</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Stay</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Drop it</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Leave it</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Crate training</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Leash walk</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Heal walk</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Competitive focus heel walk</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Place</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Go</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Send away</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>No</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Toilet Training</Typography>
   </ListItemButton>
  </List>
      </Collapse>
    </List>
    {/* Socialization */}
    <List
      sx={{ width: '100%',  bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleSocialization} style={openSocialization? {background:"black", color:"white",display:"flex", justifyContent:"space-between"}:{display:"flex", justifyContent:"space-between"}}>
        <ListItemIcon >
          <FaPlus style={openSocialization? {color:"white"}:{color:"black"}} />
        </ListItemIcon>
        <div style={{width:"100%"}}>
        <Typography style={{fontSize:17, fontWeight:700 }}>Socialisation, Habituation, Desensitisation and Counter conditioning.</Typography>

        </div>
       {/*  <ListItemText  primary="How do dogs learn."   sx={{ fontWeight: 'bold',}} /> */}
        {openSocialization ? <ExpandLess/> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openSocialization} timeout="auto" unmountOnExit>
        <List component="div" disablePadding  sx={{ bgcolor: '#00ABF7' }}>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Dog to dog</Typography>
   </ListItemButton>
   <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Dog to human</Typography>
   </ListItemButton>
   <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Dog to traffic</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Dog to sounds</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Dog to terrains</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Dog to smell</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Dog to articles</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Dog to objects</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Dog to the staircase</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Dog to the elevator</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Dog to leash and collar</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Dog to parties</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Dog to a pet park</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Dog in the park, restaurant</Typography>
   </ListItemButton>
   </List>
      </Collapse>
    </List>
    {/* How to play */}
    <List
      sx={{ width: '100%',  bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleHowToPlay} style={openHowtoPlay? {background:"black", color:"white",display:"flex", justifyContent:"space-between"}:{display:"flex", justifyContent:"space-between"}}>
        <ListItemIcon >
          <FaPlus style={openHowtoPlay? {color:"white"}:{color:"black"}} />
        </ListItemIcon>
        <div style={{width:"100%"}}>
        <Typography style={{fontSize:17, fontWeight:700 }}>What and how to play.</Typography>

        </div>
       {/*  <ListItemText  primary="How do dogs learn."   sx={{ fontWeight: 'bold',}} /> */}
        {openHowtoPlay ? <ExpandLess/> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openHowtoPlay} timeout="auto" unmountOnExit>
        <List component="div" disablePadding  sx={{ bgcolor: '#00ABF7' }}>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Agility</Typography>
   </ListItemButton>
   <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Fetch</Typography>
   </ListItemButton>
   <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Leave</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Chase and catch</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Tug work [target]</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Hold and drop</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Jump</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Crawl</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Up</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Retrieve different objects</Typography>
     </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Going around the cone</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Hurdle jumps with a dumbbell</Typography>
   </ListItemButton>
   <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Tunnel</Typography>
   </ListItemButton>
   <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Ramp</Typography>
   </ListItemButton>
   <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>A-frame</Typography>
   </ListItemButton>
   <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Weave pool</Typography>
   </ListItemButton>
   </List>
      </Collapse>
    </List>
    {/* Manage Sesnsitivity */}
    <List
      sx={{ width: '100%',  bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleManageSesnsitivity} style={openmanageSesnsitivity? {background:"black", color:"white",display:"flex", justifyContent:"space-between"}:{display:"flex", justifyContent:"space-between"}}>
        <ListItemIcon >
          <FaPlus style={openmanageSesnsitivity? {color:"white"}:{color:"black"}} />
        </ListItemIcon>
        <div style={{width:"100%"}}>
        <Typography style={{fontSize:17, fontWeight:700 }}>How to manage sensitivity or reactivity in a dog.</Typography>

        </div>
       {/*  <ListItemText  primary="How do dogs learn."   sx={{ fontWeight: 'bold',}} /> */}
        {openmanageSesnsitivity ? <ExpandLess/> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openmanageSesnsitivity} timeout="auto" unmountOnExit>
        <List component="div" disablePadding  sx={{ bgcolor: '#00ABF7' }}>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>About sensitive dog</Typography>
   </ListItemButton>
   <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>About reactive dog</Typography>
   </ListItemButton>
   <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Body touch sensitivity – head to tail, back to paw</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Visiting the veterinarian</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Grooming preparation</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Muzzle/mouth cap conditioning</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Crate training</Typography>
   </ListItemButton><ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Leash and collar conditioning</Typography>
   </ListItemButton>
   </List>
      </Collapse>
    </List>
    {/* Demo */}
    <List
      sx={{ width: '100%',  bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleDemo} style={openDemo? {background:"black", color:"white",display:"flex", justifyContent:"space-between"}:{display:"flex", justifyContent:"space-between"}}>
        <ListItemIcon >
          <FaPlus style={openDemo? {color:"white"}:{color:"black"}} />
        </ListItemIcon>
        <div style={{width:"100%"}}>
        <Typography style={{fontSize:17, fontWeight:700 }}>Different dog sports obedience format.</Typography>

        </div>
       {/*  <ListItemText  primary="How do dogs learn."   sx={{ fontWeight: 'bold',}} /> */}
        {openDemo ? <ExpandLess/> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openDemo} timeout="auto" unmountOnExit>
        <List component="div" disablePadding  sx={{ bgcolor: '#00ABF7' }}>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>IGP Obedience fromat</Typography>
   </ListItemButton>
     <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>PSA Obedience format</Typography>
   </ListItemButton>
   <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Agility sports in India</Typography>
   </ListItemButton>
  </List>
      </Collapse>
    </List>
   {/*  Business Management */}
   <List
      sx={{ width: '100%',  bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleBusinessmanagement} style={openBusinessmanagement? {background:"black", color:"white",display:"flex", justifyContent:"space-between"}:{display:"flex", justifyContent:"space-between"}}>
        <ListItemIcon >
          <FaPlus style={openBusinessmanagement? {color:"white"}:{color:"black"}} />
        </ListItemIcon>
        <div style={{width:"100%"}}>
        <Typography style={{fontSize:17, fontWeight:700 }}>How to build and manage your pet business.</Typography>

        </div>
       {/*  <ListItemText  primary="How do dogs learn."   sx={{ fontWeight: 'bold',}} /> */}
        {openBusinessmanagement ? <ExpandLess/> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openBusinessmanagement} timeout="auto" unmountOnExit>
        <List component="div" disablePadding  sx={{ bgcolor: '#00ABF7' }}>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Lead generation and Client Management</Typography>
   </ListItemButton>
   <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Setting up a dog training facility</Typography>
   </ListItemButton>
   <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Dog training guide</Typography>
   </ListItemButton>
   <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>How to make an income out of Dog Training?</Typography>
   </ListItemButton>
  </List>
      </Collapse>
    </List>
    {/* Lead Generation */}
    <List
      sx={{ width: '100%',  bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleLeadGeneration} style={openLeadGeneration? {background:"black", color:"white",display:"flex", justifyContent:"space-between"}:{display:"flex", justifyContent:"space-between"}}>
        <ListItemIcon >
          <FaPlus style={openLeadGeneration? {color:"white"}:{color:"black"}} />
        </ListItemIcon>
        <div style={{width:"100%"}}>
        <Typography style={{fontSize:17, fontWeight:700 }}>Lead generation and client management.</Typography>

        </div>
       {/*  <ListItemText  primary="How do dogs learn."   sx={{ fontWeight: 'bold',}} /> */}
        {openLeadGeneration ? <ExpandLess/> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openLeadGeneration} timeout="auto" unmountOnExit>
        <List component="div" disablePadding  sx={{ bgcolor: '#00ABF7' }}>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Different ways to get clients</Typography>
   </ListItemButton>
   <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Social media management</Typography>
   </ListItemButton>
   <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Conducting virtual or online sessions</Typography>
   </ListItemButton>
   <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GoPrimitiveDot />
            </ListItemIcon>
        <Typography style={{fontSize:17}}>Consultation and assessment</Typography>
   </ListItemButton>
  </List>
      </Collapse>
    </List>
    </>
  );
}
export default withStyles(useStyles)(NestedList);
