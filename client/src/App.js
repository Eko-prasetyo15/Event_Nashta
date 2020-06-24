import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Home from "./components/Home";
import Form from "./containers/Form";
import Dashboard from "./containers/Dashboard";

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={Form} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}
