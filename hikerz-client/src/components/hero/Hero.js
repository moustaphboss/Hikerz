import React from 'react'
import './Hero.css'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

const Hero = ({hikes}) => {
  return (
    <div className='hike-carousel-container'>
        <Carousel>
            {
                hikes.map((hike) => {
                    return(
                        <Paper>
                            <div className='hike-card-container'>
                                <div className='hike-card'>
                                    <div className='hike-detail'>
                                        <div className='hike-poster'>
                                            <img src={hike.mainImage} alt=""/>
                                        </div>
                                        <div className='hike-title'>
                                            <h3>{hike.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    )
                })                
            }
        </Carousel>
    </div>
  )
}

export default Hero