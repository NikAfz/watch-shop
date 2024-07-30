import { Button } from "@mui/material";
import CardList from "../camponents/WatchCardList";
import WavyHeader from "../camponents/WavyHeader";
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import NoItem from '../camponents/NoItem';

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
      {fixData >= 1 ?
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
            <Button 
              sx={{borderRadius:"10px", backgroundColor:"#8763e3", "&:hover": {backgroundColor:"#6a4eb1"}}}
              variant="contained" 
              disableElevation 
              size="large" 
              endIcon={<ShoppingCartCheckoutRoundedIcon/>}
              >
              purchase
            </Button>
          </div>
          <CardList data={fixData} setData={props.setData}/>
        </>
      : <NoItem title="In Your Cart" />}
      
    </>
  )
}

export default Cart;