import React from "react";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';


function Header(){
  return(
    <header className="header">
      <div className="header--container">
        <Link to="/watch-shop/">
          <h1>LuxeTick</h1>
        </Link>
        <div className="header--buttons">
          <Link to="/watch-shop/cart">
            <Tooltip title="Cart" arrow disableInteractive TransitionComponent={Zoom}>
              <Badge badgeContent={1} color="secondary" >
                <ShoppingBagOutlinedIcon sx={{ fontSize: 30 }}/>
              </Badge>
            </Tooltip>
            
          </Link>
          <Link to="/watch-shop/fav">
            <Tooltip title="Cart" arrow disableInteractive TransitionComponent={Zoom} >
              <Badge badgeContent={0} color="secondary" >
                <FavoriteBorderOutlinedIcon sx={{ fontSize: 30 }}/>
              </Badge>
            </Tooltip>
          </Link>

        </div>
      </div>
    </header>
  )
}
export default Header;