import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import petlogo from "./pet-logo.svg"
import "../styles/footer.css"
function Footer() {
  return (
    <div className="footer-bod">
      <div className="footer-first">
        <div className="footer-first-1">
          <div className="footer-first-1-1">
            <img src={petlogo} alt="" />
            <h4>ANIMAL SHELTER</h4>
          </div>
          <p>
            One of the best animal shelter places in India. We’re recognized by
            the government. Please take a pledge to take care of these lovely
            pets !
          </p>
          <div className="footer-btn-1">
            <h6>Adopt</h6>
            <AiOutlineArrowRight size={30} />
          </div>
        </div>
        <div className="footer-first-2">
        <h4>GET IN TOUCH</h4>
        <div className="footer-location">
          <ImLocation size={30} />
          <p>
            llesfnee cnu efoin eoifn oewifnewo inf sdc csdcneno ie woiwemfwokm
            fwe w ecen cloenwo we - 355233
          </p>
        </div>
        <div className="footer-mail">
          <AiOutlineMail size={30} />
          <p>cisubdcusb@gmail.com</p>
        </div>
        <h4>FOLLOW US</h4>
        <div className="soc-sec" style={{ color: "gray" }}>
          <AiFillInstagram size={30} />
          <AiFillLinkedin size={30} />
          <BsTwitter size={30} />
        </div>
        </div>
        <div className="footer-first-3">
          <h4>QUICK LINKS</h4>
          <p>Home</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="footer-second">
       
      </div>
      <div className="footer-third">
        <div className="footer-third-left">
        Copyright ©2023. Animal Shelter
        </div>
        <div className="footer-right-right">
         <h6>Privacy Policy</h6>
         <h6>Terms of Service</h6>
         <h6>Cookies Settings</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
