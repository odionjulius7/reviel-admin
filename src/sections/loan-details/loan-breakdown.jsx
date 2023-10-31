import * as React from 'react';

import { Button } from '@mui/material';

import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'id',
    headerName: 'Payment',
    width: 70,
    // renderCell: (params) => <a href={`/loan/${params.row.id}`}>{params.value}</a>,
  },
  { field: 'amount', headerName: 'Amount', width: 130 },
  { field: 'date', headerName: 'Date', width: 130 },
  { field: 'status', headerName: 'Status', width: 90 },
  { field: 'message', headerName: 'Message', width: 190 },
  // {
  //   field: 'action',
  //   headerName: 'Action',
  //   width: 190,
  //   renderCell: (params) => (
  //     <Button color="error" variant="text" onClick={() => handleDelete(params.row.id)}>
  //       Delete
  //     </Button>
  //   ),
  // },
];

const rows = [
  {
    id: 1,
    amount: '50,000',
    date: '23/10/2023',
    status: 'active',
    message: 'acMM jhsd yhewgsdy tive',
  },
  {
    id: 2,
    amount: '50,000',
    date: '23/10/2023',
    status: 'active',
    message: '',
  },
  {
    id: 3,
    amount: '50,000',
    date: '23/10/2023',
    status: 'active',
    message: 'acMM jhsd yhewgsdy tive',
  },
  {
    id: 4,
    amount: '50,000',
    date: '23/10/2023',
    status: 'active',
    message: '',
  },
  {
    id: 5,
    amount: '50,000',
    date: '23/10/2023',
    status: 'active',
    message: '',
  },
  {
    id: 6,
    amount: '50,000',
    date: '23/10/2023',
    status: 'active',
    message: '',
  },
];

function handleDelete(id) {
  // Add your delete logic here, e.g., make an API call to delete the item
  console.log(`Deleting item with ID: ${id}`);
}

export default function LoanBreakDownTable() {
  return (
    <div
      style={{
        minHeight: 200,
        width: '60%',
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        boxShadow:
          '0 0 2px 0 rgba(145, 158, 171, 0.08), 0 12px 24px -4px rgba(145, 158, 171, 0.08)',
      }}
    >
      {/* <h2 style={{ padding: '2rem 0rem 1rem 1rem' }}>Loan Details</h2> */}
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20]}
      />
    </div>
  );
}
