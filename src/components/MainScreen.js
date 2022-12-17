
import { useEffect } from "react";
import {
    Routes,
    Route
} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Calendar from './Calendar';
import Home from './Home';
import NavBar from './NavBar';


function MainScreen(props) {

    const navigate = useNavigate();
    function setHomeScreen() {
       
        navigate('/mainScreen/home');
    }

    useEffect(() => {setHomeScreen()}, [])

    return (
        <div className="parent">
            <div className="left">
                <NavBar roomName={props.roomName} roomId={props.roomId} roomTodelete={props.delRoom} user={props.user[0].userName}/>

            </div>
            <div className="right">

                <Routes>
                    <Route path="/home" element={<Home roomName={props.roomName} />} />
                    <Route path="/calendar" element={<Calendar />} />
                </Routes>
            </div>
        </div>

    )
}

export default MainScreen;