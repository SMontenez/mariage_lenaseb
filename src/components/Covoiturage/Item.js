import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Card, CardContent, List, ListItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import DateRangeIcon from '@material-ui/icons/DateRange';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PersonIcon from '@material-ui/icons/Person';
import TimeToLeaveIcon from '@material-ui/icons/TimeToLeave';

const styles = (theme) => ({
  root: {
    margin: theme.spacing.unit,
  },
  icon: {
    marginRight: theme.spacing.unit,
  },
  arrowIcon: {
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
  },
});

const Item = ({ classes, data }) => (
  <div className={classes.root}>
    <Card raised className={classes.margin}>
      <CardContent>
        <List>
          <ListItem>
            <PersonIcon className={classes.icon} />
            <span style={{ marginRight: '3px' }}>{data.firstname}</span>
            <span style={{ marginRight: '10px' }}>{data.lastname}</span>
          </ListItem>
          <ListItem>
            <TimeToLeaveIcon className={classes.icon} />
            {data.from}
            <ArrowRightAltIcon className={classes.arrowIcon} />
            {data.to}
          </ListItem>
          <ListItem>
            <GroupAddIcon className={classes.icon} />
            {data.nbPlaces}
          </ListItem>
          <ListItem>
            <DateRangeIcon className={classes.icon} />
            {moment(data.date).format('DD/MM/YYYY')}
          </ListItem>
          {!!data.contact.email && (
            <ListItem>
              <ContactMailIcon className={classes.icon} />
              {data.contact.email}
            </ListItem>
          )}
          {!!data.contact.phone && (
            <ListItem>
              <ContactPhoneIcon className={classes.icon} />
              {data.contact.phone}
            </ListItem>
          )}
        </List>
      </CardContent>
    </Card>
  </div>
);

Item.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.shape({
    type: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    nbPlaces: PropTypes.number,
    date: PropTypes.string.isRequired,
    contact: PropTypes.shape({
      téléphone: PropTypes.string,
      email: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default withStyles(styles)(Item);
