import './App.css';
import './Component.css';
import React from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = (props) => {
  return (
    <div>
      <Router>
        <Navbar title="Redux" />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;