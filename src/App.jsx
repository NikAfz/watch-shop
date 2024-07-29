import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//components
import Header from './camponents/Header';
import Footer from './camponents/Footer';

//pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import Fav from './pages/Fav';
import Products from './pages/Products';
import Page404 from './pages/404';

import watch1 from "./assets/watches/watch1.png";
import C1 from "./assets/watches/C1.png";
import C2 from "./assets/watches/C2.png";
import C3 from "./assets/watches/C3.png";
import C4 from "./assets/watches/C4.png";
import C5 from "./assets/watches/C5.png";
import J1 from "./assets/watches/J1.png";
import J2 from "./assets/watches/J2.png";
import J3 from "./assets/watches/J3.png";
import P1 from "./assets/watches/P1.png";
import P2 from "./assets/watches/P2.png";
import P3 from "./assets/watches/P3.png";
import P4 from "./assets/watches/P4.png";
import P5 from "./assets/watches/P5.png";
import P6 from "./assets/watches/P6.png";
import R1 from "./assets/watches/R1.png";
import R2 from "./assets/watches/R2.png";
import R4 from "./assets/watches/R4.png";
import R5 from "./assets/watches/R5.png";
import T1 from "./assets/watches/T1.png";
import T5 from "./assets/watches/T5.png";
import T6 from "./assets/watches/T6.png";
import T7 from "./assets/watches/T7.png";
import T8 from "./assets/watches/T8.png";

function App() {

  const [data, setData] = useState(
    [
      {
        "brand": "CITIZEN",
        "name": "Black Demon",
        "stars": 3,
        "price": "200",
        "img": watch1 ,
        "fav": false,
        "cart": false,
      },
      {
        "brand": "CITIZEN",
        "name": "Gold Age",
        "stars": 3,
        "price": "230",
        "img": C1 ,
        "fav": false,
        "cart": false,
      },
      {
        "brand": "CITIZEN",
        "name": "Black Ion",
        "stars": 4,
        "price": "400",
        "img": C2 ,
        "fav": false,
        "cart": false,
      },
      {
        "brand": "CITIZEN",
        "name": "Black Panther",
        "stars": 3,
        "price": "169",
        "img": C3 ,
        "fav": false,
        "cart": false,
      },
      {
        "brand": "CITIZEN",
        "name": "Gold 59F",
        "stars": 2,
        "price": "120",
        "img": C4 ,
        "fav": false,
        "cart": false,
      },
      {
        "brand": "CITIZEN",
        "name": "Mother of Pearl",
        "stars": 5,
        "price": "825",
        "img": C5 ,
        "fav": false,
        "cart": false,
      },


      {
        "brand": "Jacob & Co",
        "name": "Casino Tourbillon",
        "stars": 5,
        "price": "499,900",
        "img": J1 ,
        "fav": false,
        "cart": false,
      },
      {
        "brand": "Jacob & Co",
        "name": "Billionaire III",
        "stars": 5,
        "price": "5,000,000",
        "img": J2 ,
        "fav": false,
        "cart": false,
      },
      {
        "brand": "Jacob & Co",
        "name": "Opera Godfather",
        "stars": 5,
        "price": "400,000",
        "img": J3 ,
        "fav": false,
        "cart": false,
      },


      {
        "brand": "Patek Philippe",
        "name": "S Nautilus",
        "stars": 4,
        "price": "156,000",
        "img": P1 ,
        "fav": false,
        "cart": false,
      },
      {
        "brand": "Patek Philippe",
        "name": "RG Nautilus",
        "stars": 4,
        "price": "166,000",
        "img": P2 ,
        "fav": false,
        "cart": false,
      },
      {
        "brand": "Patek Philippe",
        "name": "Grand Complications",
        "stars": 3,
        "price": "2,700,000",
        "img": P3 ,
        "fav": false,
        "cart": false,
      },
      {
        "brand": "Patek Philippe",
        "name": "Ellipse",
        "stars": 2,
        "price": "36,000",
        "img": P4 ,
        "fav": false,
        "cart": false,
      },
      {
        "brand": "Patek Philippe",
        "name": "Aquanaut",
        "stars": 3,
        "price": "54,300",
        "img": P5 ,
        "fav": false,
        "cart": false,
      },
      {
        "brand": "Patek Philippe",
        "name": "Complications",
        "stars": 4,
        "price": "1,300,000",
        "img": P6 ,
        "fav": false,
        "cart": false,
      },


      {
        "brand": "Rolex",
        "name": "Gold Day-Date",
        "stars": 3,
        "price": "141,000",
        "img": R1 ,
        "fav": false,
        "cart": false,
      },
      {
        "brand": "Rolex",
        "name": "Daytona Platinum",
        "stars": 4,
        "price": "120,000",
        "img": R2 ,
        "fav": false,
        "cart": false,
      },
      {
        "brand": "Rolex",
        "name": "Cosmograph ",
        "stars": 5,
        "price": "47,000",
        "img": R4 ,
        "fav": false,
        "cart": false,
      },
      {
        "brand": "Rolex",
        "name": " Gold Cosmograph ",
        "stars": 3,
        "price": "30,000",
        "img": R5 ,
        "fav": false,
        "cart": false,
      },


      {
        "brand": "Tudor",
        "name": "Black Bay Red",
        "stars": 3,
        "price": "4,500",
        "img": T1 ,
        "fav": false,
        "cart": false,
      },
      {
        "brand": "Tudor",
        "name": "Black Bay GMT",
        "stars": 4,
        "price": "4,300",
        "img": T5 ,
        "fav": false,
        "cart": false,
      },
      {
        "brand": "Tudor",
        "name": "Heritage Black Bay",
        "stars": 5,
        "price": "5,300",
        "img": T6 ,
        "fav": false,
        "cart": false,
      },
      {
        "brand": "Tudor",
        "name": "Black Bay 58",
        "stars": 3,
        "price": "4,000",
        "img": T7 ,
        "fav": false,
        "cart": false,
      },
      {
        "brand": "Tudor",
        "name": "Royal",
        "stars": 5,
        "price": "6,000",
        "img": T8 ,
        "fav": false,
        "cart": false,
      },
    ]
  )


  return (
    <BrowserRouter>
      <main>
        <Header/>
        <Routes>

          <Route path='/watch-shop' element={<Home data={data} setData={setData} />} />
          <Route path='/watch-shop/cart' element={<Cart data={data} setData={setData} />} />
          <Route path='/watch-shop/fav' element={<Fav data={data} setData={setData} />} />
          <Route path='/watch-shop/products/all' element={<Products data={data} setData={setData} />} />


          <Route path='*' element={<Page404/>}/>
        </Routes>
        <Footer/>
      </main>

    </BrowserRouter>
  )
}

export default App;
