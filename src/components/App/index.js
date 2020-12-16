import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from '../Nav';
import Home from '../Home';
import Career from '../Career';
import Competences from '../Competences';
import Projects from '../Projects';
import Contact from '../Contact';

import './style.scss';

function App() {
  return (
    <div className="app">
      <Nav />
      
      <main className="main">
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/parcours">
            <Career />
          </Route>

          <Route path="/competences">
            <Competences />
          </Route>

          <Route path="/projets">
            <Projects />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
          
        </Switch>
      </main>
    </div>
  );
}

export default App;
