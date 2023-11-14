import PropTypes from 'prop-types';

import { useState } from 'react';

import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function UserTableToolbar({ numSelected, setPostStatus, filterName, onFilterName }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Toolbar
      sx={{
        height: 96,
        display: 'flex',
        justifyContent: 'space-between',
        p: (theme) => theme.spacing(0, 1, 0, 3),
        ...(numSelected > 0 && {
          color: 'primary.main',
          bgcolor: 'primary.lighter',
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <OutlinedInput
          value={filterName}
          onChange={onFilterName}
          placeholder="Search loan id..."
          startAdornment={
            <InputAdornment position="start">
              <Iconify
                icon="eva:search-fill"
                sx={{ color: 'text.disabled', width: 20, height: 20 }}
              />
            </InputAdornment>
          }
        />
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <Iconify icon="eva:trash-2-fill" />
          </IconButton>
        </Tooltip>
      ) : (
        // <Tooltip title="Filter list">
        //   <IconButton>
        //     <Iconify icon="ic:round-filter-list" />
        //   </IconButton>
        // </Tooltip>
        <>
          <Tooltip title="Filter list">
            <IconButton onClick={handleClick}>
              <Iconify icon="ic:round-filter-list" />
            </IconButton>
          </Tooltip>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem
              onClick={() => {
                setPostStatus('active');
                handleClose();
              }}
            >
              Active
            </MenuItem>
            <MenuItem
              onClick={() => {
                setPostStatus('completed');
                handleClose();
              }}
            >
              Completed
            </MenuItem>
          </Menu>
        </>
      )}
    </Toolbar>
  );
}

UserTableToolbar.propTypes = {
  numSelected: PropTypes.number,
  setPostStatus: PropTypes.any,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
};
