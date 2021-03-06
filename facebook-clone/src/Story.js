import React from 'react';
import './Story.css';
import { Avatar } from "@material-ui/core"


function Story({ image, profileSrc, title }) {
  return (
    <div className='story'>
    	<Avatar className='story__avatar' src={profileSrc} />
    	<img  src={image} />
    	<h4>{title}</h4>

    </div>
  );
}

export default Story;
