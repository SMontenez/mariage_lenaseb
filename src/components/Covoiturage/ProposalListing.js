import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Fab, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Form from './Form';
import Listing from './Listing';

const styles = (theme) => ({
  addButton: {
    margin: '30px',
    display: 'flex',
    alignItems: 'center',
  },
  margin: {
    margin: theme.spacing.unit,
  },
});

class ProposalListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showListing: true,
      showForm: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  handleClick() {
    this.setState({ showListing: false, showForm: true });
  }

  handleBackClick() {
    this.setState({ showListing: true, showForm: false });
  }

  render() {
    const { classes, items } = this.props;

    return (
      <div>
        {this.state.showListing && (
          <div>
            <div className={classes.addButton}>
              <div>
                <Fab
                  size="small"
                  color="secondary"
                  aria-label="Add"
                  className={classes.margin}
                  onClick={this.handleClick}
                >
                  <AddIcon />
                </Fab>
              </div>
              <Typography variant="body1">Proposer un trajet</Typography>
            </div>
            <Listing items={items} />
          </div>
        )}
        {this.state.showForm && (
          <div>
            <Button onClick={this.handleBackClick}>
              <ArrowBackIcon />
            </Button>
            <Form backValue="0" />
          </div>
        )}
      </div>
    );
  }
}

ProposalListing.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(ProposalListing);
