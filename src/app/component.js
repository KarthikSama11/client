'use client'
import io from "socket.io-client"
import React,{ useState, useEffect } from "react"
console.log("run aytunda")
export default function Component(){
    const [socket, setSocket] = useState(null)
    const [inputText, setInputText] = useState("")
    useEffect(() => {
        const newSocket = io("http://localhost:8000")
        setSocket(newSocket);
      return () => {
        newSocket.close();
      }
    }, [])
    if(socket){
        socket.emit("event-peru","fucker");
    }

    function roomJoiner(e){
        socket.emit('join-room', inputText);
    }
    
    
    return (
        <>
        <input placeholder="make your own room" onChange={(e)=>setInputText(e.target.value)}></input>
        <button onClick = {()=>roomJoiner(inputText)}>create/join</button>
        </>
    )
}