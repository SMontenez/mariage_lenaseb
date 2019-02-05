import React from 'react';
import PropTypes from 'prop-types';

import { Button, Card, CardContent, CardActions, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import trads from '../core/trads';

const styles = () => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    maxWidth: '100%',
    marginBottom: '30px',
    padding: '20px',
  },
  map: {
    maxWidth: '100%',
    border: '1px solid #999999',
  },
});

const Adresses = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant="h2">{trads('Adresses').title}</Typography>
    <Typography variant="h6">
      {trads('Adresses').description}
    </Typography>
    <Card raised className={classes.card}>
      <CardContent>
        <Typography variant="h6" align="center">
          <strong>{trads('Adresses').church}</strong>
        </Typography>
        <Typography variant="body1">57 Avenue de Paris, 79260 La Crèche</Typography>
        <iframe
          className={classes.map}
          title="egliseLaCrecheLoc"
          width="425"
          height="350"
          frameBorder="0"
          scrolling="no"
          marginHeight="100px"
          marginWidth="0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-0.3053587675094605%2C46.35942752368587%2C-0.29638946056365967%2C46.36334796779477&amp;layer=mapnik&amp;marker=46.361388000155856%2C-0.30087539999999535"
        />
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href="https://www.openstreetmap.org/?mlat=46.36139&amp;mlon=-0.30088#map=18/46.36139/-0.30088"
          target="_blank"
        >
          {trads('Adresses').openOSM}
        </Button>
      </CardActions>
    </Card>
    <Card raised className={classes.card}>
      <CardContent>
        <Typography variant="h6" align="center">
          <strong>{trads('Adresses').castle}</strong>
        </Typography>
        <Typography variant="body1">372 Rue de la Taillée, 79410 Échiré</Typography>
        <iframe
          className={classes.map}
          title="egliseLaCrecheLoc"
          width="425"
          height="350"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-0.4229199886322022%2C46.391396769820524%2C-0.40122628211975103%2C46.39923278770778&amp;layer=mapnik&amp;marker=46.39531491941399%2C-0.41207313537597656"
        />
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href="https://www.openstreetmap.org/?mlat=46.39531&amp;mlon=-0.41207#map=17/46.39531/-0.41207"
          target="_blank"
        >
          {trads('Adresses').openOSM}
        </Button>
      </CardActions>
    </Card>
  </div>
);

Adresses.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Adresses);
