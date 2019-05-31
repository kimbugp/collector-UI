import React from 'react';
import MaterialTable from 'material-table';


export default class TenantsTable extends React.Component {

  state = {
    columns: [
      { title: 'Name', field: 'name', type: 'string' },
      { title: 'Username', field: 'username', type: 'string' },
      { title: 'Email', field: 'email', type: 'string' },
    ],
    data: [
    ],
  }
  addTenant = (data) => new Promise(resolve => {
    setTimeout(() => {
      this.props.updateUsers(data)
      this.setState({ data }, () => resolve());
      resolve();
    }, 600);
  })
  render() {
    return (
      <React.Fragment>
        <MaterialTable
          title={this.props.title}
          columns={this.state.columns}
          data={this.props.tenants}
          editable={{
            onRowAdd: this.addTenant
          }}
        />
      </React.Fragment>
    );
  }
}

