// import { useState } from 'react';
import PropTypes from 'prop-types';

import { TableRow } from '@mui/material';

import Label from 'src/components/label';

import { Link } from 'react-router-dom';

import TableCell from '@mui/material/TableCell';

// ----------------------------------------------------------------------

export default function UserTableRow({
  selected,
  id,
  firstName,
  lastName,
  phoneNumber,
  status,
  email,
  dateRegistered,
  dateVerified,
}) {
  // const [open, setOpen] = useState(null);

  // const handleOpenMenu = (event) => {
  //   setOpen(event.currentTarget);
  // };

  // const handleCloseMenu = () => {
  //   setOpen(null);
  // };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        {/* <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell> 
        */}

        <TableCell>
          <Link to={`/user/${id}`}>{firstName}</Link>
        </TableCell>

        <TableCell>{lastName}</TableCell>

        <TableCell>{phoneNumber}</TableCell>
        <TableCell>{email}</TableCell>

        <TableCell>
          <Label color={(status === 'unverified' && 'error') || 'success'}>{status}</Label>
        </TableCell>
        <TableCell align="center">{dateRegistered}</TableCell>
        <TableCell align="center">{dateVerified}</TableCell>

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

UserTableRow.propTypes = {
  firstName: PropTypes.any,
  lastName: PropTypes.any,
  id: PropTypes.any,
  // handleClick: PropTypes.func,
  phoneNumber: PropTypes.any,
  dateRegistered: PropTypes.any,
  dateVerified: PropTypes.any,
  email: PropTypes.any,
  selected: PropTypes.any,
  status: PropTypes.string,
};
