import React, { useState } from "react"
import NavBar from "./NavBar";
import "./Login.css"
import App from "./App"
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [loginFormData, setLoginFormData] = useState({
        password: "",
        username: ""
        });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData({ ...loginFormData, [name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return( <div className="mainContainer">
        <NavBar />
        <div className="titleContainer">
            <div>Login</div>
        </div>
        <br />
        <form onSubmit={handleSubmit}>
            <div className="inputContainer">
                <input
                    type="text"
                    name="username"
                    value={loginFormData.username}
                    className="inputBox"
                    placeholder="Enter username here"
                    onChange={handleInputChange}
                />
            </div>
            <br />
            <div className="inputContainer">
                <input
                    type="text"
                    name="password"
                    value={loginFormData.password}
                    className="inputBox"
                    placeholder="Enter password here"
                    onChange={handleInputChange}
                />
            </div>
            <br />
            <div className="buttonContainer">
                <button type="submit" className="inputButton">Login</button>
            </div>
        </form>
        </div>
    )

  };

export default Login