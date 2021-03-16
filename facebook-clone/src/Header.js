import React, { useState }  from 'react';
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import VideoCallIcon from "@material-ui/icons/VideoCall"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from "@material-ui/icons/Notifications"
import HomeIcon from "@material-ui/icons/Home"
import FlagIcon from "@material-ui/icons/Flag"
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined"
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined"
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle"
import AddIcon from "@material-ui/icons/Add"
import ForumIcon from "@material-ui/icons/Forum"
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { Avatar, IconButton } from "@material-ui/core"
import { Link } from "react-router-dom"

function Header() {

	const [inputSearch, setInputSearch] = useState("");

	return (
	<div className="header">
		<div className="header__left"> 
			<img 
				src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Facebook_f_Logo_%28with_gradient%29.svg"
				alt=""
			/>
			<div className="header__input">
				<SearchIcon className="header__icon"/>
				<input type="text" placeholder="Search"/>
			</div> 
		</div>
		<div className="header__center">
			<div className="header__option header__option--active">
				<HomeIcon fontSize="large" />
			</div>
			<div className="header__option">
				<FlagIcon fontSize="large" />
			</div>
			<div className="header__option">
				<SubscriptionsOutlinedIcon fontSize="large" />
			</div>
			<div className="header__option">
				<StorefrontOutlinedIcon fontSize="large" />
			</div>
			<div className="header__option">
				<SupervisedUserCircleIcon fontSize="large" />
			</div>
		</div>
		<div className="header__right">
			<div className="header__info">
				<Avatar
	      			alt="xibo"
	      			src="https://avatars2.githubusercontent.com/u/22930837" 
	      		/>
	      		<h4>Xibo</h4>
      		</div>
      		<div className="header__iconbutton">
	      		<IconButton>
	      			<AddIcon/>
	      		</IconButton>
	      		<IconButton>
	      			<ForumIcon/>
	      		</IconButton>
	      		<IconButton>
	      			<NotificationsActiveIcon/>
	      		</IconButton>
	      		<IconButton>
	      			<ExpandMoreIcon/>
	      		</IconButton>
      		</div>
		</div>
	</div>
	);
}

export default Header;
