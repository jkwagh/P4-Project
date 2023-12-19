import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import NavBar from "./NavBar";
import Signup from "./Signup";
import Admin from "./Admin";


function App() {
  const [customers, setCustomers] = useState([])
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({});

  // useEffect(() => {
  //   fetch("/check_session")
  //   .then((resp) => {
  //     if (resp.ok) {
  //       resp.json().then((user) => setUser(user))
  //     }
  //   })
  // }, []);

  const handleLogin = (user) => {
    console.log(user)
  }

  const addCustomer = (newCustomer) => {

    fetch('/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCustomer)
    })
    .then((resp) => resp.json())
    .then((data) => setCustomers([...customers, data]))
  }

  
  return (
    <div classname='App'>
      
      <Home />
      
      <Login loggedIn={loggedIn} onLogin={handleLogin}/>
      <Signup addCustomer={addCustomer}/>
      <Admin />
    </div>
  )
}

export default App;
