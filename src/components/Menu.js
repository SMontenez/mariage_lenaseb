import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingBottom: '20px',
    marginTop: '10px',
    marginBottom: '50px',
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },
  link: {
    ...theme.links,
  },
});

const Menu = ({ classes }) => (
  <div className={classes.root}>
    <Link to="/bienvenue" className={classes.link}>
      <Button>bienvenue</Button>
    </Link>
    <Link to="/adresses" className={classes.link}>
      <Button>adresses</Button>
    </Link>
    <Link to="/logements" className={classes.link}>
      <Button>logements</Button>
    </Link>
    <Link to="/contact" className={classes.link}>
      <Button>contact</Button>
    </Link>
    <Link to="/covoiturage" className={classes.link}>
      <Button>covoiturage</Button>
    </Link>
    <Link to="/presence" className={classes.link}>
      <Button>presence</Button>
    </Link>
    <Link to="/jeux" className={classes.link}>
      <Button>jeux</Button>
    </Link>
  </div>
);

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);
