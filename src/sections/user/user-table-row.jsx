// import { useState } from 'react';
import PropTypes from 'prop-types';

import { TableRow } from '@mui/material';

import { Link } from 'react-router-dom';

import Label from 'src/components/label';

import moment from 'moment';

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
    <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
      {/* <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell> 
        */}

      <TableCell>
        <Link to={`/user/${id}`}>{id}</Link>
      </TableCell>
      <TableCell>{firstName}</TableCell>

      <TableCell>{lastName}</TableCell>

      <TableCell>{phoneNumber}</TableCell>
      <TableCell>{email}</TableCell>

      <TableCell>
        <Label color={(status === 'unverified' && 'error') || 'success'}>{status}</Label>
      </TableCell>
      <TableCell align="center">{moment(dateRegistered).format('L')}</TableCell>
      <TableCell align="center">{moment(dateVerified).format('L')}</TableCell>
    </TableRow>
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
