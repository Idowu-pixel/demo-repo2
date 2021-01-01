import React from 'react';

import {Switch, Route} from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import Carsales from "./Carsales"
import Carvalue from "./Carvalue"
import Carrepairs from "./Carrepairs"
import Vision from './Vision'
import Image from "./Image"
import Features from "./Features"
import Newnav from "./Newnav"
import "./shadow.css"




function App() {
  return (

<div className="">
  <Navbar />
  {/* <Newnav />  */}
  <Vision />
  <Switch>
    <Route exact path="/">
      <Home />
      <Image />
    </Route>
    <Route path="/car-sales">
      <Carsales />
    </Route>
    <Route path="/car-value">
      <Carvalue />
    </Route>
    <Route path="/car-repairs">
      <Carrepairs />
    </Route>
  </Switch>

    </div>
  )
}

export default App;
