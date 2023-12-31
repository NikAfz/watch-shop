import React from 'react';
import HeroImg from '../assets/Hero.png'
function Hero(){
  return(
    <>
      <img src={HeroImg} alt="hero" className='hero--img'/>
    </>
  )
}
export default Hero;