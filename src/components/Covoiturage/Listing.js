import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Item from './Item';

const styles = () => ({
  root: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

const Listing = ({ classes, items }) => (
  <div className={classes.root}>
    {items.map((element) => (
      <Item key={element._id} data={element} />
    ))}
  </div>
);

Listing.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(Listing);
