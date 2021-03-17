import React, { useState } from 'react';
import './MessageSender.css';
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from './StateProvider';
import db from "./Firebase";
import firebase from "firebase";

function MessageSender({ image, profileSrc, title }) {

	const [{user},dispatch] = useStateValue();
	const [ input, setInput ] = useState('');
	const [ inputURL, setInputURL ] = useState('');
	const handleSubmit = e => {
		e.preventDefault();


		db.collection('posts').add({
			message:input,
			timestamp:firebase.firestore.FieldValue.serverTimestamp(),
			profilePic: user.photoURL,
			username:user.displayName,
			image:inputURL,

		})

		setInput("");
		setInputURL("");
	}

	return (
		<div className='messageSender'>
		    <div className='messagesender_top'>
		        <Avatar className='messagesender__avatar' src={user.photoURL} />
		        <form>
		        	<input
		        		value={input}
		        		onChange={(e) => {setInput(e.target.value)}}
		        		className='messagesender__input'
		        		placeholder={`What's on your mind, ${user.displayName}`}
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
