import React, { useState } from "react"
import NavBar from "./NavBar";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./Login.css"
import App from "./App"


const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login = useOutletContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin()
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