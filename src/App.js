import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Routes from './routes'
import { blue, red } from '@material-ui/core/colors'
import { Provider } from "react-redux";
import store from "./store";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[500]
    },
    primary: {
      main: blue[700]
    },
    error: {
      main: red[700]
    }
  },
  typography: {
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(','),
    useNextVariants: true,
  }
});


class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <MuiThemeProvider theme={theme}>
            <Routes />
          </MuiThemeProvider>
        </Provider>
    );
  }
}

export default App;