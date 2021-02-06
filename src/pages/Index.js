import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import Error from './Error'; 
import Recipe from './Recipe'
import Contact from './Contact'
import Projects from './Projects';
import items from '../dataForProjects';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
         <Route path='/about'>
          <About />
        </Route>
        <Route path='/Recipe'>
          <Recipe />
        </Route>
        <Route path='/Projects'>
          <Projects items = {items}/>
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='*'>
          <Error />
        </Route> 
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
