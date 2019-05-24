import React from 'react';
import MaterialTable from 'material-table';

export default function Table(props) {

  const [state, setState] = React.useState({
    columns: [
      { title: 'House', field: 'house_name', type: 'string' },
      { title: 'Rate', field: 'rate', type: 'currency' },
      { title: 'Tenant', field: 'tenant', type: 'string' },
      { title: 'Paid', field: 'is_paid', type: 'boolean' },
      { title: 'Start Date', field: 'start_date', type: 'date' },
    ],
    data: [
      {
        identifier: "05848e3a-4ca1-4ec4-bdf1-98f5780062d5",
        house_name: "Lagos 24th Street",
        rate: 200000,
        is_occupied: true,
        start_date: "2019-04-29",
        tenant: "kimbugwe.simon-pete@andela.com",
        is_paid: true,
        owner: { "email": "simon@simon.com" },
      },
      {
        identifier: "05848e3a-4ca1-4ec4-bdf1-98f5780062d5",
        house_name: "Lagos 24th Street",
        rate: 200000,
        is_occupied: true,
        start_date: "2019-04-29",
        tenant: "kimbugwe.simon-pete@andela.com",
        is_paid: false,
        owner: { "email": "simon@simon.com" },
      },
    ],
  });
  return (
    <MaterialTable
      title={props.title}
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}
