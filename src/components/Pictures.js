import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, CircularProgress, InputAdornment, TextField, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Lock as LockIcon } from '@material-ui/icons';

import trads from '../core/trads';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    marginBottom: '50px',
    padding: '10px 20px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: `1px solid #999999`,
    borderRadius: '10px',
    backgroundColor: 'white',
  },
  input: {
    margin: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
    alignSelf: 'center',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  result: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  passwordValid: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: theme.palette.primary.dark,
  },
  textLink: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'black',
  },
  cheerzText: {
    width: '80%',
  },
});

class Pictures extends Component {
  constructor(props) {
    super(props);
    this.state = { password: '', showStartDownload: false, downloadStarted: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleValidationClick = this.handleValidationClick.bind(this);
    this.handleDownloadClick = this.handleDownloadClick.bind(this);
  }

  handleChange() {
    return (event) => {
      const { value } = event.target;
      this.setState({ password: value });
    };
  }

  async handleValidationClick() {
    this.setState({ error: false, sending: true });
    const fetchUrl = `${this.props.apiBaseUrl}/files/pictures?password=${this.state.password}`;

    const { status } = await fetch(fetchUrl);
    if (status >= 400) {
      this.setState({
        error: true,
        errorStatus: status,
        sending: false,
      });
      return;
    }

    this.setState({ error: false, sending: false, showStartDownload: true });
  }

  async handleDownloadClick() {
    this.setState({ showStartDownload: false, downloadStarted: true });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h2" align="center">
          {trads('Pictures').title}
        </Typography>
        <Typography variant="h6">{trads('Pictures').description}</Typography>
        <form className={classes.form} id="PicturesForm">
          <TextField
            className={classes.input}
            label={trads('common').password}
            variant="outlined"
            onChange={this.handleChange()}
            disabled={this.state.showStartDownload || this.state.downloadStarted}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />
          {!this.state.showStartDownload && !this.state.downloadStarted && !this.state.sending && (
            <Button
              className={classes.button}
              variant="contained"
              onClick={() => this.handleValidationClick()}
            >
              {trads('Pictures').validatePassword}
            </Button>
          )}
          {this.state.showStartDownload && (
            <>
              <Button
                className={classes.button}
                variant="contained"
                onClick={() => this.handleDownloadClick()}
              >
                <a
                  className={classes.textLink}
                  href={`${this.props.apiBaseUrl}/files/pictures?password=${this.state.password}`}
                >
                  {trads('Pictures').startDownload}
                </a>
              </Button>
              <Typography variant="body1" className={classes.passwordValid}>
                {trads('Pictures').passwordValid}
              </Typography>
            </>
          )}
          {this.state.downloadStarted && (
            <Typography variant="body1" className={classes.result}>
              {trads('Pictures').downloadStarted}
            </Typography>
          )}
          {this.state.sending && <CircularProgress className={classes.result} />}
          {this.state.error &&
            ((this.state.errorStatus === 400 && (
              <Typography variant="body1" color="error" className={classes.result}>
                {trads('Pictures').noPassword}
              </Typography>
            )) ||
              (this.state.errorStatus === 403 && (
                <Typography variant="body1" color="error" className={classes.result}>
                  {trads('Pictures').forbidden}
                </Typography>
              )) || (
                <Typography variant="body1" color="error" className={classes.result}>
                  {trads('Pictures').error}
                </Typography>
              ))}
        </form>
        <Typography variant="h6" className={classes.cheerzText}>
          {trads('Pictures').reminderCheerz}
          <a href="https://www.cheerz.com" className={classes.textLink}>
            {trads('Pictures').cheerzWebsite}
          </a>
        </Typography>
      </div>
    );
  }
}

Pictures.propTypes = {
  classes: PropTypes.object.isRequired,
  apiBaseUrl: PropTypes.string.isRequired,
};

export default withStyles(styles)(Pictures);
