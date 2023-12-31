import React from "react";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';


function Header(){
  return(
    <div className="header">
      <div className="header--container">
        <h1>LuxeTick</h1>
        <div className="header--buttons">
          <a href="">
            <ShoppingBagOutlinedIcon fontSize="large"/>
          </a>
          <a href="">
            <FavoriteBorderOutlinedIcon fontSize="large"/>
          </a>

        </div>
      </div>
    </div>
  )
}
export default Header;