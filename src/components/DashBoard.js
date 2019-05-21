import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import NavBar from './NavBar';
import styles from '../styles/dashBoard';

class Dashboard extends Component {

    state = {
        data: []
    };
    render() {
        const { classes } = this.props;
        const currentPath = this.props.location.pathname
        
        return (
            <React.Fragment>
                <CssBaseline />
                <NavBar login={true} currentPath={currentPath}/>
                <div className={classes.root}>
                    <Grid container justify="center">
                    </Grid>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(withStyles(styles)(Dashboard));
