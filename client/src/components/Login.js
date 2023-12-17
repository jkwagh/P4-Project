import React, { useState } from "react"
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import "./Login.css"


const Login = ({ loggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();
  
    const onButtonClick = () => {
        setUsernameError("")
        setPasswordError("")

        if ("" === username) {
            setUsernameError("Please enter your name")
            return
        }

        if ("" === password) {
            setPasswordError("Please enter a password")
            return
        }
        
        if (password.length < 7) {
            setPasswordError("Password must be 8 characters or longer")
        }
    }

    return <div className="mainContainer">
        <NavBar />
        <div className="titleContainer">
            <div>Login</div>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={username}
                placeholder="Enter your name here"
                onChange={ev => setUsername(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{usernameError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={password}
                placeholder="Enter your password here"
                onChange={ev => setPassword(ev.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Log in"} />
        </div>
        </div>

    // const handleLogin = async () => {
    //   try {
    //     const response = await fetch('/customers', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         username,
    //         password,
    //       }),
    //     });
  
    //     if (!response.ok) {
    //       throw new Error('Login failed');
    //     }
    //     const data = await response.json();
    //     console.log('Login successful:', data);
    //   } catch (error) {
    //     console.error('Login failed:', error.message);
    //   }
    // };
  
    // return (
    //   <div>
    //     <NavBar />
    //     <h2>Login</h2>
    //     <form>
    //       <label>
    //         Username:
    //         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
    //       </label>
    //       <br />
    //       <label>
    //         Password:
    //         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //       </label>
    //       <br />
    //       <button type="button" onClick={handleLogin}>
    //         Login
    //       </button>
    //     </form>
    //   </div>
    // );
  };

export default Login