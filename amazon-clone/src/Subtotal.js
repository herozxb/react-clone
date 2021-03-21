import React, { useState, useEffect } from 'react'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'
import './Subtotal.css';

function Subtotal() {
  const [{basket}, dispatch] = useStateValue();
  const [totalPrice, setTotalPrice] = useState();
  var myTotal = 0;
  useEffect(() => {
      for (var i = 0; i < basket.length; i++) {
          myTotal += basket[i].price;
      }
      setTotalPrice(myTotal);
    }
  )
 return (
    <div className="subtotal">
      <CurrencyFormat
      	renderText={(value) =>(
      		<>
      			<p className="subtotal__text"> 
      				Subtotal ( {basket.length} items):
      				<strong>{value}</strong>
      			</p>
      			<small className="subtotal__gift">
      				<input type="checkbox" />This order contains a gift
      			</small>
      		</>
      	)}
      	decimalScale={2}
      	value={totalPrice}
      	displayType={"text"}
      	thousandSeparator={true}
      	prefix={"$"}
      />
      <button>Process to checkout</button>
    </div>
  );
}

export default Subtotal;
