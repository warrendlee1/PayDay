import React from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

//pages
import MainPage from "./pages";
import NotFoundPage from "./pages/404";
import UserPage from "./pages/users";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage}></Route>
          <Route exact path="/404" component={NotFoundPage}></Route> 
          <Route exact path="/users" component={UserPage}></Route>
          <Redirect to="/404"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
