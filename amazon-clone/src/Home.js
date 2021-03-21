import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Home.css';
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
      	<img 
      		className="home__image"
      		src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/March-21/Network_Theme_2/LP_Theme2_PC_01.jpg" 
      		alt=""/>
        <div className="home__row">
          {/*Product*/}
          <Product 
            id="239847249"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY436_FMwebp_QL65_.jpg" 
            price={9.99}
            rating={5}
            />
          <Product 
            id="92483098"
            title="Zero to One: Notes on Startups, or How to Build the Future"
            image="https://images-na.ssl-images-amazon.com/images/I/4137OkbPQ4L._SX331_BO1,204,203,200_.jpg" 
            price={10.49}
            rating={4}
            />
          {/*Product*/}
          
        </div>
        <div className="home__row">
          {/*Product*/}
          <Product 
            id="3298423974"
            title="New Apple iPhone 12 Pro Max (128GB) - Pacific Blue"
            image="https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_UY436_FMwebp_QL65_.jpg" 
            price={799}
            rating={5}
            />
          {/*Product*/}
          <Product 
            id="398439287"
            title="Oppo A31 (Mystery Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            image="https://m.media-amazon.com/images/I/71KCwNV6MuL._AC_UL640_FMwebp_QL65_.jpg" 
            price={990}
            rating={5}
            />
          {/*Product*/}
          <Product 
            id="8934759"
            title="New Apple iPhone 12 (128GB) - Blue"
            image="https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_UY436_FMwebp_QL65_.jpg" 
            price={889}
            rating={5}
            />
        </div>
        <div className="home__row">
          {/*Product*/}
          <Product 
            id="28374937"
            title="New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Silver (Latest Model)"
            image="https://m.media-amazon.com/images/I/71gD8WdSlaL._AC_UY436_FMwebp_QL65_.jpg" 
            price={999}
            rating={5}
            />
        </div>
      </div>
    </div>
  );
}

export default Home;
