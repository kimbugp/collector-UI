import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import NavBar from './NavBar'
import Image from "../img/main.jpg"


const styles = {
    paperContainer: {
        height: '100vh',
        backgroundImage: `url(${Image})`
    }
};
class LandingPage extends Component {

    state = {
        data: []
    };
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
                <div style={styles.paperContainer}>
                <NavBar login={true}/>
                <div className={classes.root}>
                    <Grid container justify="center">
                    </Grid>
                </div>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(withStyles(styles)(LandingPage));