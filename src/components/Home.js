import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';

import { displayAppContent } from '../core/utils/dom';
import LenaSebPic from '../resources/LenaSeb.png';

const styles = (theme) => ({
  root: {
    minHeight: '100vh',
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    margin: '10px',
  },
  link: {
    ...theme.links,
  },
});

class Home extends Component {
  componentDidMount() {
    displayAppContent(false);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.title}>
          <Typography variant="h2" align="center">
            Lénaïc et Sébastien
          </Typography>
          <div>
            <img className={classes.image} alt="lenaseb" src={LenaSebPic} />
          </div>
          <Typography variant="subtitle1">17 août 2019</Typography>
        </div>
        <Link className={classes.link} to="/bienvenue">
          <Button onClick={() => displayAppContent(true)}>Entrer</Button>
        </Link>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
