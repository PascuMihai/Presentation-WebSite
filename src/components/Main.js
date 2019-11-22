import React, { Component } from "react";
import LandingPage from "./LandingPage";
import { Switch, Route } from "react-router-dom";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import CV from "../components/CV";

export class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/CV" component={CV} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Projects" component={Projects} />
      </Switch>
    );
  }
}

export default Main;
