import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Home.css";
import NavBar from "./NavBar";
import Login from "./Login";

const Home = (props) => {
  const { loggedIn, email } = props;
  const navigate = useNavigate();

  const onLoginClick = () => {
    // Use the navigate function to navigate to the Login page
    navigate("/login");
  };

  const onSignupClick = () => {
    // Use the navigate function to navigate to the Login page
    navigate("/Signup");
  };

  return (
    
    <div className="mainContainer">
      <NavBar />
      <div className={"titleContainer"}>
        <div>Welcome!</div>
      </div>
      <div>This is the home page.</div>
      <div className={"buttonContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onLoginClick}
          value={loggedIn ? "Log out" : "Log in"}
        />
        {loggedIn ? <div>Your email address is {email}</div> : <div />}
        <input
          className={"inputButton"}
          type="button"
          onClick={onSignupClick}
          value="Signup"
        />
        
      </div>
    </div>
  );
};

export default Home;
