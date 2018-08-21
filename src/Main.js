import React from "react";
import { Switch, Route } from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./Main.css";

import Landing from "./components/pages/Landing.js";
import About from "./components/pages/About.js";

const Main = () => (
  <Route
    render={({ location }) => (
      <TransitionGroup className="main">
        <CSSTransition
          key={location.key}
          classNames='fade'
          timeout={300}
        >
          <Switch location={location}>
            <Route exact path="/" component={Landing} />
            <Route path="/o-mnie" component={About} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )}
  />
);

export default Main;
