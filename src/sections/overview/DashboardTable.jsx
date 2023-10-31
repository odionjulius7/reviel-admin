import * as React from 'react';

import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'id',
    headerName: 'Credit ID',
    width: 90,
    renderCell: (params) => <a href={`/loan/${params.row.id}`}>{params.value}</a>,
  },
  { field: 'lender', headerName: 'Lender', width: 160 },
  { field: 'borrower', headerName: 'Borrower', width: 160 },
  {
    field: 'phone',
    headerName: 'Phone Number',
    // type: 'number',
    width: 130,
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
    width: 130,
  },
  {
    field: 'repaymentDate',
    headerName: 'Repayment Date',
    // type: 'number',
    width: 160,
  },
  {
    field: 'message',
    headerName: 'Message',
    // type: 'number',
    width: 220,
  },
];

const rows = [
  {
    id: 1432,
    lender: 'Mike',
    borrower: 'Joy',
    phone: 20987867565,
    status: 'pending',
    repaymentDate: '11/28/2023',
    message: 'lorem ipsum make a ka dhh jhfdh',
  },
  {
    id: 1422,
    lender: 'Mike',
    borrower: 'Joy',
    phone: 20987867565,
    status: 'pending',
    repaymentDate: '11/28/2023',
    message: 'lorem ipsum make a ka dhh jhfdh',
  },
  {
    id: 1932,
    lender: 'Mike',
    borrower: 'Joy',
    phone: 20987867565,
    status: 'pending',
    repaymentDate: '11/28/2023',
    message: 'lorem ipsum make a ka dhh jhfdh',
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
