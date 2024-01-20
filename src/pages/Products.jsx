import CardList from "../camponents/WatchCardList"
import WavyHeader from "../camponents/WavyHeader";

function Products() {
  return (
    <>
      <WavyHeader name="All Products"/>
      <div className="spacer2"></div>
      <CardList/>
      
    </>
  )
}

export default Products;