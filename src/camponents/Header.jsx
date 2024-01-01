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
            <ShoppingBagOutlinedIcon sx={{ fontSize: 30 }}/>
          </a>
          <a href="">
            <FavoriteBorderOutlinedIcon sx={{ fontSize: 30 }}/>
          </a>

        </div>
      </div>
    </div>
  )
}
export default Header;