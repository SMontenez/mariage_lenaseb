import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Countdown from './Countdown';

const styles = (theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '50px',
  },
  title: {
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '0px',
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '10%',
    },
  },
  text: {
    marginBottom: '10px',
    alignSelf: 'stretch',
  },
});

const Bienvenue = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.header}>
      <Typography variant="h2" className={classes.title}>
        Bienvenue !
      </Typography>
      <Countdown />
    </div>
    <Typography variant="h6" className={classes.text}>
      Après des semaines d’hésitation, des heures de réflexions et quelques mois de relations: nous
      avons décidé de nous marier !
    </Typography>
    <Typography variant="h6" className={classes.text}>
      Vous avez du recevoir le faire-part, mais si vous avez besoin de plus d’informations, si vous
      l’avez perdu ou si vous êtes digital native … ce site est pour vous !
    </Typography>
    <Typography variant="h6" className={classes.text}>
      En attendant de vous voir le 17 aout, bonne journée ;-)
    </Typography>
  </div>
);

Bienvenue.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bienvenue);
