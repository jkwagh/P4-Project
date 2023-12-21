import React, { useState } from "react"
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import App from "./App"


const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [animatedClass, setAnimatedClass] = useState('');
   
const handleSubmit = (e) =>{
        setAnimatedClass('animated-signup');
        
        e.preventDefault();

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username }),
        })
        .then((resp) => resp.json())
        .then((user) => {
            onLogin(user)
        })
    }

    return <div className="mainContainer">
        <NavBar />
        <div className="titleContainer">
            <div>Login</div>
        </div>
        <br />
        <form onSubmit={handleSubmit}>
            <div className="inputContainer">
                <input
                    type="text"
                    value={username}
                    className="inputBox"
                    placeholder="Enter username here"
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <br />
            <div className="inputContainer">
                <input
                    type="text"
                    value={password}
                    className="inputBox"
                    placeholder="Enter password here"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <br />
            <div className="buttonContainer">
                <button type="submit" className="inputButton">Login</button>
            </div>
        </form>
        </div>

  };

export default Login