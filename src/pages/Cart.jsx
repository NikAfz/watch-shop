import { Button } from "@mui/material";
import CardList from "../camponents/WatchCardList";
import WavyHeader from "../camponents/WavyHeader";
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import NoItem from '../camponents/NoItem';
import { Link } from "react-router-dom";

function Cart(props) {
  
  const fixData = props.data.filter(watch => watch.cart === true)

  const removeCart = () => {
    const newData = props.data.map((item)=>{
      return { ...item, cart: false }
    });
    localStorage.setItem("dataKey", JSON.stringify(newData))
    props.setData(newData);
  }

  return (
    <>
      <WavyHeader name="Cart"/>
      <div className="spacer2 spacer2-1"></div>
      {fixData.length >= 1 ? (
        <>
          <div className="side-page-button--container">
            <Button 
              className="r-b" 
              sx={{
                "&:hover": {
                  borderColor: "rgb(135, 99, 227)" , 
                  backgroundColor: "rgba(215, 199, 255, 0.557)", 
                  borderWidth:"2px"
                }, 
                borderRadius:"10px",
                color:"#8763e3",
                borderColor:"rgb(135, 99, 227)"
                }} 
              size="large" 
              variant="outlined" 
              onClick={removeCart}
              >
              remove all
            </Button>
            <Link to='/watch-shop/checkout'>
            <Button 
              sx={{borderRadius:"10px", backgroundColor:"#8763e3", "&:hover": {backgroundColor:"#6a4eb1"}}}
              variant="contained" 
              disableElevation 
              size="large" 
              endIcon={<ShoppingCartCheckoutRoundedIcon/>}
              
              >
              purchase
            </Button>
            </Link>
          </div>
          <CardList data={props.data} setData={props.setData} location='cart'/>
        </>
      ): <NoItem title="In Your Cart" />}
      
    </>
  )
}

export default Cart;