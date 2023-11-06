import { useEffect } from 'react';
// import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { getUserMetrics } from 'src/features/Users/usersSlice';

import { getMonthlyloanLineChart, getloanMetric } from 'src/features/Loan/loanSlice';

import { useDispatch, useSelector } from 'react-redux';

import AppCurrentVisits from '../app-current-visits';

import AppWebsiteVisits from '../app-website-visits';

import AppWidgetSummary from '../app-widget-summary';

import DashboardTable from '../DashboardTable';

export default function AppView() {
  const dispatch = useDispatch();
  const loanState = useSelector((state) => state.loan);
  const userState = useSelector((state) => state.users);
  const authState = useSelector((state) => state);

  const token = authState?.auth.user?.data?.token;
  const { user } = authState.auth;
  const user1 = user?.data?.user;

  // console.log(loanState?.loanLineChartData);
  const loan_metrics = loanState?.loanMetrics;
  const userMetrics = userState?.userMetrics;

  useEffect(() => {
    // dispatch(resetState()); // at first render alway clear the state(like loading, success etc)
    dispatch(getloanMetric(token));
    dispatch(getMonthlyloanLineChart(token));
  }, [dispatch, token]);
  //
  useEffect(() => {
    dispatch(getUserMetrics(token));
  }, [dispatch, token]);
  //
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi {user1?.first_name}, Welcome 👋
      </Typography>

      <Grid container spacing={3}>
        {/* small */}
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Active Loans "
            total={loan_metrics?.loans_active}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Over Due Payment"
            total={loan_metrics?.loans_due}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="No. Of Loans Initiated"
            total={loan_metrics?.loans_initiated}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        {/* small */}
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Total amount of loans initated"
            total={loan_metrics?.total_amount}
            color="info"
            // icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
            icon={<span style={{ fontSize: '30px' }}>&#8358; </span>}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="No. Of Pending KYC Requests"
            total={loan_metrics?.kyc_pending || 0.01}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="No. Of Approved KYC Requests"
            total={loan_metrics?.kyc_approved}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="No. Of Declined KYC Requests"
            total={loan_metrics?.kyc_notapproved}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

        {/* Metric End Here */}

        <Grid
          xs={12}
          md={6}
          lg={9}
          sx={{
            marginTop: '2rem',
          }}
        >
          <AppWebsiteVisits
            title="Loan Performance"
            // subheader="(+43%) than last year"
            chart={{
              labels: [
                '01/01/2023',
                '02/01/2023',
                '03/01/2023',
                '04/01/2023',
                '05/01/2023',
                '06/01/2023',
                '07/01/2023',
                '08/01/2023',
                '09/01/2023',
                '10/01/2023',
                '11/01/2023',
                '12/01/2023',
              ],
              series: [
                {
                  name: 'no. of loans',
                  type: 'line',
                  // type: 'column',
                  fill: 'solid',
                  data: [23, 11, 0, 0, 20, 20, 0, 60, 0, 0],
                },
                {
                  name: 'no. of overdue loans',
                  type: 'line',
                  fill: 'solid',
                  data: [44, 55, 41, 67, 22, 43, 21, 0, 0, 70, 20],
                },
                {
                  name: 'no. of completed loans',
                  type: 'line',
                  fill: 'solid',
                  data: [11, 25, 36, 0, 0, 0, 0, 52, 59, 0, 39],
                },
                {
                  name: 'no. of active loans',
                  type: 'line',
                  fill: 'solid',
                  data: [90, 25, 64, 52, 59, 36, 39, 11, 25, 36, 30],
                },
              ],
            }}
          />
        </Grid>

        <Grid
          xs={12}
          md={6}
          lg={3}
          sx={{
            marginTop: '2rem',
          }}
        >
          <AppCurrentVisits
            title="Users"
            chart={{
              series: [
                { label: 'Verified', value: userMetrics?.verified || 0.01 },
                { label: 'Unverified', value: userMetrics?.not_verified || 0.01 },
                // { label: 'Series', value: 1443 },
                // { label: 'Africa', value: 4443 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12}>
          <DashboardTable />
        </Grid>
      </Grid>
    </Container>
  );
}
