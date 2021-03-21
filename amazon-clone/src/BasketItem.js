import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import './BasketItem.css';

function BasketItem({id,title,image,price,rating}) {

	const [{basket}, dispatch] = useStateValue();
	const removeFromBasket = () => {
		dispatch({
			type:'REMOVE_FROM_BASKET',
			id:id,
		})
	};

  return (
    <div className="basketItem">
 		<img 
 			className="basketItem__image"
			src={image}
			alt=""
		/>
		<div className="basketItem__info__container">
			<div className="basketItem__info">
		 		<p className="basketItem__text">{title}</p>
		 		<p className="basketItem__price">
		          <small>$</small>
		          <strong>{price}</strong>
		        </p>
		        <div className="basketItem__rating">
		          {Array(rating).fill().map((_,i) =>(<p className="basketItem__rating__star">⭐</p>))}
		        </div>
		    </div>
	    	<div className="basketItem__button__container">
	        	<button className="basketItem__button" onClick={removeFromBasket}>Remove from Basket</button>
	    	</div>
	    </div>	
	    
    </div>
  );
}

export default BasketItem;








