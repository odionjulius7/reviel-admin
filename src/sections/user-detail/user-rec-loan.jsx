import * as React from 'react';

import { DataGrid } from '@mui/x-data-grid';
// import { Button } from '@mui/material';

const columns = [
  {
    field: 'id',
    headerName: 'S/N',
    width: 70,
    // renderCell: (params) => <a href={`/item/${params.row.id}`}>{params.value}</a>,
  },
  { field: 'lastName', headerName: 'Last Name', width: 120 },
  { field: 'firstName', headerName: 'First Name', width: 120 },
  { field: 'email', headerName: 'Email', width: 190 },
  { field: 'lender_borrower', headerName: 'Were you the lender or borrower', width: 190 },
  { field: 'lender', headerName: 'Lender Name', width: 150 },
  { field: 'lenderId', headerName: 'Lender ID', width: 90 },
  { field: 'borrower', headerName: 'Borrower Name', width: 150 },
  { field: 'borrowerId', headerName: 'Borrower ID', width: 90 },
  { field: 'loanTakenDate', headerName: 'Date Loan Was Taken', width: 150 },
  { field: 'loanAmount', headerName: 'Loan Amount', width: 100 },
  { field: 'loanInterest', headerName: 'Loan Interest', width: 100 },
  { field: 'repaymentSchedule', headerName: 'Repayment Schedule', width: 150 },
  { field: 'wasLoanFullyRepaid', headerName: 'Was Loan Fully Repaid', width: 90 },
];

const rows = [
  {
    id: 12,
    lastName: 'James',
    firstName: 'Jude',
    email: 'hude@gmail.com',
    lender_borrower: 'either',
    lender: 'Doe',
    lenderId: '2345',
    borrower: 'Not Doe',
    borrowerId: '5050',
    loanTakenDate: '12/23/2023',
    loanAmount: '39000',
    loanInterest: '9000',
    repaymentSchedule: 'hgehsfb',
    wasLoanFullyRepaid: 'hgehsfb',
  },
];

export default function UserRecLoanTable() {
  return (
    <div
      style={{
        minHeight: 200,
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        boxShadow:
          '0 0 2px 0 rgba(145, 158, 171, 0.08), 0 12px 24px -4px rgba(145, 158, 171, 0.08)',
      }}
    >
      {/* <h2 style={{ padding: '2rem 0rem 1rem 1rem' }}>User Recorded Loans</h2> */}
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
