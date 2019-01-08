import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Button, CircularProgress, InputAdornment, TextField, Typography } from '@material-ui/core';
import { DatePicker } from 'material-ui-pickers';
import { withStyles } from '@material-ui/core/styles';
import {
  ContactMail as ContactMailIcon,
  ContactPhone as ContactPhoneIcon,
  DateRange as DateRangeIcon,
  Person as PersonIcon,
  Place as PlaceIcon,
  TimeToLeave as TimeToLeaveIcon,
} from '@material-ui/icons';

import * as validators from '../../core/helpers/validators';
import { create } from '../../core/services/covoit';

const WEDDING_DATE = '2019-08-17';

const texts = {
  error: {
    proposal:
      'Désolé, une erreur est survenue et votre trajet n&#39;a pas pu être créé. Veuillez réessayer plus tard.',
    request:
      'Désolé, une erreur est survenue et votre recherche n&#39;a pas pu être créee. Veuillez réessayer plus tard.',
  },
  success: {
    proposal: 'Votre trajet a été créé avec succès !',
    request: 'Votre recherche a été créée avec succès !',
  },
};

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginBottom: '50px',
    padding: '10px 20px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    border: `1px solid #999999`,
    borderRadius: '10px',
    backgroundColor: 'white',
  },
  requiredLabel: {
    alignSelf: 'flex-end',
  },
  inputs: {
    alignSelf: 'stretch',
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing.unit * 2,
  },
  input: {
    marginRight: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  from: {
    color: theme.palette.primary.dark,
  },
  to: {
    color: '#E2B69B',
  },
  contacts: {
    display: 'flex',
    flexDirection: 'column',
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
});

function checkInvalidity(fieldName, value) {
  if (fieldName === 'email') {
    return !validators.email(value);
  }

  if (fieldName === 'phone') {
    return !validators.phone(value);
  }

  return value === '';
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
      firstname: {
        value: '',
        isInvalid: false,
      },
      lastname: {
        value: '',
        isInvalid: false,
      },
      from: {
        value: '',
        isInvalid: false,
      },
      to: {
        value: '',
        isInvalid: false,
      },
      nbPlaces: {
        value: '',
        isInvalid: false,
      },
      date: {
        value: moment(WEDDING_DATE).toISOString(),
        isInvalid: false,
      },
      phone: {
        value: '',
        isInvalid: false,
      },
      email: {
        value: '',
        isInvalid: false,
      },
    };

    this.getValuesToCreate = this.getValuesToCreate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.isInvalid = this.isInvalid.bind(this);
    this.isFormValid = this.isFormValid.bind(this);
  }

  getValuesToCreate() {
    return {
      type: this.state.type,
      firstname: this.state.firstname.value,
      lastname: this.state.lastname.value,
      from: this.state.from.value,
      to: this.state.to.value,
      nbPlaces: this.state.nbPlaces.value,
      date: this.state.date.value,
      contact: {
        phone: this.state.phone.value,
        email: this.state.email.value,
      },
    };
  }

  handleChange(fieldName) {
    return (event) => {
      if (fieldName) {
        const { value } = event.target;

        const isInvalid = checkInvalidity(fieldName, value);
        this.setState({ [fieldName]: { value, isInvalid } });
      }
    };
  }

  handleDateChange(fieldName) {
    return (event) => {
      if (fieldName) {
        const value = event.toISOString();

        const isInvalid = checkInvalidity(fieldName, value);
        this.setState({ [fieldName]: { value, isInvalid } });
      }
    };
  }

  async handleClick() {
    try {
      this.setState({ error: false, success: false, sending: true });
      await create(this.getValuesToCreate());
    } catch (err) {
      this.setState({ error: true, success: false, sending: false });
      return;
    }
    document.getElementById('covoitForm').reset();
    this.setState({ error: false, success: true, sending: false });
  }

  isInvalid(fieldName) {
    return this.state[fieldName].isInvalid;
  }

  isFormValid() {
    return !Object.keys(this.state).some(this.isInvalid);
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <form className={classes.form} id="covoitForm">
          <Typography variant="caption" className={classes.requiredLabel}>
            * Champs obligatoire
          </Typography>
          <div className={classes.inputs}>
            <DatePicker
              className={classes.input}
              label="Date"
              variant="outlined"
              required
              clearable
              value={this.state.date.value}
              error={this.isInvalid('date')}
              onChange={this.handleDateChange('date')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DateRangeIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className={classes.inputs}>
            <TextField
              className={classes.input}
              label="Prénom"
              variant="outlined"
              required
              error={this.isInvalid('firstname')}
              onChange={this.handleChange('firstname')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              className={classes.input}
              label="Nom"
              variant="outlined"
              required
              error={this.isInvalid('lastname')}
              onChange={this.handleChange('lastname')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className={classes.inputs}>
            <TextField
              className={classes.input}
              label="Départ"
              variant="outlined"
              required
              error={this.isInvalid('from')}
              onChange={this.handleChange('from')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PlaceIcon className={classes.from} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              className={classes.input}
              label="Arrivée"
              variant="outlined"
              required
              error={this.isInvalid('to')}
              onChange={this.handleChange('to')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PlaceIcon className={classes.to} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              type="number"
              className={classes.input}
              label="Nombre de places"
              variant="outlined"
              required
              error={this.isInvalid('nbPlaces')}
              onChange={this.handleChange('nbPlaces')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TimeToLeaveIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className={classes.inputs}>
            <div className={classes.contacts}>
              <div>
                <TextField
                  className={classes.input}
                  label="Email"
                  variant="outlined"
                  error={this.isInvalid('email')}
                  onChange={this.handleChange('email')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ContactMailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div>
                <TextField
                  className={classes.input}
                  label="Téléphone"
                  variant="outlined"
                  error={this.isInvalid('phone')}
                  onChange={this.handleChange('phone')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ContactPhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>
            <Typography variant="body1">(remplir au moins un de ces deux champs)</Typography>
          </div>
          <Button
            className={classes.button}
            variant="contained"
            disabled={!this.isFormValid()}
            onClick={() => this.handleClick()}
          >
            Envoyer
          </Button>
          {this.state.sending && <CircularProgress className={classes.result} />}
          {this.state.error && (
            <Typography variant="body1" color="error" className={classes.result}>
              {texts.error[this.state.type]}
            </Typography>
          )}
          {this.state.success && (
            <Typography variant="body1" color="primary" className={classes.result}>
              {texts.success[this.state.type]}
            </Typography>
          )}
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['proposal', 'request']).isRequired,
};

export default withStyles(styles)(Form);
