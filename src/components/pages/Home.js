import React from "react";
// import { Button, ButtonToolbar } from "react-bootstrap";
import Aux from "../../HOC/Aux";


// import photo from "../../assets/images/picture.jpg";
import "../pages/Temp.css";
import "../pages/booking.css";
import Review from "./Review";
import Booking from "../pages/Booking";
 import "../../assets/CSS/globalstyles.css";
 import ReactPlayer from 'react-player';
 
// import "../../assets/CSS/style.css";

const home = () => (
  <Aux>

      <div className='display'>
            <ReactPlayer
          
            url= 'video4.mp4'
            width='100%'
            controls = {true}
            loop={true}
            playing={true}
            />
        </div>
        <div className='display1'>
            <ReactPlayer
          
            url= 'video5.mp4'
            width='100%'
            controls = {true}
            loop={true}
            playing={true}
            />
        </div>
        {/* <div className="canvas display1">
        <img
          src={photo}
          alt="Home"
          style={{
            width: "100vw",
            height: "300px"
          }}
        />
      </div> */}
      {/* <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          marginTop:"50px"
        }}
        className="aboutTintTextPosition w-75 display1" 
       
      >
        <h1 className="text-light text-align font-weight-bolder heading__text globalFontFamily text-center align">
          Book your Property now with Us.   
        </h1>
      </div> */}
      {/* <div className="container mobileHeightFix">
          
         
        </div> */}
        <Booking />
        <Review />
    </Aux>

);

export default home;
