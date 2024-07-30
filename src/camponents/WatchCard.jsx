import React from "react";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { deepPurple, purple, red } from "@mui/material/colors";

import watch1 from '../assets/watches/watch1.png';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#8763e3',
  },
  
});



function WatchCard(props) {

  

  

  const toggleCart = (index) => {
    const newData = props.data.map((item, i) => {
      if (i === index) {
        return { ...item, cart: !item.cart };
      }
      return item;
    });
    localStorage.setItem("dataKey", JSON.stringify(newData));
    props.setData(newData);
  };

  const toggleFav = (index) => {
    const newData = props.data.map((item, i) => {
      if (i === index) {
        return {...item, fav: !props.fav};
      }
      return item;
    });
    localStorage.setItem("dataKey", JSON.stringify(newData));
    props.setData(newData);
    
  }



  return(
    <>
      <div className="watchCard--container">
        <div className="watchCard--top-container">
          <div className="watch-img--container">
            <img src={props.img} alt={props.name} />
          </div> 
          <div className="watchCard--top-container-right">
            <div>
              {/* <Rating name="read-only" value='3' size="large" readOnly color="ma"/> */}
              <StyledRating
                name="customized-color"
                value={props.stars}
                size="large" 
                readOnly
                icon={<StarBorderIcon fontSize="inherit" />}
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
              />
            </div>
            <div className="card--price">
              $ {props.price}
            </div>
          </div> 
        </div>



        <div className="watchCard--bottom-container">
          <div className="watchCard--name">
            {props.brand} <span>/{props.name}</span>            
          </div>
          <div className="watchCard--buttons">

            <button 
              className={props.cart ? "watchCard-add--button watchCard--hover added" :"watchCard-add--button watchCard--hover"}
              onClick={() => toggleCart(props.index)}
            >
              {props.cart ? "remove" : "add"}
            </button>
            
            <button 
              className="watchCard-fav--button watchCard--hover"
              onClick={() => toggleFav(props.index)}
            >
              {props.fav? <FavoriteIcon sx={{ color: deepPurple['A700'] }}/> : <FavoriteBorderIcon/>}
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default WatchCard;