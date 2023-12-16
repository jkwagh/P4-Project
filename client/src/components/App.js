import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

import NavBar from "./NavBar";

function App() {
  return (

    <div classname='App'>
      <NavBar />
      <Home />
      <Login />
      
    </div>
  )
}

export default App;
