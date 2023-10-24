// import { useState } from 'react';

// import Card from '@mui/material/Card';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

import Iconify from 'src/components/iconify';

import CreditTipTable from '../credit-tip-table';

// ----------------------------------------------------------------------

export default function CreditTipPage() {
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">&nbsp;</Typography>

        <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          Add New
        </Button>
      </Stack>
      {/* <Card> */}
      <Grid
        sx={{
          padding: '0 1rem',
        }}
        // xs={12}
        // sm={6}
        // md={6}
      >
        <CreditTipTable />
      </Grid>
      {/* </Card> */}
    </Container>
  );
}
