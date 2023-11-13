import { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Grid from '@mui/material/Unstable_Grid2';

// import { loans } from 'src/_mock/loanListT';

// import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

import AppWidgetSummary from 'src/sections/overview/app-widget-summary';

import { getloanMetric, allLoanRecords, searchLoansByName } from 'src/features/Loan/loanSlice';

import { useDispatch, useSelector } from 'react-redux';

import TableNoData from '../table-no-data';
import TableEmptyRows from '../table-empty-rows';
import UserTableToolbar from '../user-table-toolbar';

import LoansTableRow from '../loan-table-row';
import LoanTableHead from '../loan-table-head';

import { emptyRows, applyFilter, getComparator } from '../utils';

// ----------------------------------------------------------------------

export default function LoanListPage() {
  const dispatch = useDispatch();
  const loanState = useSelector((state) => state.loan);
  const authState = useSelector((state) => state);
  const token = authState?.auth.user?.data?.token;
  const loan_metrics = loanState?.loanMetrics;
  // console.log(loan_metrics);
  function convertKoboToNaira(koboAmount) {
    const nairaAmount = koboAmount / 100; // 100 kobo equals 1 naira
    return nairaAmount;
  }

  const lones = loanState?.loans || [];
  // console.log(loanState);

  // Table Loans
  const loans = lones?.map((loan, index) => {
    // Create loan data for each item
    const loanData = {
      creditId: loan.id,
      lender: loan.lender_first_name,
      borrower: loan.borrower_first_name,
      loanAmount: convertKoboToNaira(loan.amount),
      expectedReturn: convertKoboToNaira(loan.expected_return),
      balance:
        (convertKoboToNaira(loan.expected_return) ?? 0) -
        (convertKoboToNaira(loan?.amount_paid) ?? 0),
      initiationDate: loan.createdAt,
      dueDate: loan.due_date,
      status: loan.status ? 'completed' : 'active',
    };

    // You can also add the index if needed
    loanData.index = index;

    return loanData;
  });

  //
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  // const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSort = (event, creditId) => {
    const isAsc = orderBy === creditId && order === 'asc';
    if (creditId !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(creditId);
    }
  };

  //
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
    inputData: loans,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;
  //

  useEffect(() => {
    dispatch(getloanMetric(token));
    dispatch(allLoanRecords(token));
  }, [dispatch, token]);
  //

  const [creditid, setCreditid] = useState('');
  //
  useEffect(() => {
    let timer;
    // Define a delay (e.g., 2000 milliseconds = 2 seconds)
    const delay = 2000;
    // Check if the 'name' has a value and it's not empty
    if (creditid.trim() !== '') {
      // Clear the existing timer, if any
      clearTimeout(timer);
      // Start a new timer to fetch data after the delay
      timer = setTimeout(() => {
        // Dispatch the action to fetch data using the 'name'
        const nums = { creditid, token };
        dispatch(searchLoansByName(nums));
      }, delay);
    }

    // Clean up the timer if the component unmounts or 'name' changes
    return () => {
      clearTimeout(timer);
    };
  }, [creditid, dispatch, token]);

  const handleUsernameChange = (e) => {
    setCreditid(e.target.value); // Update the username state with the input value
    console.log(e.target.value);
  };
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Loans</Typography>
      </Stack>

      <Grid
        container
        spacing={2}
        sx={{
          margin: '1rem 0 4rem 0',
        }}
      >
        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="Total no. of loans"
            total={
              (loan_metrics?.loans_active || 0) +
              (loan_metrics?.loans_due || 0) +
              (loan_metrics?.loans_pending || 0) +
              (loan_metrics?.loans_completed || 0)
            }
            color="info"
            // icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
            // icon={<span style={{ fontSize: '30px' }}>&#8358; </span>}
          />
        </Grid>

        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="No. Of Over Due Loans"
            total={loan_metrics?.loans_due || 0.001}
            color="error"
            // icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

        {/* small */}
        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="Amount Of Loans Initiated By Lender"
            total={convertKoboToNaira(loan_metrics?.total_amount_initiated_lender) || 0.001}
            color="warning"
            // icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="No. Of Pending Loans"
            total={loan_metrics?.loans_pending || 0.001}
            color="success"
            // icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="No. Completed Loans"
            total={loan_metrics?.loans_completed || 0.001}
            color="success"
            // icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="Amount Of Loans Initiated By Borrower"
            total={convertKoboToNaira(loan_metrics?.total_amount_initiated_borrower) || 0.001}
            color="success"
            // icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="No. Of Active Loans"
            total={loan_metrics?.loans_active || 0.001}
            color="info"
            // icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="No. Of Loans Initiated By Lender"
            total={loan_metrics?.lender_initiated || 0.001}
            color="info"
            // icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="No. Of Loans Initiated By Borrower"
            total={loan_metrics?.borrower_initiated || 0.001}
            color="info"
            // icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>
      </Grid>

      <Card>
        <UserTableToolbar
          // numSelected={selected.length}
          filterName={creditid}
          onFilterName={handleUsernameChange}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <LoanTableHead
                order={order}
                orderBy={orderBy}
                rowCount={loans?.length}
                // numSelected={selected.length}
                onRequestSort={handleSort}
                // onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  { id: 'creditId', label: 'Credit ID', align: 'center' },
                  { id: 'lender', label: 'Lender' },
                  { id: 'borrower', label: 'Borrower' },
                  { id: 'loanAmount', label: 'Loan Amount' },
                  { id: 'expectedReturn', label: 'Expected Return' },
                  { id: 'balance', label: 'Balance', align: 'center' },
                  { id: 'initiationDate', label: 'Initiation Date', align: 'center' },
                  { id: 'dueDate', label: 'Due Date' },
                  { id: 'status', label: 'Status' },
                  { id: '' },
                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <LoansTableRow
                      key={row.creaditId}
                      creditId={row.creditId}
                      lender={row.lender}
                      borrower={row.borrower}
                      loanAmount={row.loanAmount}
                      expectedReturn={row.expectedReturn}
                      status={row.status}
                      balance={row.balance}
                      initiationDate={row.initiationDate}
                      dueDate={row.dueDate}
                      // selected={selected.indexOf(row.name) !== -1}
                      // handleClick={(event) => handleClick(event, row.creditId)}
                    />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, loans?.length)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={loans?.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}
