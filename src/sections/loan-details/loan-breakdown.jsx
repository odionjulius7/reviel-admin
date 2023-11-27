import * as React from 'react';

import { Button } from '@mui/material';

import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import moment from 'moment';

const columns = [
  {
    field: 'id',
    headerName: 'Payment',
    width: 70,
    // renderCell: (params) => <a href={`/loan/${params.row.id}`}>{params.value}</a>,
  },
  { field: 'amount', headerName: 'Value', width: 130 },
  { field: 'date', headerName: 'Date', width: 130 },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
    renderCell: (params) => (
      <Button
        variant="text"
        color={
          (params.value === 'contested' && 'error') ||
          (params.value === 'rejected' && 'error') ||
          (params.value === 'awaiting_approval' && 'warning') ||
          'success'
        }
        style={{ padding: '0 1rem' }}
      >
        {params.value}
      </Button>
    ),
  },
  {
    field: 'message',
    headerName: 'Message',
    width: 190,
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

const rows1 = [
  {
    id: 1,
    amount: '50,000',
    date: '23/10/2023',
    status: 'active',
    message: 'acMM jhsd yhewgsdy tive',
  },
];

export default function LoanBreakDownTable() {
  const loanState = useSelector((state) => state.loan);

  const loanObj = loanState?.loan?.payment || [];
  console.log(loanObj);
  function convertKoboToNaira(koboAmount) {
    const nairaAmount = koboAmount / 100; // 100 kobo equals 1 naira
    return nairaAmount;
  }

  const rows = loanObj?.map((loan, index) => {
    // Create loan data for each item
    const loanData = {
      // id: loan?.id || 0,
      id: index + 1,
      amount: new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
      }).format(convertKoboToNaira(loan?.amount)),
      date: moment(loan?.createdAt).format('L'),
      status: loan?.status,
      message: loan?.message ? loan?.message : '',
    };

    // You can also add the index if needed
    loanData.index = index;

    return loanData;
  });

  // console.log(loansData);

  // console.log(loanObj);
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
            paginationModel: { page: 0, pageSize: 7 },
          },
        }}
        pageSizeOptions={[7, 15]}
      />
    </div>
  );
}
