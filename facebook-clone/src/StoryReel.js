import React from 'react';
import './StoryReel.css';
import { Avatar } from "@material-ui/core"
import Story from "./Story"
import { useStateValue } from './StateProvider';


function StoryReel({ src, selected, Icon, title }) {
    const [{user},dispatch] = useStateValue();
  return (
    <div className='storyreel'>
    	<Story
    		image="https://scontent-hkg4-2.xx.fbcdn.net/v/t1.0-9/152709560_10160371652501756_3739079147937072459_o.jpg?_nc_cat=110&ccb=3&_nc_sid=5b7eaf&_nc_ohc=Y6k6Of7kjAYAX9NXKVx&_nc_ht=scontent-hkg4-2.xx&oh=4d07058ac3329ecaa46e45ef5d0cfb33&oe=605FD662"
    		profileSrc={ user.photoURL } 
    		title={ user.displayName }
    	/>
    	<Story
    		image="https://scontent-hkg4-2.xx.fbcdn.net/v/t1.0-9/152709560_10160371652501756_3739079147937072459_o.jpg?_nc_cat=110&ccb=3&_nc_sid=5b7eaf&_nc_ohc=Y6k6Of7kjAYAX9NXKVx&_nc_ht=scontent-hkg4-2.xx&oh=4d07058ac3329ecaa46e45ef5d0cfb33&oe=605FD662"
    		profileSrc="https://avatars2.githubusercontent.com/u/22930837"
    		title="xibo"
    	/>
        <Story
            image="https://scontent-hkg4-2.xx.fbcdn.net/v/t1.0-9/152709560_10160371652501756_3739079147937072459_o.jpg?_nc_cat=110&ccb=3&_nc_sid=5b7eaf&_nc_ohc=Y6k6Of7kjAYAX9NXKVx&_nc_ht=scontent-hkg4-2.xx&oh=4d07058ac3329ecaa46e45ef5d0cfb33&oe=605FD662"
            profileSrc="https://avatars2.githubusercontent.com/u/22930837"
            title="xibo"
        />
        <Story
            image="https://scontent-hkg4-2.xx.fbcdn.net/v/t1.0-9/152709560_10160371652501756_3739079147937072459_o.jpg?_nc_cat=110&ccb=3&_nc_sid=5b7eaf&_nc_ohc=Y6k6Of7kjAYAX9NXKVx&_nc_ht=scontent-hkg4-2.xx&oh=4d07058ac3329ecaa46e45ef5d0cfb33&oe=605FD662"
            profileSrc="https://avatars2.githubusercontent.com/u/22930837"
            title="xibo"
        />

        <Story
            image="https://scontent-hkg4-2.xx.fbcdn.net/v/t1.0-9/152709560_10160371652501756_3739079147937072459_o.jpg?_nc_cat=110&ccb=3&_nc_sid=5b7eaf&_nc_ohc=Y6k6Of7kjAYAX9NXKVx&_nc_ht=scontent-hkg4-2.xx&oh=4d07058ac3329ecaa46e45ef5d0cfb33&oe=605FD662"
            profileSrc="https://avatars2.githubusercontent.com/u/22930837"
            title="xibo"
        />

    </div>
  );
}

export default StoryReel;