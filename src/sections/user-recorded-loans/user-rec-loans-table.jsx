import * as React from 'react';
import { useEffect } from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { allUsersRecordedLoans } from 'src/features/Loan/loanSlice';
import moment from 'moment';
// import { Button } from '@mui/material';

const columns = [
  {
    field: 'id',
    headerName: 'S/N',
    width: 70,
    // renderCell: (params) => <a href={`/item/${params.row.id}`}>{params.value}</a>,
  },
  { field: 'lastName', headerName: 'Last Name', width: 100 },
  { field: 'firstName', headerName: 'First Name', width: 100 },
  { field: 'email', headerName: 'Email', width: 90 },
  { field: 'lender_borrower', headerName: 'Were you the lender or borrower', width: 150 },
  { field: 'lender', headerName: 'Lender Name', width: 100 },
  { field: 'lenderId', headerName: 'Lender ID', width: 90 },
  { field: 'borrower', headerName: 'Borrower Name', width: 100 },
  { field: 'borrowerId', headerName: 'Borrower ID', width: 90 },
  { field: 'loanTakenDate', headerName: 'Date Loan Was Taken', width: 150 },
  { field: 'loanAmount', headerName: 'Loan Amount', width: 100 },
  { field: 'loanInterest', headerName: 'Loan Interest', width: 100 },
  { field: 'repaymentSchedule', headerName: 'Repayment Schedule', width: 150 },
  { field: 'wasLoanFullyRepaid', headerName: 'Was Loan Fully Repaid', width: 90 },
];

const rows1 = [
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

export default function UserRecordedLoanTable() {
  const dispatch = useDispatch();
  const loanState = useSelector((state) => state.loan);
  const authState = useSelector((state) => state);
  const token = authState?.auth.user?.data?.token;
  console.log(loanState?.userRecordedLoans);

  const loans1 = loanState?.userRecordedLoans || [];

  //
  const rows = loans1?.map((loan, index) => {
    // Create loan data for each item
    const loanData = {
      id: loan?.id || 0,
      lastName: loan?.last_name,
      firstName: loan?.first_name,
      email: 'empty',
      lender_borrower: loan?.user_type,
      lender: loan?.user_type === 'Lender' ? loan?.first_name : '',
      lenderId: loan?.user_type === 'Lender' ? loan?.user_id : '',
      borrower: loan?.user_type === 'Borrower' ? loan?.loan?.first_name : '',
      borrowerId: loan?.user_type === 'Borrower' ? loan?.user_id : '',
      loanTakenDate: moment(loan?.date_loan_taken).format('L'),
      loanAmount: new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
      }).format(loan?.loan_amount),
      loanInterest: new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
      }).format(loan?.loan_interest),
      repaymentSchedule: loan?.repayment_schedule,
      wasLoanFullyRepaid: '',
    };
    // You can also add the index if needed
    loanData.index = index;

    return loanData;
  });
  // console.log(loansData);
  //

  useEffect(() => {
    dispatch(allUsersRecordedLoans(token));
  }, [dispatch, token]);
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
