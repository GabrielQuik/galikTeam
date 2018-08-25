import React from "react";
import { Switch, Route } from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./Main.css";

import Landing from "./components/pages/Landing.js";
import About from "./components/pages/About.js";
import PersonalTraining from "./components/pages/PersonalTraining";
import MotoricPreparation from "./components/pages/MotoricPreparation";

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
            <Route exact path='/' component={Landing} />
            <Route path='/o-mnie' component={About} />
            <Route path='/treningi-personalne' component={PersonalTraining} />
            <Route path='/przygotowanie-motoryczne-sportowcow' component={MotoricPreparation} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )}
  />
);

export default Main;
