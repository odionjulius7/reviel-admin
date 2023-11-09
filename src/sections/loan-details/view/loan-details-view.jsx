import { useEffect, useState } from 'react';
// import { useState } from 'react';

import { getAloan, resetState } from 'src/features/Loan/loanSlice';
import { useDispatch, useSelector } from 'react-redux';
// import Card from '@mui/material/Card';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';

import Tab from '@mui/material/Tab';

import TabList from '@mui/lab/TabList';

import TabPanel from '@mui/lab/TabPanel';

import TabContext from '@mui/lab/TabContext';

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

  useEffect(() => {
    const ids = { token, id };
    dispatch(resetState());
    dispatch(getAloan(ids));
  }, [dispatch, token, id]);

  //
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: '1px solid',
              borderColor: 'rgba(145, 158, 171, 0.2)',
              // borderRadius: '5px',
              // background: '#edeff1',
              margin: '4rem 2rem 0rem 0rem',
              width: '70%',
            }}
          >
            <TabList
              sx={{
                '.css-heg063-MuiTabs-flexContainer': {
                  justifyContent: 'center',
                  gap: '1rem',
                },
              }}
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab label="Loan Repayment Breakdown" value="1" sx={{ fontSize: '20px' }} />
              <Tab label="Agreements" value="2" sx={{ fontSize: '20px' }} />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Grid
              sx={{
                padding: '0 1rem',
                marginTop: '4.2rem',
              }}
              // xs={12}
              // sm={6}
              // md={6}
            >
              {/* <h2>Loan Repayment Breakdown</h2> */}
              <LoanBreakDownTable />
            </Grid>
          </TabPanel>
          <TabPanel value="2">2</TabPanel>
        </TabContext>
      </Box>

      {/* </Card> */}
    </Container>
  );
}
