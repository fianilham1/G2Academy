import React, { Component } from "react";
// import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Todo from "./Todo";
import Login from "./Login";
import Dashboard from './Dashboard';

const PrivateRoute = ({ isLoggedIn, ...props }) =>
  isLoggedIn
    ? <Route { ...props } />
    : <Redirect to="/login" />

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loggedIn: true // user is not logged in
         }
    }
    render() { 
        return ( 
            <div className="wrapper">
            <h1>Application</h1>
            <BrowserRouter>
            <Switch>
                <PrivateRoute isLoggedIn={ this.state.loggedIn } path="/home" component={Todo} />
                <Route path="/login" component={Login}/>
                </Switch>
            </BrowserRouter>
          </div>
         );
    }
}
 
export default App;