import * as React from 'react';

import { Button } from '@mui/material';

import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 70,
    // renderCell: (params) => <a href={`/item/${params.row.id}`}>{params.value}</a>,
  },
  { field: 'title', headerName: 'Title', width: 190 },
  { field: 'date', headerName: 'Date', width: 190 },
  {
    field: 'action',
    headerName: 'Action',
    width: 190,
    renderCell: (params) => (
      <Button color="error" variant="text" onClick={() => handleDelete(params.row.id)}>
        Delete
      </Button>
    ),
  },
];

const rows = [
  {
    id: 2,
    title: 'Mike',
    date: '23/10/2023',
  },
  {
    id: 1,
    title: 'Mike',
    date: '23/10/2023',
  },
  {
    id: 21,
    title: 'Mike',
    date: '23/10/2023',
  },
  {
    id: 12,
    title: 'Mike',
    date: '23/10/2023',
  },
];

function handleDelete(id) {
  // Add your delete logic here, e.g., make an API call to delete the item
  console.log(`Deleting item with ID: ${id}`);
}

export default function CreditTipTable() {
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
      <h2 style={{ padding: '2rem 0rem 1rem 1rem' }}>Credit Tips</h2>
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
