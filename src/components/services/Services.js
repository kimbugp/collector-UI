import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from '../NavBar'
import Grid from '@material-ui/core/Grid';
import styles from '../../styles/dashBoard';
import ServicesMenu from './ServicesMenu';


class Services extends Component {
    state = {
    };

    render() {
        const currentPath = this.props.location.pathname
        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
                <NavBar login={true} currentPath={currentPath} />
                <ServicesMenu />
                <div className={classes.root}>
                    <Grid container justify="center">
                    </Grid>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(withStyles(styles)(Services));