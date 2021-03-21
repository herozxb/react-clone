import React, { useState, useEffect } from 'react'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'
import { Link, useHistory } from 'react-router-dom';
import BasketItem from './BasketItem'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from './axios'
import './Payment.css';



function Payment() {

  const history = useHistory();

  const [{basket,user},dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisables] = useState(true);

  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  const [totalPrice, setTotalPrice] = useState();
  var myTotal = 0;
  useEffect(() => {
      for (var i = 0; i < basket.length; i++) {
          myTotal += basket[i].price;
      }
      setTotalPrice(myTotal);
    }
  )

  useEffect(() => {
    const getClientSecret = async () => {
        const response =await axios({
            method: 'post',
            url: `/payments/create?total=${myTotal*100}`,
        });
        setClientSecret(response.data.clientSecret)
    }

    getClientSecret();

  },[basket])

  const handleSubmit =  async (e) => {
      e.preventDefault();
      setProcessing(true);


      const payload = await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
          card: elements.getElement(CardElement)
        }
      }).then(({paymentIntent})=>{
          setSucceeded(true);
          setError(null);
          setProcessing(false);

          history.repalce('/orders');
      })
  }

  const handleChange = (e) => {
      setDisables(e.empty);
      setError(e.error ? e.error.message : "" )
  }



 return (
    <div className="payment">
        <div className="payment__container">

            <h1>
              Checkout (<Link to="/checkout">{basket?.length} items</Link>)
            </h1>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>{"email"}</p>
                    <p>{"123 react lane"}</p>
                    <p>{"Beijing"}</p>
                    <p>{"China"}</p>
                </div>
            </div>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment__items">
                    {basket.map(basketItem=>{
                        return <BasketItem
                          id={basketItem.id}
                            title={basketItem.title}
                            image={basketItem.image}
                            price={basketItem.price}
                            rating={basketItem.rating}
                          />
                    })}
                </div>

            </div>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                
                <div className="payment__details">
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />
                        <div className="payment__price__container">
                            <CurrencyFormat
                              renderText={(value) =>(
                                <>
                                  <h3 className="subtotal__text"> 
                                    <strong>Order Total : {value}</strong>
                                  </h3>
                                </>
                              )}
                              decimalScale={2}
                              value={totalPrice}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"$"}
                            />
                            <button disabled={ processing|| disabled || succeeded }>
                                <span> { processing? <p>Processing</p> : "Buy Now" } </span>
                            </button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Payment;























