import React from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt
        className='Tilt br2 shadow-2'
        options={{ max: 55 }}
        style={{
          height: 150,
          width: 150,
          marginLeft: "20px",
          marginTop: "0px",
        }}
      >
        <div className='Tilt-inner'>
          <img
            style={{ paddingTop: "35px" }}
            alt='logo'
            src={brain}
            width='50%'
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
