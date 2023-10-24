import * as React from 'react';

import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 70,
    renderCell: (params) => <a href={`/item/${params.row.id}`}>{params.value}</a>,
  },
  { field: 'lender', headerName: 'Lender', width: 190 },
  { field: 'borrower', headerName: 'Borrower', width: 190 },
  {
    field: 'phone',
    headerName: 'Phone Number',
    // type: 'number',
    width: 190,
  },
  //   {
  //     field: 'fullName',
  //     headerName: 'Full name',
  //     description: 'This column has a value getter and is not sortable.',
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  //   },
  {
    field: 'status',
    headerName: 'Status',
    // type: 'number',
    width: 190,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    // type: 'number',
    width: 190,
  },
];

const rows = [
  {
    id: 2,
    lender: 'Mike',
    borrower: 'Joy',
    phone: 20987867565,
    status: 'pending',
    amount: '7585747446',
  },
  {
    id: 22,
    lender: 'Mike',
    borrower: 'Joy',
    phone: 20987867565,
    status: 'pending',
    amount: '7585747446',
  },
  {
    id: 3,
    lender: 'Mike',
    borrower: 'Joy',
    phone: 20987867565,
    status: 'pending',
    amount: '7585747446',
  },
];

export default function DashboardTable() {
  return (
    <div
      style={{
        minHeight: 200,
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        boxShadow:
          '0 0 2px 0 rgba(145, 158, 171, 0.08), 0 12px 24px -4px rgba(145, 158, 171, 0.08)',
      }}
    >
      <h2 style={{ padding: '2rem 0rem 1rem 1rem' }}>Recent Transactions</h2>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
      />
    </div>
  );
}
