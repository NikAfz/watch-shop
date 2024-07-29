import React from "react";
import WatchCard from "./WatchCard";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function CardList(props) {
    const watches = props.data.map((element, index)=>{
      return(
        <WatchCard
        key={index}
        brand={element.brand}
        name={element.name}
        stars={element.stars}
        price={element.price}
        img={element.img}
        fav={element.fav}
        cart={element.cart}
        />
      );
    })
  return(

    <div className="Card-list">
      <div className="Card-list--container">
        {watches}
      </div>
    </div>
  )
}
export default CardList;