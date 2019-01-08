import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import {
  Adresses,
  Bienvenue,
  Contact,
  Covoiturage,
  EnConstruction,
  Home,
  Logements,
  Menu,
  Presence,
} from './components';
import config from './config';
import headerPicture from './resources/header.png';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    'min-height': '100vh',
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: '100%',
  },
};

const App = ({ classes }) => {
  if (config.siteEnConstruction) {
    return (
      <div className={classes.root}>
        <EnConstruction />
      </div>
    );
  }

  return (
    <Router>
      <div className={classes.root}>
        <Route path="/" exact component={Home} />
        <div className={classes.content} id="app-content">
          <div>
            <img className={classes.image} alt="lenaseb" src={headerPicture} />
          </div>
          <Menu />
          <Route path="/bienvenue" component={Bienvenue} />
          <Route path="/adresses" component={Adresses} />
          <Route path="/logements" component={Logements} />
          <Route path="/contact" component={Contact} />
          <Route path="/covoiturage" component={Covoiturage} />
          <Route path="/presence" component={Presence} />
          <Route path="/jeux" component={EnConstruction} />
        </div>
      </div>
    </Router>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
