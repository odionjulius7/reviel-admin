import { useEffect } from 'react';
// import { useState } from 'react';

import { getAloan, resetState } from 'src/features/Loan/loanSlice';
import { useDispatch, useSelector } from 'react-redux';
// import Card from '@mui/material/Card';
import { useParams } from 'react-router-dom';

import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

import LoanDetailsTable from '../loan-details-table';
import LoanBreakDownTable from '../loan-breakdown';

// ----------------------------------------------------------------------

export default function LoanDetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const loanState = useSelector((state) => state.loan);
  const authState = useSelector((state) => state);
  const token = authState?.auth.user?.data?.token;
  // console.log(loanState?.loan);

  useEffect(() => {
    const ids = { token, id };
    dispatch(resetState());
    dispatch(getAloan(ids));
  }, [dispatch, token, id]);

  return (
    <Container>
      {/* <Card> */}
      <Grid
        sx={{
          padding: '0 1rem',
        }}
        // xs={12}
        // sm={6}
        // md={6}
      >
        <LoanDetailsTable />
      </Grid>
      <Grid
        sx={{
          padding: '0 1rem',
          marginTop: '4.2rem',
        }}
        // xs={12}
        // sm={6}
        // md={6}
      >
        <h2>Loan Repayment Breakdown</h2>
        <LoanBreakDownTable />
      </Grid>
      {/* </Card> */}
    </Container>
  );
}
