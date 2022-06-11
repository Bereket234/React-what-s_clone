import React from 'react'
import{ useState } from "react";
import './chat.css'
import axios from '../axios'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import {Avatar, IconButton} from '@material-ui/core'
import {SearchOutlined, AttachFile, MoreVert} from '@material-ui/icons'
function Chat({messages}){
const [input, setInput]= useState('')
	const sendMessage=async (e)=>{
		e.preventDefault();
		axios.post("/message/new", {
			message: input,
			name: "bek",
			timestamp: 'now',
			recived: false
		})
		setInput('')
	}
	return(
		<div className="chat">
			<div className="chat__header">
				<Avatar/>
				<div className="chat__headerInfo">
					<h3>room name</h3>
					<p>last seen...</p>
				</div>
				<div className="chat__headerRight">
					<IconButton>
						<SearchOutlined/>
					</IconButton>
					<IconButton>
						<AttachFile/>
					</IconButton>
					<IconButton>
						<MoreVert/>
					</IconButton>
				</div>
			</div>
			<div className="chat__body">
				{messages.map ((message)=> {
					return (
						<p className={`chat__message $ {message.recived}&& "chat__reciver"`} >
							<span className="chat__name">{message.name}</span>
								{message.message}
							<span className= "chat__timestamp">
								{message.timestamp}
							</span>
						</p>
					)
				})}
				</div>
			<div className="chat__footer"> 
				<IconButton>
					<InsertEmoticonIcon/>
				</IconButton>
				<form>
					<input
						value= {input}
						onChange= {
							(e)=>setInput(e.target.value)
						}
						type= "text"
						placeholder= "type a massage"
						/> 
					<button 
						type ="submit"
						onClick={sendMessage}
						>send</button>
				</form>
				<MicIcon/>
			</div> 
		</div>
	)
}
export default Chat;