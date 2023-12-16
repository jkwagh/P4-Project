import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import NavBar from "./NavBar";
import Login from "./Login";

const Home = (props) => {
    const {loggedIn, email} = props

    const onButtonClick = () => {
        <NavLink to="/Login" className={Login}>Login</NavLink>
    }

    return <div className="mainContainer">
        <NavBar />
        <div className={"titleContainer"}>
            <div>Welcome!</div>
        </div>
        <div>
            This is the home page.
        </div>
        <div className={"buttonContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={loggedIn ? "Log out" : "Log in"} />
            {(loggedIn ? <div>
                Your email address is {email}
            </div> : <div/>)}
        </div>
        
        </div>

}


export default Home;