import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import getHouses from '../../actions/houses';
import Table from '../../others/table';
import { connect } from "react-redux";

export class HousesService extends Component {
    state = {
        tenants: []
    }

    componentDidMount() {
        this.props.getHouses()
    }

    render() {
        return (
            <Typography component="div" style={{ padding: 8 * 3 }}>
                {this.props.children}
                <Table title='Houses' tenants={this.state.tenants} houses={this.props.houses} />
            </Typography>
        );
    }
}

const mapStateToProps = ({ housesReducer }) => ({
    houses: housesReducer.houses
});

export default connect(
    mapStateToProps,
    { getHouses }
)(HousesService);


