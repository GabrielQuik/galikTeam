import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing.js'
import About from './components/About.js'

const App = () => (
  <Switch>
    <Route exact path='/' component={Landing}/>
    <Route path='/o-mnie' component={About}/>
  </Switch>
);





export default App;
