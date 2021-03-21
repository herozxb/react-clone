import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider'
import './Product.css';

function Product({id,title,image,price,rating}) {
  const [{basket}, dispatch] = useStateValue();
  console.log("basket:",basket)
  const addToBasket = () => {
    //dispatch the items into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      }

      });

  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_,i) =>(<p>⭐</p>))}
        </div>
      </div>
      <img 
          className="product__image" 
          src={image}
          alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
