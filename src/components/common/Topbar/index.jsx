import React from 'react';
import Logo from "../../../assets/logo.png";
import Hackathon from "../../../assets/hackathon.png";
import TeamMates from "../../../assets/teamMates.png";

import user from "../../../assets/user.png";
 
import {
    AiOutlineHome,
    AiOutlineUserSwitch,
    AiOutlineSearch,
    AiOutlineMessage,
    AiOutlineBell,
  } from "react-icons/ai";
  import { BsBriefcase } from "react-icons/bs";
  import { useNavigate } from 'react-router-dom';
import './index.scss';
  
export default function Topbar() {
  let navigate = useNavigate();
  const goToRoute = (route) => {
    navigate(route);
  };
  return (
    <div className='topbar-main'>
     <img className='topbar-logo' src={Logo} alt="HackBuddy" />
     <div className="react-icons">
        <AiOutlineSearch title='search' size= {30} className='react-icon' />
        <AiOutlineHome title='Home' size= {30} className='react-icon' onClick={()=> goToRoute("/home")} />
        <img src={TeamMates} alt="Team-Mates" className="react-icon" title='Team Mates' height={32} width={28} onClick={()=> goToRoute("/teamMates")}/>
        <img src={Hackathon} alt="Team-Mates" className="react-icon" title='Hackathons' height={32} width={28} onClick={()=> goToRoute("/hackathons")}/>
        <AiOutlineMessage title='Message' size= {30} className='react-icon' onClick={()=> goToRoute("/message")} />
        <AiOutlineBell title='Notifications' size= {30} className='react-icon' onClick={()=> goToRoute("/notifications")} />

     </div>
     <img src= {user} alt="user" className="user-logo" />
    </div>
  )
}
