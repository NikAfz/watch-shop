import CardList from "../camponents/WatchCardList";
import WavyHeader from "../camponents/WavyHeader";

function Fav() {
  return (
    <>
      <WavyHeader name="Favorits"/>
      <div className="spacer2"></div>
      <CardList/>
      
    </>
  )
}

export default Fav;