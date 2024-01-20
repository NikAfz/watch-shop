import React from "react";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

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
    <div className="header">
      <div className="header--container">
        <h1>LuxeTick</h1>
        <div className="header--buttons">
          <a href="">
            
            <Badge badgeContent={1} color="secondary" >
              <ShoppingBagOutlinedIcon sx={{ fontSize: 30 }}/>
            </Badge>
            
          </a>
          <a href="">
            <Badge badgeContent={0} color="secondary" >
              <FavoriteBorderOutlinedIcon sx={{ fontSize: 30 }}/>
            </Badge>
          </a>

        </div>
      </div>
    </div>
  )
}
export default Header;