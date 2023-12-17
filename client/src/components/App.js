import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

import NavBar from "./NavBar";
import Signup from "./Signup";
import Admin from "./Admin";

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [userName, setUserName] = useState("")


  return (
    <div classname='App'>
      <NavBar />
      <Home />
      <Login element={<Login loggedIn={loggedIn}/>}/>
      <Signup />
      <Admin />

    </div>
  )
}

export default App;
