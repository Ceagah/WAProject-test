import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Main from '../screens/Main'
import Confirmation from '../screens/Confirmation'
import Questions from '../screens/Questions'
import Reports from '../screens/Reports'


export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/confirmation" component={Confirmation} />
          <Route
            exact
            path="/questions"
            component={Questions}
          />
          <Route
            exact
            path="/reports"
            component={Reports}
          />
      </Switch>
    </BrowserRouter>
  )
}
