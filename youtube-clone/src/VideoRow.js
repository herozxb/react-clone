import React from 'react';
import './VideoRow.css';
import Avatar from "@material-ui/core/Avatar"
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlined"


function VideoRow({ views, subs, description, timestamp, channel, title, image }) {
  return (
    <div className="VideoRow">
        <img src={image} alt="" />
        <div className="VideoRow__text">
            <h3>{title}</h3>
            <p className="VideoRow__headline">
                {channel} •{" "} 
                <span className="VideoRow__subs">
                    <span className="VideoRow__subsNumber"> {subs} Subscribers</span> 
                </span>{" "}
                    • {views} Views • timestamp</p>
            <p className="VideoRow__descriptiont">{description}</p>
        </div>
    </div>
  );
}

export default VideoRow;
