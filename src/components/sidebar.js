import React from 'react'
import './sidebar.css'
import SidebarChat from './SidebarChat'
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {Avatar, IconButton} from "@material-ui/core"
import {SearchOutlined} from "@material-ui/icons";

function Sidebar(){
	return(
		<div className="sidebar">
		
			<div className= "sidebar__header">
				<Avatar src= "./20191208_092516.jpg"/>
				<div className="sidebar__headerRight">
					<IconButton>
						<DonutLargeIcon/>
					</IconButton>
					<IconButton>
						<ChatIcon/>
					</IconButton>
					<IconButton>
						<MoreVertIcon/>
					</IconButton>
				</div>
			</div>
			<div className="sidebar__search">
					<div className="sidebar__searchContainer">
						<SearchOutlined/>
						<input placeholder="search or start new"  type="text"/>
					</div>
				</div>
				<div className= "sidebar__chats">
					<SidebarChat/>
					<SidebarChat/>
					<SidebarChat/>
					<SidebarChat/>
				</div>
		</div>
	);
}
export default Sidebar;








