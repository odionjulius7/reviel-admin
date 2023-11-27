import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';

import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';

import Tab from '@mui/material/Tab';

import TabList from '@mui/lab/TabList';

import TabPanel from '@mui/lab/TabPanel';

import TabContext from '@mui/lab/TabContext';
//

import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Card, Button, Grid } from '@mui/material';

// import Iconify from 'src/components/iconify';

import { getAUser, UnsuspendAUser, resetState, suspendAUser } from 'src/features/Users/usersSlice';

import AppWidgetSummary from 'src/sections/overview/app-widget-summary';

import { getAUserloansMetrics } from 'src/features/Loan/loanSlice';

import UserDetailTable from '../user-detail-table';
import UserRecLoanTable from '../user-rec-loan';
import LoanForAUserTable from '../loans-for-a-user-list';

// ----------------------------------------------------------------------

export default function UserDetailPage() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.users);
  const loanState = useSelector((state) => state.loan);
  const authState = useSelector((state) => state);
  const token = authState?.auth.user?.data?.token;
  const { id } = useParams();
  const { isSuccess1, isError, unsuspendData, suspendData } = userState;

  // console.log(loanState?.userloansMetricsData);

  useEffect(() => {
    if (isSuccess1) {
      toast.success('successfully suspended user!');
    }

    if (isError) {
      toast.error('Something Went Wrong!');
    }
  }, [isSuccess1, isError, suspendData]);

  useEffect(() => {
    const ids = { id, token };
    dispatch(resetState());
    dispatch(getAUser(ids));
  }, [dispatch, token, id, unsuspendData, suspendData]);

  useEffect(() => {
    const ids = { id, token };
    dispatch(getAUserloansMetrics(ids));
  }, [dispatch, token, id]);

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ids = { id, token };

  return (
    <Container>
      {/* tab */}
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box
            sx={{
              border: '1px solid',
              borderColor: 'rgba(145, 158, 171, 0.2)',
              borderRadius: '5px',
              background: '#edeff1',
              margin: '2rem 2rem 0rem 2rem',
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
              <Tab label="Profile" value="1" sx={{ fontSize: '20px' }} />
              <Tab label="Loans" value="2" sx={{ fontSize: '20px' }} />
              <Tab label="User Recorded Loans" value="3" sx={{ fontSize: '20px' }} />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Grid
              sx={{
                padding: '0 1rem',
              }}
            >
              <Stack
                direction="row"
                alignItems="start"
                // justifyContent="space-around"
                mb={5}
                mt={3}
                gap={20}
              >
                <UserDetailTable item={userState?.user} />
                <Grid>
                  <Grid sx={{ marginBottom: '1.2rem' }} xs={12} sm={6} md={4}>
                    <AppWidgetSummary
                      title="Volume Of Loans"
                      total={loanState?.userloansMetricsData?.loans || 0.001}
                      color="success"
                    />
                  </Grid>
                  <Grid sx={{ marginBottom: '1.2rem' }} xs={12} sm={6} md={3}>
                    <AppWidgetSummary
                      title="Volume Of Loans Borrowed"
                      total={loanState?.userloansMetricsData?.borrower || 0.001}
                      color="success"
                    />
                  </Grid>
                  <Grid xs={12} sm={6} md={3}>
                    <AppWidgetSummary
                      title="Volume Of Loans Lent"
                      total={loanState?.userloansMetricsData?.lender || 0.001}
                      color="success"
                    />
                  </Grid>
                </Grid>
              </Stack>
              <Grid
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '4rem',
                }}
              >
                <Stack
                  sx={{
                    width: '60%',
                    // margin: '1rem auto',
                  }}
                >
                  <Stack
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}
                    mt={1}
                    ml={1}
                    gap={1}
                  >
                    <Typography>KYC Type :</Typography>
                    <Typography> NIN</Typography>
                  </Stack>
                  <Stack
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}
                    mt={1}
                    ml={1}
                    gap={1}
                    mb={1}
                  >
                    <Typography>KYC ID :</Typography>
                    <Typography>13235</Typography>
                  </Stack>
                  <Stack
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}
                    ml={1}
                    gap={1}
                  >
                    <Typography>Link :</Typography>
                    <Typography>ywfgshshfbhgjsdthgrh</Typography>
                  </Stack>
                </Stack>
                {/* sus */}

                <Card
                  sx={{
                    background: '#ffffff',
                    // width: '30%x',
                    // height: 'auto',
                    padding: '3rem 2rem',
                  }}
                >
                  {userState?.user?.status ? (
                    <Button
                      style={{ marginLeft: '0.5rem' }}
                      variant="contained"
                      color="success"
                      onClick={() => {
                        dispatch(UnsuspendAUser(ids));
                      }}
                    >
                      {userState?.isLoading1 ? 'loading...' : 'Unsuspend User'}
                    </Button>
                  ) : (
                    <Button
                      style={{ marginLeft: '0.5rem' }}
                      variant="contained"
                      color="error"
                      onClick={() => {
                        dispatch(suspendAUser(ids));
                      }}
                    >
                      {userState?.isLoading1 ? 'loading...' : 'Suspend User'}
                    </Button>
                  )}
                </Card>
              </Grid>
            </Grid>
            {/*  */}
          </TabPanel>
          <TabPanel value="2">
            <LoanForAUserTable />
          </TabPanel>
          <TabPanel value="3">
            <UserRecLoanTable />
          </TabPanel>
        </TabContext>
      </Box>
      {/* tab */}
    </Container>
  );
}
