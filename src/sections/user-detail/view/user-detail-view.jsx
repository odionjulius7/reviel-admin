import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { UnsuspendAUser, getAUser, resetState, suspendAUser } from 'src/features/Users/usersSlice';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
//

import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

import { Button, Card, Grid } from '@mui/material';

import { toast } from 'react-toastify';

// import Iconify from 'src/components/iconify';

import AppWidgetSummary from 'src/sections/overview/app-widget-summary';

import UserDetailTable from '../user-detail-table';

// ----------------------------------------------------------------------

export default function UserDetailPage() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.users);
  const authState = useSelector((state) => state);
  const token = authState?.auth.user?.data?.token;
  const { id } = useParams();
  const { isSuccess1, isError, isLoading, unsuspendData, suspendData } = userState;

  useEffect(() => {
    if (isSuccess1) {
      toast.success('successfully suspended user!');
    }

    if (isError) {
      toast.error('Something Went Wrong!');
    }
  }, [isSuccess1, isError, suspendData]);

  useEffect(() => {
    const ids = { token, id };
    dispatch(resetState());
    dispatch(getAUser(ids));
  }, [dispatch, token, id, unsuspendData, suspendData]);

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
                gap={13}
              >
                <Card
                  sx={{
                    background: '#ffffff',
                    width: '30%x',
                    height: 'auto',
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
                      {userState?.isLoading ? 'loading...' : 'Unsuspend User'}
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
                      {userState?.isLoading ? 'loading...' : 'Suspend User'}
                    </Button>
                  )}
                </Card>
                <UserDetailTable item={userState?.user} />
                <Grid>
                  <Grid sx={{ marginBottom: '1.2rem' }} xs={12} sm={6} md={3}>
                    <AppWidgetSummary title="Number Of Loans" total={10} color="success" />
                  </Grid>
                  <Grid sx={{ marginBottom: '1.2rem' }} xs={12} sm={6} md={3}>
                    <AppWidgetSummary title="Number Of Loans Borrowed" total={4} color="success" />
                  </Grid>
                  <Grid xs={12} sm={6} md={3}>
                    <AppWidgetSummary title="Number Of Loans Lent" total={6} color="success" />
                  </Grid>
                </Grid>
              </Stack>
              <Stack
                sx={{
                  width: '60%',
                  margin: '1rem auto',
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
            </Grid>
            {/*  */}
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
      {/* tab */}
    </Container>
  );
}
