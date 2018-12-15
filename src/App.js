import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Bienvenue, EnConstruction, Home, Navbar } from './components';
import config from './config';
import './App.css';

const App = () => {
  if (config.siteEnConstruction) {
    return (
      <div id="app">
        <EnConstruction />
      </div>
    );
  }

  return (
    <Router>
      <div id="app">
        <Navbar />

        <Route path="/" exact component={Home} />
        <Route path="/bienvenue" component={Bienvenue} />
        <Route path="/logement" component={EnConstruction} />
        <Route path="/contact" component={EnConstruction} />
        <Route path="/adresses" component={EnConstruction} />
        <Route path="/test" component={EnConstruction} />
        <Route path="/presence" component={EnConstruction} />
        <Route path="/questions" component={EnConstruction} />
      </div>
    </Router>
  );
};

export default App;
