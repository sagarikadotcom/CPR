import { Card, Grid, Typography, useMediaQuery, useScrollTrigger, useTheme } from '@material-ui/core'
import react, { useEffect } from 'react'
import Header from '../../components/SubHeader'

import Pet from '../../assets/images/Boarding/pet.jpg'
import Board from '../../assets/images/Boarding/boarding.jpg'
import Food from '../../assets/images/Boarding/food.png'
import {IoPawOutline}from 'react-icons/io5'
import Footer from '../../components/Footer'
import { useStyles } from './styles'
import { withStyles } from '@material-ui/styles'
const Training=(props)=>{

   return(
    <div className="App">
                <iframe src="http://adroit.samratweddings.com/" style={{height:"100vh", width:"100%"}} />
            </div>
)
    }
export default withStyles(useStyles)(Training);
