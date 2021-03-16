import React from 'react';
import './SearchPage.css';
import VideoCard from './VideoCard';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"

function SearchPage() {
  return (
    <div className="SearchPage">
    	<div className="SearchPage__filter">
	    	<TuneOutlinedIcon />
	    	<h2>FILTER</h2>
    	</div>
    	<hr/>
    	<ChannelRow
    		image="https://avatars2.githubusercontent.com/u/22930837"
    		channel="xibo"
    		verified={true}
    		subs="100K"
    		noOfVideos={300}
    		description="You can be a awesome programmer,plan, program, programme(noun) a series of steps to be carried out or goals to be accomplished. they drew up a six-step plan; they discussed plans for a new bond issue program, programme(verb) a performance (or series of performances) at a public presentation."
    	/>
        <hr/>

        <VideoRow
            views="1.1M"
            subs="560k"
            description="You can be a awesome programmer"
            timestamp="59 seconds"
            channel="xibo"
            title="Let's talk about the javascript"
            image="https://go.testim.io/hs-fs/hubfs/LP%20image.png?width=2580&name=LP%20image.png"
        />
        <VideoRow
            views="1.1M"
            subs="560k"
            description="You can be a awesome programmer"
            timestamp="59 seconds"
            channel="xibo"
            title="Let's talk about the javascript"
            image="https://go.testim.io/hs-fs/hubfs/LP%20image.png?width=2580&name=LP%20image.png"
        />
        <VideoRow
            views="1.1M"
            subs="560k"
            description="You can be a awesome programmer"
            timestamp="59 seconds"
            channel="xibo"
            title="Let's talk about the javascript"
            image="https://go.testim.io/hs-fs/hubfs/LP%20image.png?width=2580&name=LP%20image.png"
        />
        <VideoRow
            views="1.1M"
            subs="560k"
            description="You can be a awesome programmer"
            timestamp="59 seconds"
            channel="xibo"
            title="Let's talk about the javascript"
            image="https://go.testim.io/hs-fs/hubfs/LP%20image.png?width=2580&name=LP%20image.png"
        />
        <VideoRow
            views="1.1M"
            subs="560k"
            description="You can be a awesome programmer"
            timestamp="59 seconds"
            channel="xibo"
            title="Let's talk about the javascript"
            image="https://go.testim.io/hs-fs/hubfs/LP%20image.png?width=2580&name=LP%20image.png"
        />
    </div>
  );
}

export default SearchPage;
