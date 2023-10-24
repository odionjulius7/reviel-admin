import * as React from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const columns = [
  {
    field: 'id',
    headerName: 'S/N',
    width: 70,
    // renderCell: (params) => <a href={`/item/${params.row.id}`}>{params.value}</a>,
  },
  { field: 'question', headerName: 'Question', width: 190 },
  { field: 'answer', headerName: 'Answer', width: 190 },
];

const rows = [
  {
    id: 12,
    question: 'nbhsabdjb',
    answer: '',
  },
];

export default function UserRecordedLoanTable() {
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
      <h2 style={{ padding: '2rem 0rem 1rem 1rem' }}>Recorded Loans For All User</h2>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 15 },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        // checkboxSelection
      />
    </div>
  );
}
