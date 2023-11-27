import * as React from 'react';

// import { Button } from '@mui/material';
import moment from 'moment';

import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';

const columns = [
  {
    field: 'id',
    headerName: 'Loan ID',
    width: 90,
    renderCell: (params) => <a href={`/loan/${params.row.id}`}>{params.value}</a>,
  },
  { field: 'lender', headerName: 'Lender', width: 130 },
  { field: 'borrower', headerName: 'Borrower', width: 130 },
  { field: 'loanAmount', headerName: 'Loan Value', width: 130 },
  { field: 'expectedReturn', headerName: 'Expected Return', width: 130 },
  { field: 'balance', headerName: 'Balance', width: 130 },
  { field: 'initiationDate', headerName: 'Initiation Date', width: 120 },
  { field: 'dueDate', headerName: 'Due Date', width: 120 },
  {
    field: 'status',
    headerName: 'Status',
    width: 90,
    renderCell: (params) => (
      <Button
        variant="contained"
        color={(params.value === 'active' && 'error') || 'success'}
        style={{ padding: '0 0.6rem' }}
      >
        {params.value}
      </Button>
    ),
  },
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

export default function LoanDetailsTable() {
  const loanState = useSelector((state) => state.loan);

  const loanObj = [loanState?.loan];

  function convertKoboToNaira(koboAmount) {
    const nairaAmount = koboAmount / 100; // 100 kobo equals 1 naira
    return nairaAmount;
  }
  const loansData = loanObj?.map((loan, index) => {
    // Create loan data for each item
    const loanData = {
      id: loan?.id || 0,
      lender: loan?.lender_first_name,
      borrower: loan?.borrower_first_name,
      loanAmount: new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
      }).format(convertKoboToNaira(loan?.amount)),
      expectedReturn: new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
      }).format(convertKoboToNaira(loan?.expected_return)),
      balance: new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
      }).format(
        (convertKoboToNaira(loan?.expected_return) ?? 0) -
          (convertKoboToNaira(loan?.amount_paid) ?? 0)
      ),
      initiationDate: moment(loan?.createdAt).format('L'),
      dueDate: moment(loan?.due_date).format('L'),
      status: loan?.status ? 'completed' : 'active',
    };

    // You can also add the index if needed
    loanData.index = index;

    return loanData;
  });

  // console.log(loansData);

  // function handleDelete(id) {
  //   // Add your delete logic here, e.g., make an API call to delete the item
  //   console.log(`Deleting item with ID: ${id}`);
  // }

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
        rows={loansData}
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
