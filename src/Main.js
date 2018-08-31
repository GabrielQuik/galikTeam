import React from "react";
import { Switch, Route } from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./Main.css";

import Landing from "./components/pages/Landing.js";
import About from "./components/pages/About.js";
import Contact from "./components/pages/Contact.js";
import PersonalTraining from "./components/pages/PersonalTraining";
import MotoricPreparation from "./components/pages/MotoricPreparation";
import Menu from './components/Menu';

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
            <Route path='/kontakt' component={Contact} />
            <Route path='/treningi-personalne' component={PersonalTraining} />
            <Route path='/przygotowanie-motoryczne-sportowcow' component={MotoricPreparation} />
            <Route path='/menu' component={Menu} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )}
  />
);

export default Main;
