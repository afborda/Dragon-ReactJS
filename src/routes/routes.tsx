import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AddDragon from '../components/addDragon'

import Home from '../components/home'
import Login from '../components/login'
import DragonDetail from '../components/dragonDetail'
import EditDragon from '../components/editDragon'

const Routes: React.FC = () => (
  <Switch>
    <Route name="Login" exact path="/login" component={Login} />
    <Route name="Home" exact path="/" component={Home} />
    <Route name="new" exact path="/new" component={AddDragon} />
    <Route name="detail" exact path="/detail/:id" component={DragonDetail} />
    <Route name="edit" exact path="/edit/:id" component={EditDragon} />
  </Switch>
)

export default Routes
