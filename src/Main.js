import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Landing from './components/pages/Landing.js'
import About from './components/pages/About.js'

const Main = () => (
  <Switch>
    <Route exact path='/' component={Landing}/>
    <Route path='/o-mnie' component={About}/>
  </Switch>
)

export default Main