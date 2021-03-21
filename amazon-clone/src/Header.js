import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './Firebase'
import './Header.css';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticatoin = () => {
    if(user)
    {
      auth.signOut();
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
      </Link>
      <div className="header__search">
        <input 
          className="header__search__input"
          type="text"
        />
        <SearchIcon className="header__icon" />
        </div>
        <div className="header__nav">
          <Link to={!user&&"/login"}>  
            <div onClick={handleAuthenticatoin} className="header__option">
              <span className="header__optionLineOne">Hello {user? user.email : "Guest"}</span>
              <span className="header__optionLineTwo">{ user ? "Sign Out" : "Sign In" }</span>
            </div>
          </Link> 
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>          
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>          
          </div>
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingCartIcon />
              <span className="header__optionBasketCount">{basket?.length}</span>
            </div>
          </Link> 
      </div>
    </div>
  );
}

export default Header;
