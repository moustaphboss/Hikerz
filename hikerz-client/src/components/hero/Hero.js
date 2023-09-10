import { Paper } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Hero = ({hikes}) => {

    const navigate = useNavigate();
    function reviews(hikeId) {
        navigate(`/Reviews/${hikeId}`);
    }

  return (
    <div className='hike-carousel-container'>
        <Carousel>
            {
                hikes.map((hike) => {
                    return(
                        <Paper key={hike.hikeId}>
                            <div className='hike-card-container'>
                                <div className='hike-card' style={{"--img": `url(${hike.extraImages[0]})`}}>
                                    <div className='hike-detail'>
                                        <div className='hike-poster'>
                                            <img src={hike.mainImage} alt=""/>
                                        </div>
                                        <div className='hike-title'>
                                            <h1 style={{margin: "20px", textAlign: "center"}}>{hike.title}</h1>
                                        </div>
                                        <div className='hike-buttons-container'>
                                            <Link to={`/Trailer/${hike.videoLink.substring(hike.videoLink.length - 11)}`}>
                                                <div className='play-button-icon-container'>
                                                    <FontAwesomeIcon className='play-button-icon' icon={faCirclePlay}/>
                                                </div>
                                            </Link>

                                            <div className='hike-review-button-container'>
                                                <Button variant='info' onClick={() => reviews(hike.hikeId)}>Reviews</Button>
                                            </div>
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