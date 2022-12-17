import React, { useState } from 'react';
import helper from './functions.js/Helper.js'
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import MainScreen from './components/MainScreen';
import ChooseRoom from './components/ChooseRoom';


function App() {
  const [testUserRooms, setTestUserRooms] = useState([]);
  const [roomName, setRoomName] = useState("");
  const [roomId, setRoomId] = useState("")
  const room = [{
    id: 1,
    roomName: "room 1",
    users: []
  },
  {
    id: 2,
    roomName: "room 2",
    users: []
  },
  {
    id: 3,
    roomName: "room 3",
    users: []
  },]
  const users = [{
    id: "1",
    userName: "ron",
    fName: "ron",
    lName: "n",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUTERqgy4thUsVl5I7n0RRg8Z-iZzknwVpObWDBCPQHKuKFZc3RhYgwJtcppu9kJlLiQM&usqp=CAU',
    isAdmin: false,
    rooms: testUserRooms
  },
  {
    id: "2",
    userName: "ben",
    fName: "ben",
    lName: "g",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVtcLGq8DVkXyj9uYLyqQPUqOP6pGytvVlWA&usqp=CAU',
    isAdmin: false,
    rooms: []
  },
  {
    id: "3",
    userName: "dor",
    fName: "dor",
    lName: "g",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd92bDHMgq2cqA343bCfHUbCf-B8eE7rjXGw&usqp=CAU',
    isAdmin: false,
    rooms: []
  },
  ];




  function setMyRoomId(id) {
    setRoomId(id)
  }

  function getRoom(id) {

    let myRoom = users[0].rooms.find((room) => room.id === id)

    setRoomName(myRoom.roomName)
    setRoomId(id)

    return myRoom



  }



  function updateRoom(newRoom) {
    setTestUserRooms(() => {
      return ([...testUserRooms, newRoom])
    })
  }

  function deleteRoom() {
    console.log("room to delete: " + roomId)
    let x = testUserRooms.filter(room => room.id !== roomId)
    setTestUserRooms(x);
  }





  return (
    <div>
      <Routes>
        <Route path="/" element=
          {<ChooseRoom
            user={users}
            setMyRoomId={setMyRoomId}
            roomId={getRoom}
            newRoom={updateRoom}

          />} />
        <Route path="/mainScreen/*" element={<MainScreen roomId={getRoom} roomName={roomName} delRoom={deleteRoom} user={users} />} />
      </Routes>

    </div>


  );
}

export default App;
