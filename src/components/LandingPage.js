import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import NavBar from './NavBar'
import Image from "../img/main.jpg"
import Signin from "../others/login"
import { Auth } from '../routes';
import loginAction from '../actions/login';
// eslint-disable-next-line no-unused-vars
import { async } from 'q';


const styles = {
    paperContainer: {
        height: '100vh',
        width: 'auto',
        backgroundImage: `url(${Image})`
    }
};
class LandingPage extends Component {

    componentDidMount() {
        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
                client_id: '715095933691-i190sabpa75e3ltg0ccjq326d5l3gv2h.apps.googleusercontent.com'
            }).then(() => {
                window.gapi.signin2.render('g-signin2', {
                    'scope': 'profile email',
                    'longtitle': false,
                    'class': 'g-signin2',
                    'onsuccess': this.onSignIn,
                    'onfailure': this.onSignIn
                })
            })
        })
    }

    onSignIn = async (googleUser) => {
        var profile = googleUser.getBasicProfile();
        var access_token = googleUser.Zi.access_token
        localStorage.setItem('profile', JSON.stringify(profile))
        Auth.authenticate((loginAction) => {
        })
        // eslint-disable-next-line no-unused-vars
        let res = await loginAction({ access_token: access_token });

        if (this.props.location.state instanceof (Object)) {
            this.props.history.push(this.props.location.state.from.pathname)

        }
        else {
            this.props.history.push('/dashboard')

        }

    }

    state = {
        data: []
    };

    render() {
        const currentPath = this.props.location.pathname
        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
                <div style={styles.paperContainer}>
                    <NavBar login={false} currentPath={currentPath} />
                    <div className={classes.root}>
                        <Grid container justify="center">
                        </Grid>
                    </div>
                    <Signin googleLogin={this.onSignIn} />
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(withStyles(styles)(LandingPage));