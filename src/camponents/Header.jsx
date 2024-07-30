import React, { useEffect, useState } from "react";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';


function Header(props){

  

  

  return(
    <header className="header">
      <div className="header--container">
        <a href="/watch-shop/">
          <h1>LuxeTick</h1>
        </a>
        <div className="header--buttons">
          <Link to="/watch-shop/cart">
            <Tooltip title="Cart" arrow disableInteractive TransitionComponent={Zoom}>
              <Badge badgeContent={props.data.filter(item => item.cart).length} color="secondary" >
                <ShoppingBagOutlinedIcon sx={{ fontSize: 30 }}/>
              </Badge>
            </Tooltip>
            
          </Link>
          <Link to="/watch-shop/fav">
            <Tooltip title="Favorit" arrow disableInteractive TransitionComponent={Zoom} >
              <Badge badgeContent={props.data.filter(item => item.fav).length} color="secondary" >
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