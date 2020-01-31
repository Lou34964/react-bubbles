import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute.js';

import BubblePage from "./components/BubblePage"

import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Build a PrivateRoute component that will display BubblePage when you're authenticated */}
          <PrivateRoute path="/bubbles-page" component={BubblePage} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;