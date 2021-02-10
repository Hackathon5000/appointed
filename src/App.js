import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./components/home/home";
import Information from "./components/information/information";
import DistanceInfo from "./components/distanceInfo/distanceInfo";
import MaskInfo from "./components/maskInfo/maskInfo";
import Nav from "./components/Nav/nav";
import About from "./components/about/about";
import VaccineForm from "./components/Form/VaccineForm";

function App() {
  return (
    <div className="App">
      <header>
        <Nav></Nav>
      </header>
      <main>
        Hello from main
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/information">
            <Information />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route>
            <DistanceInfo exact path="/distanceInfo" />
          </Route>
          <Route exact path="/maskinfo">
            <MaskInfo />
          </Route>
          <Route exact path="/maskinfo">
            <MaskInfo />
          </Route>
          <Route exact path="/vaccineform">
            <VaccineForm />
          </Route>
        </Switch>
      </main>
      <footer>Hello from footer</footer>
    </div>
  );
}

export default App;
