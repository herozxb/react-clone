import React from 'react';
import { Link } from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar, Button } from '@material-ui/core';
import Search from './Search'
import './Home.css';

function Home() {
  return (
    <div className="home">
        <div className="home__header">
      		<div className="home__header__left">
      			<Link to='/about'> about </Link>
      			<Link to='/store'> store </Link>
    		</div>
    	    <div className="home__header__right">
      			<Link to='/gmail'> gmail </Link>
      			<Link to='/images'> images </Link>
      			<AppsIcon />
      			<Avatar />
    		</div>
    	</div>
      	<div className="home__body">
      		<img 
      			src="https://www.tailorbrands.com/wp-content/uploads/2020/02/logo-design-quotes-thumbnail.jpg"
      		/>
      		<Search />
    	</div>
    </div>
  );
}

export default Home;
