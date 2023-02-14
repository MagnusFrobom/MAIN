import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Header from "./components/Header";
import Login from "./components/Loginr";


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

useEffect(() => {
  // Runs once.

  auth.onAuthStateChanged((authUser) => {
    console.log("THE USER IS >>> ", authUser);

    if (authUser) {
      // User login

      dispatch({
        type: "SET_USER",
        user: authUser,
      });
    } else {
      // user logged out
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  });
}, []);
export default App;