import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Myleave from "./components/Myleave";
import ApplyLeave from "./components/ApplyLeave";
import Addsalary from "./components/Addsalary";
import Managesalary from "./components/Managesalary";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/Applyleave">
            <ApplyLeave/>
          </Route>
          <Route exact path="/leavehistory">
            <Myleave/>
          </Route>
          <Route exact path="/addsalary">
            <Addsalary/>
          </Route>
          <Route exact path="/managesalary">
            <Managesalary/>
          </Route>
          <Route exact path="/">
            <Dashboard />
          </Route>
        </Switch>
        
      </Router>
    </>
  );
}

export default App;
