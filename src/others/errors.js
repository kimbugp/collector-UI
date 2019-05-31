import Snackbar from '@material-ui/core/Snackbar';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { closeError } from "../actions/errors"

class ErrorService extends Component {
    render() {
        return (
            console.log(this.props),
            <React.Fragment>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'centre',
                    }}
                    variant="error"
                    open={this.props.view}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                >
                </Snackbar>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ errorReducer, userReducer }) => ({
    view: errorReducer,
    user: userReducer
});

export default connect(
    mapStateToProps,
    { closeError }
)(ErrorService);