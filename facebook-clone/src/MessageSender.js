import React, { useState } from 'react';
import './MessageSender.css';
import { Avatar } from "@material-ui/core"
import VideocamIcon from "@material-ui/icons/Videocam"
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"

function MessageSender({ image, profileSrc, title }) {

	const [ input, setInput ] = useState('');
	const [ inputURL, setInputURL ] = useState('');
	const handleSubmit = e => {
		e.preventDefault();

		setInput("");
		setInputURL("");
	}

	return (
		<div className='messageSender'>
		    <div className='messagesender_top'>
		        <Avatar className='messagesender__avatar' src={profileSrc} />
		        <form>
		        	<input
		        		value={input}
		        		onChange={(e) => {setInput(e.target.value)}}
		        		className='messagesender__input'
		        		placeholder={"What's on your mind"}
		        		type="text"
		        	/>
		        	<input
		        		value={inputURL}
		        		onChange={(e) => {setInputURL(e.target.value)}}
		        	    placeholder={"Image URL { optional }"} 
		        		type="text"
		        	/>
		        	<button onClick={handleSubmit} type="submit">
		        		Hidden submit
		        	</button>
		        </form>
		    </div>
		    <div className='messagesender_bottom'>
		    	<div className='messagesender_option'>
		    		<VideocamIcon style={{ color:"red" }}/>
		    		<h3>Live Video</h3>
		    	</div>
		    	<div className='messagesender_option'>
		    		<PhotoLibraryIcon style={{ color:"green" }}/>
		    		<h3>Photo/Video</h3>
		    	</div>
		    	<div className='messagesender_option'>
		    		<InsertEmoticonIcon style={{ color:"orange" }}/>
		    		<h3>Feeling/Activity</h3>
		    	</div>
		    </div>
		</div>
	);
}

export default MessageSender;
