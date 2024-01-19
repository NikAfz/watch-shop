import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './camponents/Header'
import Hero from './camponents/Hero'
import Brands from './camponents/BrandName'
import Section1 from './camponents/Section1'
import WatchCard from './camponents/WatchCard'
import CardList from './camponents/WatchCardList'

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Brands/>
      <Section1/>

      <CardList/>
      
    </>
  )
}

export default App
