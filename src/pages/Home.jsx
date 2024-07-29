
import Hero from '../camponents/Hero'
import Brands from '../camponents/BrandName'
import Section1 from '../camponents/Section1'
import WatchCard from '../camponents/WatchCard'
import CardList from '../camponents/WatchCardList'

function Home(props
  
) {
  return (
    <>
      <Hero/>
      <Brands/>
      <Section1/>
      <CardList data={props.data} setData={props.setData}/>
      
    </>
  )
}

export default Home;