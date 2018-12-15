import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { EnConstruction, Home, LesEnvirons, Navbar, SeLoger } from './components';
import config from './config';
import './App.css';

const App = () => {
  if (config.siteEnConstruction) {
    return <EnConstruction />;
  }

  return (
    <Router>
      <div>
        <Navbar />

        <Route path="/" exact component={Home} />
        <Route path="/se_loger/" component={SeLoger} />
        <Route path="/les_environs/" component={LesEnvirons} />
      </div>
    </Router>
  );
};

export default App;
