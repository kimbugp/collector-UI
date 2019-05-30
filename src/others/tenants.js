import React from 'react';
import MaterialTable from 'material-table';
import { getUsers } from '../actions/users';


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

  render() {
    return (
      <React.Fragment>
        <MaterialTable
          title={this.props.title}
          columns={this.state.columns}
          data={
            query =>
              new Promise(async (resolve, reject) => {
                let url = `page=${query.page + 1}`
                let res = await getUsers(url)
                resolve({
                  data: res.results,
                  page: res.current - 1,
                  totalCount: res.count
                });
                reject(
                  "failed"
                );
              })
          }
        />
      </React.Fragment>
    );
  }
}

