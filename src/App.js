import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./components/home/home";
import Information from "./components/information/information";
import DistanceInfo from "./components/distanceInfo/distanceInfo";
import MaskInfo from "./components/maskInfo/maskInfo";
import Nav from "./components/Nav/nav";
import About from "./components/about/about";
import { Form, Input } from "semantic-ui-react";
import DatePicker from "react-datepicker";

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
        </Switch>
        <Form>
          <Form.Field required>
            <label> First Name </label> <Input placeholder="Legal Name" />
          </Form.Field>{" "}
          <Form.Field required>
            <label> Last Name </label> <Input placeholder="Legal Name" />
          </Form.Field>{" "}
          <Form.Field required>
            <label> Email </label> <Input placeholder="Email" />
          </Form.Field>{" "}
          <Form.Field required>
            <label> Date of Birth </label> <DatePicker />
          </Form.Field>
        </Form>
      </main>
      <footer>Hello from footer</footer>
    </div>
  );
}

export default App;
