import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AddDragon from '../components/addDragon'

import Home from '../components/home'
import Login from '../components/login'
import DragonDetail from '../components/dragonDetail'
import EditDragon from '../components/editDragon'

import AuthenticateRoute from './AuthenticateRoutes'

const Routes: React.FC = () => (
  <Switch>
    <Route name="Login" exact path="/login" component={Login} />
    <AuthenticateRoute name="Home" exact path="/" component={Home} />
    <AuthenticateRoute name="new" exact path="/new" component={AddDragon} />
    <AuthenticateRoute
      name="detail"
      exact
      path="/detail/:id"
      component={DragonDetail}
    />
    <AuthenticateRoute
      name="edit"
      exact
      path="/edit/:id"
      component={EditDragon}
    />
    <AuthenticateRoute name="notfound" path="*" component={Home} />
  </Switch>
)

export default Routes
