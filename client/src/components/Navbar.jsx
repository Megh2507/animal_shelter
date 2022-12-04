import React from 'react'
import {AiFillInstagram} from "react-icons/ai"
import {BsTwitter} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"
import "../styles/navbar.css"
import image from "./pet-logo.svg"
function Navbar() {
  return (
   <div className="nav-bod">
    <div className="nav-first">
        <img src={image} alt="" />
        <h3>ANIMAL SHELTER</h3>
    </div>
    <div className="nav-second">
        <h4 style={{fontSize:"20px"}} className='home'>Home</h4>
        <h4 style={{color:"grey",fontSize:"20px"}}>Contact Us</h4>
    </div>
    <div className="nav-third">
     
        <AiFillLinkedin size={25}/>
        <BsTwitter size={25}/>
        <AiFillInstagram size={25}/>
        
    </div>
   </div>
  )
}

export default Navbar