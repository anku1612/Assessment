import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";

export default function Store() {
  return (
    <div className="container-fluid">
      <Router>
        <header className="bg-dark text-white">
          <h1>Task Tracker</h1>
        </header>
        <section>
          <div className="row">
            <div className="cal-3">
              <nav>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/home" className="btn btn-dark mb-2 w-100">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/to-do" className="btn btn-dark mb-2 w-100">
                      To Do
                    </Link>
                  </li>
                  <li>
                    <Link to="/in-Progress" className="btn btn-dark mb-2 w-100">
                      In Progress
                    </Link>
                  </li>
                  <li>
                    <Link to="/done" className="btn btn-dark mb-2 w-100">
                      Done
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="cal-9">
              <Switch>
                <Route exact path="/home">
                  {/* <home /> */}
                </Route>
                <Route path="/">
                  <Redirect to="/" />
                </Route>
                <Route path="/to-do">{/* <to-do /> */}</Route>
                <Route exact path="/in-Progress">
                  {/* <in-Progress /> */}
                </Route>
                <Route exact path="/done">
                  {/* <done /> */}
                </Route>
              </Switch>
            </div>
          </div>
        </section>
      </Router>
    </div>
  );
}
