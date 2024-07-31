import WavyHeader from "../camponents/WavyHeader";
import CheckOutProduct from "../camponents/CheckOutProduct";
import { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { deepPurple, purple } from "@mui/material/colors";
import NoItem from "../camponents/NoItem";



function CheckOut(props) {
  const fixData = props.data.filter(watch => watch.cart === true)

  const checkOutData = props.data.filter(watch => watch.cart === true).map((element)=>{
    return(
      <CheckOutProduct
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
    )
  })

  const [data, setData] = useState(
    props.data.filter(watch => watch.cart === true).map(item => ({
      ...item,
      price: parseFloat(item.price.replace(/,/g, ''))
    }))
  );
  
  const [totalPrice, setTotalPrice] = useState( data
  .filter(watch => watch.cart === true)
  .reduce((acc, watch) => acc + watch.price, 0)
  .toLocaleString());

  const purchaseHandle = () => {
    setTotalPrice(0)
    const newData = props.data.map((item)=>{
      return { ...item, cart: false }
    });
    localStorage.setItem("dataKey", JSON.stringify(newData))
    props.setData(newData);
  }
  
  
  
  
  
  
  
  return (
    
    <>
      <WavyHeader name="Check out" />
      <div className="spacer2 spacer2-1"></div>
      { fixData.length >=1 ? (
        <>
          <div className="checkout--container">
            <div className="checkout-left--container">
              <div className="checkout-products--container">
                {checkOutData}
              </div>
            </div>
            <div className="checkout-right--container">
              <div className="checkout-prise--container">
                <p>TOTAL :</p>
                <p>{totalPrice}</p>
              </div>
              <div className="checkout-form--container">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="name"
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      
                      '&:hover fieldset': {
                        borderColor: deepPurple[600],
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: deepPurple[600],
                      },
                    },
                    
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: deepPurple["A400"],
                    },
                  }}
                />

                <TextField 
                  fullWidth 
                  required 
                  id="outlined-basic" 
                  label="E-mail" 
                  variant="outlined" 
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      
                      '&:hover fieldset': {
                        borderColor: deepPurple[600],
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: deepPurple[600],
                      },
                    },
                    
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: deepPurple["A400"],
                    },
                  }}
                />
              </div>
              <div className="checkout-purchase--container">
              <Button
                onClick={purchaseHandle}

                variant="outlined"
                size="large"
                sx={{
                  width: '150px',
                  height: '50px',
                  borderColor: deepPurple[600],
                  color: deepPurple[600],
                  '&:hover': {
                    borderWidth:'2px',
                    borderColor: deepPurple[600],
                    color: deepPurple[600],
                    backgroundColor: purple[100]
                  },
                  '&.Mui-focused': {
                    borderColor: purple[400],
                    color: purple[400],
                  },
                }}
              >
                purchase
              </Button>
              </div>
            </div>
          </div>
        </>
      ) : <NoItem title="In Cart To Buy"/>}
    </>
  )
};

export default CheckOut;
