import { useEffect, useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

// import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

import { loanPayment } from 'src/_mock/loanPayment';

import { useDispatch, useSelector } from 'react-redux';

import { loanTransaction } from 'src/features/Loan/loanSlice';

import moment from 'moment';

import TableNoData from '../table-no-data';
import TableEmptyRows from '../table-empty-rows';
// import UserTableToolbar from '../user-table-toolbar';
import LoansTableRow from '../loan-table-row';
import LoanTableHead from '../loan-table-head';

import { emptyRows, applyFilter, getComparator } from '../utils';

// ----------------------------------------------------------------------

export default function LoanRepaymentPage() {
  const dispatch = useDispatch();
  const loanState = useSelector((state) => state.loan);
  const authState = useSelector((state) => state);
  console.log(loanState?.loanTransactionData);
  const token = authState?.auth.user?.data?.token;

  const loans1 = loanState?.loanTransactionData || [];

  //
  const rows = loans1?.map((loan, index) => {
    // Create loan data for each item
    const loanData = {
      creditId: loan?.loan_id || 0,
      lender: loan?.lender?.first_name,
      borrower: loan?.borrower?.first_name,
      amount: new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
      }).format(loan?.amount),
      repaymentDate: moment(loan?.createdAt).format('L'),
      status: loan?.status,
      message: '',
    };
    // You can also add the index if needed
    loanData.index = index;

    return loanData;
  });
  console.log(rows);

  useEffect(() => {
    // dispatch(resetState()); // at first render alway clear the state(like loading, success etc)
    dispatch(loanTransaction(token));
  }, [dispatch, token]);

  //
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSort = (event, creditId) => {
    const isAsc = orderBy === creditId && order === 'asc';
    if (creditId !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(creditId);
    }
  };

  // const handleClick = (event, name) => {
  //   const selectedIndex = selected.indexOf(name);
  //   let newSelected = [];
  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, name);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1));
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1)
  //     );
  //   }
  //   setSelected(newSelected);
  // };

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
    inputData: rows,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5} mt={4}>
        <Typography variant="h4">Loan Repayment History</Typography>
      </Stack>

      <Card>
        {/* <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          // onFilterName={handleFilterByName}
        /> */}

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <LoanTableHead
                order={order}
                orderBy={orderBy}
                rowCount={loanPayment.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                // onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  { id: 'creditId', label: 'Credit ID', align: 'center' },
                  { id: 'lender', label: 'Lender' },
                  { id: 'borrower', label: 'Borrower' },
                  { id: 'amount', label: 'Amount' },
                  { id: 'repaymentDate', label: 'Repayment Date' },
                  { id: 'status', label: 'Status' },
                  { id: 'message', label: 'Message' },
                  { id: '' },
                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <LoansTableRow
                      key={row.CreaditId}
                      creditId={row.creditId}
                      lender={row.lender}
                      borrower={row.borrower}
                      amount={row.amount}
                      status={row.status}
                      repaymentDate={row.repaymentDate}
                      message={row.message}
                      selected={selected.indexOf(row.name) !== -1}
                      // handleClick={(event) => handleClick(event, row.creditId)}
                    />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, loanPayment.length)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={loanPayment.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}
