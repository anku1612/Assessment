import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Page/Login"
import Home from "./Page/Home"
import Todo from "./Page/Todo"
import Inpogress from "./Page/Inprogress"
import TaskTrackerContext from "./Component/taskContext";
function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <TaskTrackerContext>
      <Route path="/todo" component={Todo} />
      <Route path="/inpogress" component={Inpogress} />
      </TaskTrackerContext>
    </Router>
  );
}

export default App;
