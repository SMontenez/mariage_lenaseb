import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home, LesEnvirons, Navbar, SeLoger } from './components';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Navbar />

      <Route path='/' exact component={Home} />
      <Route path='/se_loger/' component={SeLoger} />
      <Route path='/les_environs/' component={LesEnvirons} />
    </div>
  </Router>
);

export default App;
