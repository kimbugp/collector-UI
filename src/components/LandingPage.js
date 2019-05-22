import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import NavBar from './NavBar'
import Image from "../img/main.jpg"
import Signin from "../others/login"


const styles = {
    paperContainer: {
        height: '100vh',
        width: 'auto',
        backgroundImage: `url(${Image})`
    }
};
class LandingPage extends Component {

    onSignIn=(googleUser)=> {
        var profile = googleUser.getBasicProfile();
        // var user = googleUser.getAuthResponse();
        alert(profile)
        this.props.history.push('/')
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
                <NavBar login={false} currentPath={currentPath}/>
                <div className={classes.root}>
                    <Grid container justify="center">
                    </Grid>
                </div>
                <Signin googleLogin={this.onSignIn}/>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(withStyles(styles)(LandingPage));