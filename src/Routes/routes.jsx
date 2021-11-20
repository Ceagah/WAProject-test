import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Confirmation from '../screens/Confirmation'
import Main from '../screens/Main'
import Questions from '../screens/Questions'
import Report from '../screens/Report'


export default function Routes() {
  return (
    <Router> 
      <Switch>
        <Route path="/confirmation">
          <Confirmation />
        </Route>
        <Route path="/">
          <Main />
        </Route>
        <Route path="/questions">
          <Questions />
        </Route>
        <Route path="/report">
          <Report />
        </Route>
      </Switch>
    </Router>
  )
}
