import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginBottom: '10px',
    alignSelf: 'stretch',
  },
};

const Bienvenue = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant="h2">Bienvenue !</Typography>
    <Typography variant="h6" className={classes.text}>
      Après des semaines d’hésitation, des heures de réflexions et quelques mois de relations: nous
      avons décidé de nous marier !
    </Typography>
    <Typography variant="h6" className={classes.text}>
      Vous avez du recevoir le faire-part, mais si vous avez besoin de plus d’informations, si vous
      l’avez perdu ou si vous êtes digital native … ce site est pour vous !
      <Typography variant="h6" className={classes.text} />
      En attendant de vous voir le 17 aout, bonne journée 😉
    </Typography>
  </div>
);

Bienvenue.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bienvenue);
