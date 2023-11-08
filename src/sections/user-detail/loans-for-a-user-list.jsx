import * as React from 'react';
import { useEffect } from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';

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

const rows = [
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
  const dispatch = useDispatch();
  const loanState = useSelector((state) => state.loan);
  const authState = useSelector((state) => state);
  // console.log(loanState);
  const token = authState?.auth.user?.data?.token;
  // console.log(loanState?.loanTransactionData);

  useEffect(() => {
    // dispatch(resetState()); // at first render alway clear the state(like loading, success etc)
    // dispatch(loanTransaction(token));
    // dispatch(allLoanRecords(token));
  }, [dispatch, token]);
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
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
      />
    </div>
  );
}
