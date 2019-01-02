import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, CircularProgress, TextField, Typography } from '@material-ui/core';
import { DatePicker } from 'material-ui-pickers';
import { withStyles } from '@material-ui/core/styles';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import DateRangeIcon from '@material-ui/icons/DateRange';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PersonIcon from '@material-ui/icons/Person';
import TimeToLeaveIcon from '@material-ui/icons/TimeToLeave';

import * as validators from '../../core/helpers/validators';
import { create } from '../../core/services/covoit';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '800px',
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
  icon: {
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
  },
  inputs: {
    alignSelf: 'stretch',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginRight: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
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

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        value: '',
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

    this.checkInvalidity = this.checkInvalidity.bind(this);
    this.getValuesToCreate = this.getValuesToCreate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.isInvalid = this.isInvalid.bind(this);
    this.isFormValid = this.isFormValid.bind(this);
  }

  getValuesToCreate() {
    return {
      type: 'proposal',
      firstname: this.state.firstname.value,
      lastname: this.state.lastname.value,
      from: this.state.from.value,
      to: this.state.to.value,
      nbPlaces: this.state.nbPlaces.value,
      date: this.state.date.value,
      contact: {
        téléphone: this.state.téléphone.value,
        email: this.state.email.value,
      },
    };
  }

  checkInvalidity(fieldName, value) {
    if (fieldName === 'email') {
      return this.isInvalid('phone') && (value === '' || !validators.email(value));
    }
    if (fieldName === 'phone') {
      return value === '' && this.isInvalid('email');
    }

    return value === '';
  }

  handleChange(fieldName) {
    return (event) => {
      if (fieldName) {
        const { value } = event.target;
        const isInvalid = this.checkInvalidity(fieldName, value);
        this.setState({ [fieldName]: { value, isInvalid } });
      }
    };
  }

  async handleClick() {
    try {
      this.setState({ error: false, success: false, sending: true });
      await create(this.getValues());
    } catch (err) {
      this.setState({ error: true, success: false, sending: false });
      return;
    }
    document.getElementById('contactForm').reset();
    this.setState({ error: false, success: true, sending: false });
  }

  isInvalid(fieldName) {
    return this.state[fieldName].isInvalid;
  }

  isFormValid() {
    return Object.keys(this.state).some(this.isInvalid);
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <form className={classes.form} id="contactForm">
          <Typography variant="caption" className={classes.requiredLabel}>
            * Champs obligatoire
          </Typography>
          <div className={classes.inputs}>
            <PersonIcon className={classes.icon} fontSize="large" />
            <TextField
              className={classes.input}
              label="Prénom"
              variant="outlined"
              required
              error={this.isInvalid('firstname')}
              onChange={this.handleChange('firstname')}
            />
            <TextField
              className={classes.input}
              label="Nom"
              variant="outlined"
              required
              error={this.isInvalid('lastname')}
              onChange={this.handleChange('lastname')}
            />
          </div>
          <div className={classes.inputs}>
            <TimeToLeaveIcon className={classes.icon} fontSize="large" />
            <TextField
              className={classes.input}
              label="Départ"
              variant="outlined"
              required
              error={this.isInvalid('from')}
              onChange={this.handleChange('from')}
            />
            <TextField
              className={classes.input}
              label="Arrivée"
              variant="outlined"
              required
              error={this.isInvalid('to')}
              onChange={this.handleChange('to')}
            />
            <TextField
              className={classes.input}
              label="Nombre de places"
              variant="outlined"
              required
              error={this.isInvalid('nbPlaces')}
              onChange={this.handleChange('nbPlaces')}
            />
          </div>
          <div className={classes.inputs}>
            <DateRangeIcon className={classes.icon} fontSize="large" />
            <DatePicker
              className={classes.input}
              label="Date"
              variant="outlined"
              required
              error={this.isInvalid('date')}
              onChange={this.handleChange('date')}
            />
          </div>
          <div className={classes.inputs}>
            <div className={classes.contacts}>
              <div>
                <ContactMailIcon className={classes.icon} fontSize="large" />
                <TextField
                  className={classes.input}
                  label="Email"
                  variant="outlined"
                  error={this.isInvalid('email')}
                  onChange={this.handleChange('email')}
                />
              </div>
              <div>
                <ContactPhoneIcon className={classes.icon} fontSize="large" />
                <TextField
                  className={classes.input}
                  label="Téléphone"
                  variant="outlined"
                  error={this.isInvalid('phone')}
                  onChange={this.handleChange('phone')}
                />
              </div>
            </div>
            <Typography variant="caption">(remplir au moins un de ces deux champs)</Typography>
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
              Désolé, une erreur est survenue et votre trajet n&#39;a pas pu être créé. Veuillez
              réessayer plus tard.
            </Typography>
          )}
          {this.state.success && (
            <Typography variant="body1" color="primary" className={classes.result}>
              Votre trajet a été créé avec succès !
            </Typography>
          )}
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);
