import { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
// import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

// import { users } from 'src/_mock/user';
import Grid from '@mui/material/Unstable_Grid2';

import Scrollbar from 'src/components/scrollbar';

import { useDispatch, useSelector } from 'react-redux';

import {
  getUsers,
  getUserMetrics,
  searchUserByName,
  getUserStatus,
} from 'src/features/Users/usersSlice';

import AppWidgetSummary from 'src/sections/overview/app-widget-summary';

import TableNoData from '../table-no-data';
import UserTableRow from '../user-table-row';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import UserTableToolbar from '../user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';

// ----------------------------------------------------------------------

export default function UserPage() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.users);
  const authState = useSelector((state) => state);
  const userMetrics = userState?.userMetrics;

  const token = authState?.auth.user?.data?.token;
  // console.log(userState?.users1);
  // users1
  const users22 = userState?.users?.data;
  // Table Users
  const users = users22?.map((user, index) => {
    // Create loan data for each item
    const userData = {
      id: user.id,
      firstName: user?.first_name,
      lastName: user?.last_name,
      phoneNumber: user?.phone,
      status: user?.kyc_verification_status ? 'verified' : 'unverified',
      email: user?.email,
      dateRegistered: user?.createdAt,
      dateVerified: user?.verification_date,
    };

    // You can also add the index if needed
    userData.index = index;

    return userData;
  });
  //

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const dataFiltered = applyFilter({
    inputData: users || [
      {
        id: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        status: '',
        email: '',
        dateRegistered: '',
        dateVerified: '',
      },
    ],
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;
  //
  useEffect(() => {
    dispatch(getUsers(token));
    dispatch(getUserMetrics(token));
  }, [dispatch, token]);
  //

  const [name, setName] = useState('');
  //
  useEffect(() => {
    let timer;
    // Define a delay (e.g., 2000 milliseconds = 2 seconds)
    const delay = 2000;
    // Check if the 'name' has a value and it's not empty
    if (name.trim() !== '') {
      // Clear the existing timer, if any
      clearTimeout(timer);
      // Start a new timer to fetch data after the delay
      timer = setTimeout(() => {
        // Dispatch the action to fetch data using the 'name'
        const nums = { name, token };
        dispatch(searchUserByName(nums));
      }, delay);
    }

    // Clean up the timer if the component unmounts or 'name' changes
    return () => {
      clearTimeout(timer);
    };
  }, [name, dispatch, token]);

  const handleUsernameChange = (e) => {
    setName(e.target.value); // Update the username state with the input value
    console.log(e.target.value);
  };
  //
  const [userStatus, setUserStatus] = useState(null);
  const setPostStatus = (e) => {
    // console.log(e);
    setUserStatus(e);
  };

  useEffect(() => {
    if (userStatus !== null && typeof userStatus === 'boolean') {
      const items = { item: userStatus, token };
      dispatch(getUserStatus(items));
    }
  }, [userStatus, dispatch, token]);

  // console.log(userStatus);
  useEffect(() => {
    dispatch(getUsers(token));
    dispatch(getUserMetrics(token));
  }, [dispatch, token]);
  //

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Users</Typography>
      </Stack>

      <Grid
        container
        spacing={3}
        sx={{
          margin: '1rem 0 4rem 0',
        }}
      >
        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="Total no. of users"
            total={(userMetrics?.verified ?? 0) + (userMetrics?.not_verified ?? 0)}
            color="warning"
            // icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="Verified users"
            total={userMetrics?.verified}
            color="success"
            // icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="unverified users"
            total={userMetrics?.not_verified}
            color="success"
            // icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>
      </Grid>

      <Card>
        <UserTableToolbar
          numSelected={selected.length}
          setPostStatus={setPostStatus}
          filterName={name}
          onFilterName={handleUsernameChange}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={users?.length}
                numSelected={selected.length}
                // onRequestSort={handleSort}
                // onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  { id: 'id', label: 'User ID', align: 'center' },
                  { id: 'firstName', label: 'First Name' },
                  { id: 'lastName', label: 'Last Name' },
                  { id: 'phoneNumber', label: 'Phone Number' },
                  { id: 'email', label: 'Email', align: 'center' },
                  { id: 'status', label: 'Status' },
                  { id: 'dateRegistered', label: 'Date Registered' },
                  { id: 'dateVerified', label: 'Date Verified' },
                  { id: '' },
                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <UserTableRow
                      key={row.id}
                      id={row.id}
                      firstName={row.firstName}
                      lastName={row.lastName}
                      phoneNumber={row.phoneNumber}
                      status={row.status}
                      email={row.email}
                      dateRegistered={row.dateRegistered}
                      dateVerified={row.dateVerified}
                      selected={selected.indexOf(row.name) !== -1}
                      handleClick={(event) => handleClick(event, row.name)}
                    />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, users?.length)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={users?.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}
