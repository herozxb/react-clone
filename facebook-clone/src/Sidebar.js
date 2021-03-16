import React from 'react';
import './Sidebar.css';
import HomeIcon from "@material-ui/icons/Home"
import WhatshotIcon from "@material-ui/icons/Whatshot"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import HistoryIcon from "@material-ui/icons/History"
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo"
import WatchLaterIcon from "@material-ui/icons/WatchLater"
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined"
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined"

import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags"
import PeopleIcon from "@material-ui/icons/People"
import ChatIcon from "@material-ui/icons/Chat"
import StorefrontIcon from "@material-ui/icons/Storefront"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"

import SidebarRow from "./SidebarRow";

function Sidebar() {
  return (
    <div className="sidebar">

        <SidebarRow selected src="https://avatars2.githubusercontent.com/u/22930837" title="Xibo" />
    	<SidebarRow Icon={LocalHospitalIcon} title="Covid-19" />
    	<SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
        <SidebarRow Icon={PeopleIcon} title="Friends" />
    	<SidebarRow Icon={ChatIcon} title="Messenger" />
    	<SidebarRow Icon={StorefrontIcon} title="Marketplace" />
    	<SidebarRow Icon={VideoLibraryIcon} title="History" />
    	<SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
    	<SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
    	<SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos" />
    	<SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show More" />

    </div>
  );
}

export default Sidebar;
