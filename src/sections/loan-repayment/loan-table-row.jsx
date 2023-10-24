import { useState } from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import { Link } from 'react-router-dom';

// ----------------------------------------------------------------------

export default function LoansTableRow({
  selected,
  lender,
  borrower,
  status,
  repaymentDate,
  amount,
  creditId,
  message,
}) {
  const [open, setOpen] = useState(null);

  // const handleOpenMenu = (event) => {
  //   setOpen(event.currentTarget);
  // };

  // const handleCloseMenu = () => {
  //   setOpen(null);
  // };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell align="center">
          <Link to={`/loan/${creditId}`}>{creditId}</Link>
        </TableCell>
        <TableCell>{lender}</TableCell>

        <TableCell>{borrower}</TableCell>

        <TableCell>{amount}</TableCell>

        <TableCell>{repaymentDate}</TableCell>
        <TableCell>
          <Label
            color={
              (status === 'contested' && 'error') ||
              (status === 'pending' && 'warning') ||
              'success'
            }
          >
            {status}
          </Label>
        </TableCell>
        <TableCell>{message}</TableCell>

        {/* <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell> */}
      </TableRow>

      {/* <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover> */}
    </>
  );
}

LoansTableRow.propTypes = {
  // avatarUrl: PropTypes.any,
  // handleClick: PropTypes.func,
  lender: PropTypes.any,
  borrower: PropTypes.any,
  amount: PropTypes.any,
  selected: PropTypes.any,
  status: PropTypes.string,
  repaymentDate: PropTypes.any,
  message: PropTypes.any,
  creditId: PropTypes.any,
};
