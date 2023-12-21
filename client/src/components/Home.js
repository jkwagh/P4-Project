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
    <div>
      
   <div className="navBar">
      <NavBar />
   </div>
    <div className="mainContainer1">
      
      
      


      
      
    </div>

    </div>
 
  );
};

export default Home;
