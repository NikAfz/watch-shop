import React from "react";
import WatchCard from "./WatchCard";

function CardList() {
  return(

    <div className="Card-list">
      <div>
        <select>
          <option value="">sorted by</option>
          <option value="p">price</option>
          <option value="p">price</option>
          <option value="p">price</option>
          <option value="p">price</option>
          <option value="p">price</option>
        </select>
      </div>
      <div className="Card-list--container">
        <WatchCard/>
        <WatchCard/>
        <WatchCard/>
        <WatchCard/>
        <WatchCard/>
        <WatchCard/>0
        <WatchCard/>
        <WatchCard/>
        <WatchCard/>
        <WatchCard/>
        <WatchCard/>
        <WatchCard/>
      </div>
    </div>
  )
}
export default CardList;