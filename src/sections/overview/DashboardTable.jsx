import * as React from 'react';
import { useEffect } from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { allLoanRecords, loanTransaction } from 'src/features/Loan/loanSlice';

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
    field: 'amount',
    headerName: 'Amount',
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
    field: 'repaymentDate',
    headerName: 'Repayment Date',
    // type: 'number',
    width: 160,
  },
  {
    field: 'status',
    headerName: 'Status',
    // type: 'number',
    width: 130,
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
    amount: '50,000',
    repaymentDate: '11/28/2023',
    status: 'pending',
    message: 'lorem ipsum make a ka dhh jhfdh',
  },
];

export default function DashboardTable() {
  const dispatch = useDispatch();
  const loanState = useSelector((state) => state.loan);
  const authState = useSelector((state) => state);
  // console.log(loanState);
  const token = authState?.auth.user?.data?.token;
  // console.log(loanState?.loanTransactionData);

  useEffect(() => {
    // dispatch(resetState()); // at first render alway clear the state(like loading, success etc)
    dispatch(loanTransaction(token));
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
