import CardList from "../camponents/WatchCardList";
import WavyHeader from "../camponents/WavyHeader";



function Cart() {
  return (
    <>
      <WavyHeader name="Cart"/>
      <div className="spacer2"></div>
      <CardList/>
      
    </>
  )
}

export default Cart;