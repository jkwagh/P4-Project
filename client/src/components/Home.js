import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Home.css";
import NavBar from "./NavBar";
import Login from "./Login";

const Home = (props) => {
  const { loggedIn, email } = props;
  const navigate = useNavigate();

  const onButtonClick = () => {
    // Use the navigate function to navigate to the Login page
    navigate("/login");
  };

  return (
    <div className="mainContainer">
      
      <div className={"titleContainer"}>
        <div>Welcome!</div>
      </div>
      <div>This is the home page.</div>
      <div className={"buttonContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={loggedIn ? "Log out" : "Log in"}
        />
        {loggedIn ? <div>Your email address is {email}</div> : <div />}
      </div>
    </div>
  );
};

export default Home;
