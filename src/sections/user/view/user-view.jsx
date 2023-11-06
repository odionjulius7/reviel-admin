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

import Scrollbar from 'src/components/scrollbar';

import Grid from '@mui/material/Unstable_Grid2';

import { getUserMetrics, getUsers } from 'src/features/Users/usersSlice';

import { useDispatch, useSelector } from 'react-redux';

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
  // console.log(userMetrics);
  const token = authState?.auth.user?.data?.token;
  // Table Users
  const users = userState?.users?.data?.map((user, index) => {
    // Create loan data for each item
    const userData = {
      id: user.id,
      firstName: user?.first_name,
      lastName: user?.last_name,
      phoneNumber: user?.phone,
      status: user?.kyc_verification_status ? 'verified' : 'unverified',
      email: user?.email,
      dateRegistered: user?.createdAt,
      dateVerified: '??',
    };

    // You can also add the index if needed
    userData.index = index;

    return userData;
  });
  //
  // console.log(usersData || []);
  //
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

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

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
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
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Users</Typography>

        {/* <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          New User
        </Button> */}
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
          filterName={filterName}
          onFilterName={handleFilterByName}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={users?.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={[
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
