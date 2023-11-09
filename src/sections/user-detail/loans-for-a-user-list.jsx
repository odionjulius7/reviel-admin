import * as React from 'react';
import { useEffect } from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

const columns = [
  {
    field: 'id',
    headerName: 'Credit ID',
    width: 90,
    renderCell: (params) => <a href={`/loan/${params.row.id}`}>{params.value}</a>,
  },
  { field: 'lender', headerName: 'Lender', width: 130 },
  { field: 'borrower', headerName: 'Borrower', width: 130 },
  {
    field: 'amount',
    headerName: 'Loan Amount',
    // type: 'number',
    width: 130,
  },
  {
    field: 'expectedReturn',
    headerName: 'Expected Return',
    // type: 'number',
    width: 120,
  },
  {
    field: 'balance',
    headerName: 'Balance',
    // type: 'number',
    width: 120,
  },
  {
    field: 'initiationDate',
    headerName: 'Initiation Date',
    // type: 'number',
    width: 130,
  },
  {
    field: 'dueDate',
    headerName: 'Due Date',
    // type: 'number',
    width: 130,
  },
  {
    field: 'status',
    headerName: 'Status',
    // type: 'number',
    width: 90,
  },
];

const rows1 = [
  {
    id: 1432,
    lender: 'Mike',
    borrower: 'Joy',
    amount: '50,000',
    expectedReturn: '55,000',
    balance: '55,000',
    initiationDate: '11/28/2023',
    dueDate: '11/28/2023',
    status: 'not paid',
  },
];

export default function LoanForAUserTable() {
  const loanState = useSelector((state) => state.loan);
  // console.log(loanState);
  console.log(loanState?.userloansMetricsData);
  const loanObj = loanState?.userloansMetricsData?.loan_list || [];

  const rows = loanObj?.map((loan, index) => {
    const loanData = {
      id: loan?.id || 0,
      lender: loan?.lender_first_name,
      borrower: loan?.borrower_first_name,
      loanAmount: new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
      }).format(loan?.amount),
      expectedReturn: new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
      }).format(loan?.expected_return),
      balance: new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
      }).format((loan?.expected_return ?? 0) - (loan?.amount_paid ?? 0)),
      initiationDate: moment(loan?.createdAt).format('L'),
      dueDate: moment(loan?.due_date).format('L'),
      status: loan?.status ? 'paid' : 'not paid',
    };

    // You can also add the index if needed
    loanData.index = index;

    return loanData;
  });

  // console.log(loansData);

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
      {/* <h2 style={{ padding: '2rem 0rem 1rem 1rem' }}></h2> */}
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 7 },
          },
        }}
        pageSizeOptions={[7, 15]}
        // checkboxSelection
      />
    </div>
  );
}
