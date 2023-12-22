import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Admin from "./Admin";
import './Login.css';


const Login = ({ handleLogin, fetchResult, loginFormData, setLoginFormData}) => {
  
  const [animatedClass, setAnimatedClass] = useState('animated-signin');
  const navigate = useNavigate();

  useEffect(() => {
    if (fetchResult === true) {
      navigate("/order");
    }
  }, [fetchResult]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
    setAnimatedClass('animated-signin');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(loginFormData);
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    navigate('/signup')
  }

  const adminClick = (e) => {
    e.preventDefault();
    navigate('/admin')
  }

  return (
    <div className={`form-container sign-in ${animatedClass}`}>
      <form onSubmit={handleSubmit}>
        <h2 id ="title">login</h2>
        <div className="form-group">
          <input
            type="text"
            name="username"
            value={loginFormData.username}
            onChange={handleInputChange}
            required
          />
          <i className="fas fa-user"></i>
          <label htmlFor="username">username</label>
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            value={loginFormData.password}
            onChange={handleInputChange}
            required
          />
          <i className="fas fa-lock"></i>
          <label htmlFor="password">password</label>
        </div>
        <div className="forgot-pass">
          <a href="">forgot password?</a>
        </div>
        <button type="submit" className="btn">
          login
        </button>
        <div className="link">
          <p>
            Don't have an account?
            <a href="./Signup.js" className="signup-link" onClick={handleOnClick}>
              {' '}
              sign up
            </a>
          </p>
        </div>
      </form>
      <div>
        <button onClick={adminClick} className="btn">Admin</button>
      </div>
    </div>
  );
};

export default Login;
