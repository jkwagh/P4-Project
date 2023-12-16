import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import NavBar from "./NavBar";
import Order from "./Order";



function App() {
  return (

    <div classname='App'>
      <NavBar />
      <Home />
      <Cart />
      <Order />

    </div>
  )
}

export default App;
