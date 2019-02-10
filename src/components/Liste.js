import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import trads from '../core/trads';
import giftImg from '../resources/list_gift.png';

const styles = () => ({
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
  },
  text: {
    marginBottom: '10px',
    alignSelf: 'stretch',
  },
  textLink: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'black',
  },
  imageContainer: {
    width: '225px',
    alignSelf: 'center',
    marginTop: '10px',
  },
  image: {
    width: '100%',
  },
});

const Liste = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.header}>
      <Typography variant="h2" className={classes.title}>
        {trads('Liste').title}
      </Typography>
    </div>
    <Typography variant="h6" className={classes.text}>
      {trads('Liste').text1}
    </Typography>
    <Typography variant="h6" className={classes.text}>
      {trads('Liste').text2BeforeLink}
      <a
        href="https://www.1001listes.fr/moncompte/vueinvites/numLst/664759/pageName/presentation"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.textLink}
      >
        {trads('Liste').text2Link}
      </a>
      {trads('Liste').text2AfterLink}
    </Typography>
    <a
      href="https://www.1001listes.fr/moncompte/vueinvites/numLst/664759/pageName/presentation"
      target="_blank"
      rel="noopener noreferrer"
      className={classes.imageContainer}
    >
      <img className={classes.image} alt="liste" src={giftImg} />
    </a>
  </div>
);

Liste.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Liste);
