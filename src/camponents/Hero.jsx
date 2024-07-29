import React from 'react';
import HeroImg from '../assets/watches/watch_case.jpg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MouseIcon from '@mui/icons-material/Mouse';
import { grey, pink } from '@mui/material/colors';
import { withTheme } from '@emotion/react';


function Hero(){
  return(
    <div className='hero--container'>
      <div className='hero-text--container'>
        <h1 className=" hero--text">
          Buy The Luxury You Deserve
        </h1>
        <div className='mouse-down--container'> 
          <MouseIcon sx={{ color: grey["A100"] }} />
          <KeyboardArrowDownIcon sx={{ color: grey["A100"] }} fontSize='large'/>
        </div>
      </div>
      <div className='hero--color'></div>
      <img src={HeroImg} alt="hero" className='hero--img'/>
      <div className="spacer2 spacer2-2"></div>
    </div>
  )
}
export default Hero;