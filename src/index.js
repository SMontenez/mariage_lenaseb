import React from 'react';
import ReactDOM from 'react-dom';
import MomentUtils from '@date-io/moment';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';

import './index.css';
import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#c9dbcb',
      dark: '#bacabd',
    },
    secondary: {
      main: '#feece2',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'ChampagneAndLimousines',
    h2: {
      fontFamily: 'DancingScript',
      'margin-bottom': '50px',
    },
    h5: {
      fontFamily: 'DancingScript',
    },
    h6: {
      marginBottom: '30px',
    },
    body1: {
      textAlign: 'justify',
    },
    button: {
      fontWeight: 'bold',
    },
  },
  links: {
    textDecoration: 'none',
  },
});

ReactDOM.render(
  <React.Fragment>
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <CssBaseline />
        <App />
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  </React.Fragment>,
  document.getElementById('root'),
);
