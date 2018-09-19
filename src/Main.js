import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import Landing from "./components/pages/Landing.js";
import About from "./components/pages/About.js";
import Contact from "./components/pages/Contact.js";
import PersonalTraining from "./components/pages/PersonalTraining";
import MotoricPreparation from "./components/pages/MotoricPreparation";
import Menu from './components/Menu';

import './App.scss';

const Main = withRouter(({location}) =>
  <div className="main">
    <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames='fade'
              timeout={300}
            >
              <Switch location={location}>
                <Route exact path='/' component={Landing} />
                <Route exact path='/o-mnie' component={About} />
                <Route exact path='/kontakt' component={Contact} />
                <Route exact path='/treningi-personalne' component={PersonalTraining} />
                <Route exact path='/przygotowanie-motoryczne-sportowcow' component={MotoricPreparation} />
                <Route exact path='/menu' component={Menu} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
  </div>
)

export default Main;
