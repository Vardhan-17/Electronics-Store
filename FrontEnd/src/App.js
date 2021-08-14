import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Home from "./Components/Main/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
