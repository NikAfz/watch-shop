import React from "react";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import watch1 from "../assets/watch1.png"
import { styled } from '@mui/material/styles';


import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#8763e3',
  },
  
});

function WatchCard() {
  return(
    <>
      <div className="watchCard--container">
        <div className="watchCard--top-container">
          <div className="watch-img--container">
            <img src={watch1} alt="" />
          </div> 
          <div className="watchCard--top-container-right">
            <div>
              {/* <Rating name="read-only" value='3' size="large" readOnly color="ma"/> */}
              <StyledRating
                name="customized-color"
                value={3}
                size="large" 
                readOnly
                icon={<StarBorderIcon fontSize="inherit" />}
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
              />
            </div>
            <div className="card--price">
              $ 1,000,000
            </div>
          </div> 
        </div>



        <div className="watchCard--bottom-container">
          <div className="watchCard--name">
            Rolex <span>/black heart</span>            
          </div>
          <div className="watchCard--buttons">
            <button className="watchCard-add--button watchCard--hover">add</button>
            <button className="watchCard-fav--button watchCard--hover">
              <FavoriteBorderIcon/>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default WatchCard;