// import { useState } from 'react';

// import Card from '@mui/material/Card';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

import Iconify from 'src/components/iconify';

import LoanDetailsTable from '../loan-details-table';
import LoanBreakDownTable from '../loan-breakdown';

// ----------------------------------------------------------------------

export default function LoanDetailsPage() {
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
