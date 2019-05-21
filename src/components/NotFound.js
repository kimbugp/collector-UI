import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Topbar from './Topbar';
import styles from '../styles/dashBoard';

class notFound extends Component {

    state = {
    };
    render() {
        const { classes } = this.props;
        const currentPath = this.props.location.pathname

        return (
            <React.Fragment>
                <CssBaseline />
                <Topbar currentPath={currentPath} />
                <div className={classes.root}>
                    <div className={classes.root}>
                        <Grid container justify="center">
                            <div>simon</div>
                            <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
                                <Grid item xs={12}>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                    <Grid container justify="center">
                    </Grid>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(withStyles(styles)(notFound));
