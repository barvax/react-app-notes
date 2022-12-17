import { useState } from "react";
import { Link } from "react-router-dom";
import './NavBar.css'







function NavBar(props) {

    const [isShowPanel, setIsShowFanel] = useState(false);
    function z() {
        setIsShowFanel(true)
    }
    function copyToClipboard() {
        const name = props.roomName;
        
        navigator.clipboard.writeText("you have been invited to join the room by "+(props.user)+" use this key to join in the lobby: "+name);
       

    }

    function deleteRoom() {

        props.roomTodelete(props.roomId)
    }
    return (
        <div>
            <nav className="navBar">
                <ul>
                    <li><Link className="link" to="/mainScreen/home" >Home</Link></li>
                    <li> <Link className="link" to="/mainScreen/calendar" >Calendar</Link></li>
                    <li> <Link className="link" to="/mainScreen/Analytics" >Analytics</Link></li>
                    <li> <Link className="link" to="/mainScreen/tasks" >Tasks</Link></li>
                    <li> <Link className="link" to="/mainScreen/newTask" >Add New Task</Link></li>
                </ul>


            </nav>

            <nav className="navBar">
                <ul>
                    <li><Link className="link" onClick={z}>Settings</Link></li>
                    <li> <Link className="link" to="/" >Back to lobby</Link></li>

                </ul>


            </nav>
            <div className={`NavBar-delete-screen ${!isShowPanel ? 'hide' : ''}`} >
                <Link className="link" to="/" onClick={deleteRoom} >Delete Room</Link>
                <button onClick={copyToClipboard}>Invite User</button>
            </div>
        </div>


    )
}

export default NavBar