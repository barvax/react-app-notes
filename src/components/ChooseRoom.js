
import { useState } from "react";
import { Link } from "react-router-dom";
import './ChooseRoom.css'


function ChooseRoom(props) {

    const [roomName, setRoomName] = useState("");

 
    let roomCounter = props.user[0].rooms.length>0?props.user[0].rooms[props.user[0].rooms.length-1].id:1;
    
    
    function handleClick(roomId) {
        props.roomId(roomId)
       
    }

    function addRoom(e) {
        setRoomName(e.target.value)
        console.log(roomName); 
    }

    function submit(){
        
        let room = {
            id: ++roomCounter,
            roomName: roomName,
            users: []
        }
        props.newRoom(room);
        
        setRoomName("");
        
    }
    function Test(){
        console.log(props.user[0].rooms)
    }


    return (
        <div className='ChooseRoom'>
            <h4 className='ChooseRoom-title' >Hi {props.user[0].userName}{props.user[0].rooms.length===0?' it seems that you dont have any room..':'  available rooms..'} </h4>
            <input type='text' value={roomName} onChange={addRoom} placeholder='enter room name'></input>
            <button type="button" onClick={submit}>Create Room</button>
            <div className='ChooseRoom-main'>

                {props.user[0].rooms.map((room) => {
                    return (<Link className="ChooseRoom-link" to="/mainScreen" onClick={() => { handleClick(room.id) }} key={room.id}>{room.roomName} </Link>)
                })}

            </div>
            {/* <button onClick={Test}>test</button> */}
           <Link to="/">Log Out </Link>
        </div>

    )
}

export default ChooseRoom