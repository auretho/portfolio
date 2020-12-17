import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StarfieldAnimation from 'react-starfield-animation'


import Nav from '../Nav';
import Home from '../Home';
import Career from '../Career';
import Skills from '../Skills';
import Projects from '../Projects';
import Contact from '../Contact';

import './style.scss';

function App() {
  return (
    <div className="app">
      <Nav />
      
      <main className="main">

      <StarfieldAnimation
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
        }}
        numParticles= {2000}
      />
        
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/parcours">
            <Career />
          </Route>

          <Route path="/competences">
            <Skills />
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
