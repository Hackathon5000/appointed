import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
// components
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
          <Route path="/" exactComponent={Home} />
          <Route path="/information" exactComponent={Information} />
          <Route path="/about" exactComponent={About} />
          <Route path="/distanceInfo" exactComponent={DistanceInfo} />
          <Route path="/maskinfo" exactComponent={MaskInfo} />
          <Route path="/vaccineform" exactComponent={VaccineForm} />
        </Switch>
      </main>
      <footer>Hello from footer</footer>
    </div>
  );
}

export default App;
