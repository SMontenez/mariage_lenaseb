import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Fab, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Form from './Form';
import Listing from './Listing';
import { getRequests } from '../../core/services/covoit';

const styles = (theme) => ({
  root: {
    width: '100%',
  },
  addButton: {
    margin: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  margin: {
    margin: theme.spacing.unit,
  },
});

class ProposalListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: [],
      showListing: true,
      showForm: false,
    };

    getRequests()
      .then(({ result }) => this.setState({ requests: result }))
      .catch((response) => {
        if (response.statusCode === 404) this.setState({ requests: [] });
      });

    this.handleClick = this.handleClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  handleClick() {
    this.setState({ showListing: false, showForm: true });
  }

  handleBackClick() {
    getRequests()
      .then(({ result }) => this.setState({ requests: result, showListing: true, showForm: false }))
      .catch((response) => {
        if (response.statusCode === 404) this.setState({ requests: [] });
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
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
              <Typography variant="body1">Ajouter votre recherche</Typography>
            </div>
            <Listing items={this.state.requests} />
          </div>
        )}
        {this.state.showForm && (
          <div>
            <Button onClick={this.handleBackClick}>
              <ArrowBackIcon />
            </Button>
            <Form type="request" />
          </div>
        )}
      </div>
    );
  }
}

ProposalListing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProposalListing);
