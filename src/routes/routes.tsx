import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AddDragon from '../components/addDragon'

import Home from '../components/home'
import Login from '../components/login'

const Routes: React.FC = () => (
  <Switch>
    <Route name="Login" exact path="/login" component={Login} />
    <Route name="Home" exact path="/" component={Home} />
    <Route name="new" exact path="/new" component={AddDragon} />
  </Switch>
)

export default Routes
