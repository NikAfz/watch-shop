import CardList from "../camponents/WatchCardList"
import WavyHeader from "../camponents/WavyHeader";


function Products(props) {
  
  return (
    <>
      <WavyHeader name="All Products"/>
      <div className="spacer2 spacer2-1"></div>


      <CardList data={props.data} setData={props.setData} location='all' />
      
    </>
  )
}

export default Products;