import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StarfieldAnimation from 'react-starfield-animation'

import Nav from '../../containers/Nav';
import Home from '../Home';
import Career from '../../containers/Career';
import Skills from '../../containers/Skills';
import Projects from '../Projects';
import Contact from '../Contact';
import Error from '../Error';

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
        className="starfield-animation"
      />

      {/* ========= ONLY SHOWED ON MOBILE =========== */}
      <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        numParticles= {200}
        className="starfield-animation-mobile"
      />
        
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/parcours" component={Career} />
          <Route exact path="/competences" component={Skills}/>
          <Route exact path="/projets" component={Projects}/>
          <Route exact path="/contact" component={Contact}/>

          <Route component={Error} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
