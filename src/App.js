import React, { Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import './App.css';
import Navbar from './components/layouts/Navbar'
import User from './components/users/User'
import Alert from './components/layouts/Alert'
import About from './components/pages/About'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'

const App  = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <Fragment>
            <Navbar />
            <div className= "container">
              <Alert />
              <Switch>
                <Route exact path= "/" component = {Home} />
                <Route exact path= "/about" component= {About} />
                <Route exact path= "/user/:login" render= {props => (
                  <User {...props} />
                )} />
                <Route component= {NotFound} />
              </Switch>
            </div>      
          </Fragment> 
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
