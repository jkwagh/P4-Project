import React, { useEffect, useState } from "react"
import NavBar from "./NavBar";

import "./Signup.css";
import App from "./App"
<<<<<<< HEAD



const Login = ({ handleLogin, fetchResult, loginFormData, setLoginFormData }) => {
    const navigate = useNavigate()
    useEffect(() => {
        if (fetchResult === true) {
                    navigate('/order')
            }
    }, [fetchResult])
    
    // console.log(fetchResult)

    
    // const [animatedClass, setAnimatedClass] = useState('');
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData({ ...loginFormData, [name]: value})
    }
    const handleSubmit = (e) =>{
        // setAnimatedClass('animated-signup');
=======
import { useNavigate } from "react-router-dom";
import "./Signup.css"


const Login = ({ handleLogin }) => {
    const [animatedClass, setAnimatedClass] = useState('');
    const [loginFormData, setLoginFormData] = useState({
        password: "",
        username: ""
        
        });
    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData({ ...loginFormData, [name]: value})
        setAnimatedClass('animated-signup');
    }


   
const handleSubmit = (e) =>{
        setAnimatedClass('animated-signup');
        
>>>>>>> origin/main
        e.preventDefault();
        handleLogin(loginFormData)
        console.log(fetchResult)    
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