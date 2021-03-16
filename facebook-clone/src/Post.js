import React from 'react';
import './Post.css';
import { Avatar } from "@material-ui/core"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import NearMeIcon from "@material-ui/icons/NearMe"


function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className='post'>
    	<div className='post__top'>
    		<Avatar className='post__avatar' src={profilePic} />
    		<div className='post__topInfo'>
	    		<h2>{username}</h2>
				<p>Timestamp</p>
    		</div>


    	</div>
    	<div className='post__message'>
    		<p>{message}</p>
    	</div>
    	<div className='post__image'>
    		<img src={image} alt="" />
    	</div>
    	<div className='post__options'>
	    	<div className='post__option'>
	    		<ThumbUpIcon />
	    		<p>Like</p>
	    	</div>	
	    	<div className='post__option'>
	    		<ChatBubbleOutlineIcon />
	    		<p>Comment</p>
	    	</div>	
	    	<div className='post__option'>
	    		<NearMeIcon />
	    		<p>Share</p>
	    	</div>	

    	</div>	

    </div>
  );
}

export default Post;
