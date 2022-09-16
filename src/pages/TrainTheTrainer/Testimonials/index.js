import { withStyles } from '@material-ui/styles';
import React from 'react'
import { useStyles } from '../styles';
import Carousel from 'react-material-ui-carousel'
import { Card, CardMedia, Paper } from '@material-ui/core';
import test1 from '../../../assets/videos/Testimonials/test1.mp4'
const Item =(props)=>{
    return (
        <Card sx={{ maxWidth: 345 }}>
      <video controls >
    <source src={test1} type="video/webm" />
  
</video>
    
    </Card>
    )
}
const Testimonials=(props)=>{
    let items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]
    return(
        <Carousel>
        {
            items.map( (item, i) => <Item key={i} item={item} /> )
        }
    </Carousel>
    )
}

export default withStyles(useStyles)(Testimonials);