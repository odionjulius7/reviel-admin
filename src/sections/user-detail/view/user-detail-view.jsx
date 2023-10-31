import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
//

import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
import { Card, Grid } from '@mui/material';

// import Iconify from 'src/components/iconify';

import AppWidgetSummary from 'src/sections/overview/app-widget-summary';

import UserDetailTable from '../user-detail-table';

// ----------------------------------------------------------------------

export default function UserDetailPage() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      {/* tab */}
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
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
                mt={8}
                gap={15}
              >
                <Card
                  sx={{
                    background: '#ffffff',
                    width: '200px',
                    height: 'auto',
                  }}
                >
                  hi
                </Card>
                <UserDetailTable />
                <Grid>
                  <Grid sx={{ marginBottom: '1.5rem' }} xs={12} sm={6} md={3}>
                    <AppWidgetSummary title="Number Of Loans" total={10} color="success" />
                  </Grid>
                  <Grid sx={{ marginBottom: '1.5rem' }} xs={12} sm={6} md={3}>
                    <AppWidgetSummary title="Number Of Loans Borrowed" total={4} color="success" />
                  </Grid>
                  <Grid xs={12} sm={6} md={3}>
                    <AppWidgetSummary title="Number Of Loans Lent" total={6} color="success" />
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
      {/* tab */}
    </Container>
  );
}
