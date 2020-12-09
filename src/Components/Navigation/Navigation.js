import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "10px",
        }}
      >
        <p
          onClick={() => onRouteChange("signout")}
          className='f3 link dim black underline pa3 pointer'
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "10px",
        }}
      >
        <p
          onClick={() => onRouteChange("signin")}
          className='f3 link dim black underline pa3 pointer'
          style={{ marginRight: "15px", textDecoration: "underline" }}
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className='f3 link dim black underline pa3 pointer'
          style={{ marginRight: "15px", textDecoration: "underline" }}
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
