import React from 'react';
import './Feed.css';
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender"
import Post from "./Post"

function Feed() {
  return (
    <div className="feed">
    	<StoryReel/>
    	<MessageSender className="feed__messageSender"/>
    	<Post 
    		profilePic="https://avatars2.githubusercontent.com/u/22930837"
    		message="Hello This World! Nov 15, 2018 — npm run build does nothing unless you specify what  does in your package.json file. It lets you perform any necessary building/prep tasks ..."
    		timestamp="2021.02.28"
    		username="xibo"
    		image="https://code.org/shared/images/social-media/codeorg2019_social.png"
    	/>	
    	<Post 
    		profilePic="https://avatars2.githubusercontent.com/u/22930837"
    		message="Hello This World!"
    		timestamp="2021.02.28"
    		username="xibo"
    		image="https://code.org/shared/images/social-media/codeorg2019_social.png"
    	/>	
    	<Post 
    		profilePic="https://avatars2.githubusercontent.com/u/22930837"
    		message="Hello This World!"
    		timestamp="2021.02.28"
    		username="xibo"
    		image="https://code.org/shared/images/social-media/codeorg2019_social.png"
    	/>	
    	<div className="feed__videos">
    	</div>
    </div>
  );
}

export default Feed;
