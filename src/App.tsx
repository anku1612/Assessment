
import {BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Login from "./Page/Login"
import Home from "./Page/Home"
import Todo from "./Page/Todo"
import Inpogress from "./Page/Inprogress"
// import TaskTrackerContext from "./Component/taskContext";
function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Home} />
      {/* <TaskTrackerContext> */}
      <Route exact path="/todo" component={Todo} />
      <Route exact path="/inpogress" component={Inpogress} />
      <Route exact path="/done" component={Inpogress} />
      {/* </TaskTrackerContext> */}
     </Switch>
    </Router>
  );
}

export default App;
