import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './camponents/Header'
import Hero from './camponents/hero'
import Brands from './camponents/BrandName'
import Section1 from './camponents/section1'

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Brands/>
      <Section1/>
    </>
  )
}

export default App
