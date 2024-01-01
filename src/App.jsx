import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './camponents/Header'
import Hero from './camponents/hero'
import Brands from './camponents/BrandName'

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Brands/>
    </>
  )
}

export default App
