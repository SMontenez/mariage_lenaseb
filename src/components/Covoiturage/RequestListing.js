import React from 'react';
import PropTypes from 'prop-types';
import { Fab, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

import Item from './Item';

const styles = (theme) => ({
  addButton: {
    margin: '30px',
    alignSelf: 'flex-start',
    display: 'flex',
    alignItems: 'center',
  },
  margin: {
    margin: theme.spacing.unit,
  },
});

const RequestListing = ({ classes, items }) => (
  <div>
    <div className={classes.addButton}>
      <div>
        <Fab size="small" color="secondary" aria-label="Add" className={classes.margin}>
          <AddIcon />
        </Fab>
      </div>
      <Typography variant="body1">Ajouter votre recherche</Typography>
    </div>
    {items.map((element) => (
      <Item key={element._id} data={element} />
    ))}
  </div>
);

RequestListing.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(RequestListing);
