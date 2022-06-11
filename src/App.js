import React from 'react';
import { useEffect, useState } from "react";
import Pusher from 'pusher-js'
import Sidebar from './components/sidebar'
import axios from './axios'
import Chat from './components/chatbox'
import './App.css'

function App() {
	const [ messages, setMessages]= useState([])
	useEffect(()=>{
		axios.get("/message/sync")
			.then(res => {
				console.log(res.data);
				setMessages(res.data)
			})
	},[])

	useEffect(()=>{
		 var pusher = new Pusher('key',{
			cluster: 'eu'
		});
		
		const channel = pusher.subscribe('message');
		channel.bind('inserted',(newMessage)=>{
			alert (JSON.stringify(newMessage))
			setMessages([...messages, newMessage])
		})
		
		return ()=>{
			channel.unbind_all();
			channel.unsubscribe();
		}
		
	},[messages])
	console.log (messages)
  return (
    <div className="app">
		<div className="app__body">
			<Sidebar />
			<Chat messages={messages}/>
		</div>
    </div>
  );
}

export default App;
