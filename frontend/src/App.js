import "./App.scss";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Feed from "./components/Feed/Feed";
import UserProfile from "./components/UserProfile/UserProfile";
import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inspect from "./components/Inspect/Inspect"

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/feed" exact component={Feed} />
        <Route path="/login" exact component={Login} />
        <Route path="/userprofile" exact component={UserProfile} />
        <Route path="/posts/inspect/:id" exact component={Inspect} />
      </Switch>
    </Router>
  );
}

export default App;
