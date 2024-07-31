import DeleteIcon from '@mui/icons-material/Delete';
import w from '../assets/watches/C1.png'
import { red } from '@mui/material/colors';


function CheckOutProduct(props) {

  const toggleCart = (index) => {
    const newData = props.data.map((item, i) => {
      if (i === index) {
        return { ...item, cart: !item.cart };
      }
      return item;
    });
    localStorage.setItem("dataKey", JSON.stringify(newData));
    props.setData(newData);
  };

  return (
    <>
      <div className="checkout-product">
        <div className="checkout-product-d1" >
          <DeleteIcon 
            sx={{color:red["A700"], cursor:"pointer"}} 
            onClick={() => toggleCart(props.index)}
          />
          <div className="checkout-product-d1-1">
            <img src={props.img} alt="pic" />
            <p className="checkout-product-name">  {props.brand}  <span>/{props.name}</span></p>
          </div>
        </div>
        
        <p className="checkout-product-price">$ {props.price}</p>
      </div>
    </>
  )
};

export default CheckOutProduct;
