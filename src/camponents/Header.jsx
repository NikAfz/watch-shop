import React from "react";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 0,
    top: 28,
    border: `2px solid ${theme.palette}`,
    padding: '0 4px',
  },
}));

function Header(){
  return(
    <header className="header">
      <div className="header--container">
        <Link to="/watch-shop/">
          <h1>LuxeTick</h1>
        </Link>
        <div className="header--buttons">
          <Link to="/watch-shop/cart">
            
            <Badge badgeContent={1} color="secondary" >
              <ShoppingBagOutlinedIcon sx={{ fontSize: 30 }}/>
            </Badge>
            
          </Link>
          <Link to="/watch-shop/fav">
            <Badge badgeContent={0} color="secondary" >
              <FavoriteBorderOutlinedIcon sx={{ fontSize: 30 }}/>
            </Badge>
          </Link>

        </div>
      </div>
    </header>
  )
}
export default Header;