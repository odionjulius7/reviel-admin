import * as React from 'react';

import { Button } from '@mui/material';

import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'id',
    headerName: 'Credit ID',
    width: 70,
    renderCell: (params) => <a href={`/loan/${params.row.id}`}>{params.value}</a>,
  },
  { field: 'lender', headerName: 'Lender', width: 150 },
  { field: 'borrower', headerName: 'Borrower', width: 150 },
  { field: 'loanAmount', headerName: 'Loan Amount', width: 130 },
  { field: 'expectedReturn', headerName: 'Expected Return', width: 130 },
  { field: 'balance', headerName: 'Balance', width: 130 },
  { field: 'initiationDate', headerName: 'Initiation Date', width: 120 },
  { field: 'dueDate', headerName: 'Due Date', width: 100 },
  { field: 'status', headerName: 'Status', width: 90 },
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
    id: 1524,
    lender: 'Mike',
    borrower: 'Mike',
    loanAmount: '50,000',
    expectedReturn: '50,000',
    balance: '50,000',
    initiationDate: '23/10/2023',
    dueDate: '23/10/2023',
    status: 'active',
  },
];

function handleDelete(id) {
  // Add your delete logic here, e.g., make an API call to delete the item
  console.log(`Deleting item with ID: ${id}`);
}

export default function LoanDetailsTable() {
  return (
    <div
      style={{
        minHeight: 200,
        // width: '60%',
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        boxShadow:
          '0 0 2px 0 rgba(145, 158, 171, 0.08), 0 12px 24px -4px rgba(145, 158, 171, 0.08)',
      }}
    >
      <h2 style={{ padding: '2rem 0rem 1rem 1rem' }}>Loan Details</h2>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
