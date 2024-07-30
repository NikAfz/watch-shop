import React, { useEffect, useState } from "react";
import WatchCard from "./WatchCard";


function CardList(props) {
  const [rightData, setRightData] = useState([]);

  useEffect(() => {
    const updateRightData = () => {
      let newRightData = [];

      if (props.location === "all" || props.location === "home") {
        newRightData = props.data;
      } else if (props.location === "cart") {
        newRightData = props.data.filter(watch => watch.cart === true);
      } else if (props.location === "fav") {
        newRightData = props.data.filter(watch => watch.fav === true);
      }

      // Only update state if the new data is different from the current data
      if (JSON.stringify(newRightData) !== JSON.stringify(rightData)) {
        setRightData(newRightData);
      }
    };

    updateRightData();
  }, [props.data, props.location]); // Add props.location as a dependency

  const watches = rightData.map((element, index) => (
    <WatchCard
      key={element.index}
      brand={element.brand}
      name={element.name}
      stars={element.stars}
      price={element.price}
      img={element.img}
      fav={element.fav}
      cart={element.cart}
      
      index={element.index}
      data={props.data}
      setData={props.setData}
    />
  ));

  return (
    <div className="Card-list">
      <div className="Card-list--container">
        {watches}
      </div>
    </div>
  );
}
export default CardList;