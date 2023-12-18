import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import NavBar from "./NavBar";
import Signup from "./Signup";
import Admin from "./Admin";
import Cart from "./Cart";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);

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

  // const newCustomer = (customer) => {
  //   fetch('/customers', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify()
  //   })
  //   .then((resp) => resp.json())
  //   .then((data) => console.log(data, user))
  // }

  return (
    <div classname='App'>
      <Home />
      <Login loggedIn={loggedIn} onLogin={handleLogin}/>
      <Signup newCustomer={newCustomer}/>
      <Admin />
    </div>
  )
}

export default App;
