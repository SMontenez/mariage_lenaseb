import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {
  Addresses,
  Bienvenue,
  Contact,
  EnConstruction,
  Home,
  Logements,
  Navbar,
} from './components';
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
        <Route path="/addresses" component={Addresses} />
        <Route path="/Logements" component={Logements} />
        <Route path="/contact" component={Contact} />
        <Route path="/test" component={EnConstruction} />
        <Route path="/presence" component={EnConstruction} />
        <Route path="/questions" component={EnConstruction} />
      </div>
    </Router>
  );
};

export default App;
