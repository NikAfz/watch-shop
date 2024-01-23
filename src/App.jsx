import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//components
import Header from './camponents/Header'
import Footer from './camponents/Footer';

//pages
import Home from './pages/Home'
import Cart from './pages/Cart';
import Fav from './pages/Fav';
import Products from './pages/Products';
import Page404 from './pages/404';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Header/>
        <Routes>

          <Route path='/watch-shop' element={<Home/>} />
          <Route path='/watch-shop/cart' element={<Cart/>} />
          <Route path='/watch-shop/fav' element={<Fav/>} />
          <Route path='/watch-shop/products/all' element={<Products/>} />


          <Route path='*' element={<Page404/>}/>
        </Routes>
        <Footer/>
      </main>

    </BrowserRouter>
  )
}

export default App;
