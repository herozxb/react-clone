import React from 'react';
import './SidebarRow.css';
import { Avatar } from "@material-ui/core"


function SidebarRow({ src, selected, Icon, title }) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
    	{ src && <Avatar src={src} /> }
    	{ Icon && <Icon className="sidebarRow__icon"/> }
    	<h2 className="sidebarRow__title">{title}</h2>
    </div>
  );
}

export default SidebarRow;
