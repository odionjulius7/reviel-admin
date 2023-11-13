import * as React from 'react';

import PropTypes from 'prop-types';
// import { Fragment } from 'react';

import moment from 'moment';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ListItemAvatar from '@mui/material/ListItemAvatar';

export default function UserDetailTable({ item }) {
  // console.log(item);
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="center" gap={13}>
        <ListItemAvatar>
          <Typography>First Name :</Typography>
        </ListItemAvatar>
        <ListItemText
          // primary="Brunch this weekend?"
          secondary={
            <Typography
              sx={{ display: 'inline', marginLeft: '2rem' }}
              component="span"
              variant="body"
              color="text.primary"
            >
              {item?.first_name}
            </Typography>
          }
        />
      </ListItem>
      <Divider variant="fullWidth" component="li" />
      <ListItem alignItems="center" gap={13}>
        <ListItemAvatar>
          <Typography>Last Name :</Typography>
        </ListItemAvatar>
        <ListItemText
          // primary="Brunch this weekend?"
          secondary={
            <Typography
              sx={{ display: 'inline', marginLeft: '2rem' }}
              component="span"
              variant="body"
              color="text.primary"
            >
              {item?.last_name}
            </Typography>
          }
        />
      </ListItem>
      <Divider variant="fullWidth" component="li" />
      <ListItem alignItems="center" gap={13}>
        <ListItemAvatar>
          <Typography>Phone Number :</Typography>
        </ListItemAvatar>
        <ListItemText
          // primary="Brunch this weekend?"
          secondary={
            <Typography
              sx={{ display: 'inline', marginLeft: '2rem' }}
              component="span"
              variant="body"
              color="text.primary"
            >
              {item?.phone}
            </Typography>
          }
        />
      </ListItem>
      <Divider variant="fullWidth" component="li" />
      <ListItem alignItems="center" gap={13}>
        <ListItemAvatar>
          <Typography>Email :</Typography>
        </ListItemAvatar>
        <ListItemText
          // primary="Brunch this weekend?"
          secondary={
            <Typography
              sx={{ display: 'inline', marginLeft: '2rem' }}
              component="span"
              variant="body"
              color="text.primary"
            >
              {item?.email}
            </Typography>
          }
        />
      </ListItem>
      <Divider variant="fullWidth" component="li" />
      <ListItem alignItems="center" gap={13}>
        <ListItemAvatar>
          <Typography>Status :</Typography>
        </ListItemAvatar>
        <ListItemText
          // primary="Brunch this weekend?"
          secondary={
            <Typography
              sx={{ display: 'inline', marginLeft: '2rem' }}
              component="span"
              variant="body"
              color="text.primary"
            >
              {item?.kyc_verification_status ? 'verified' : 'Unverified'}
            </Typography>
          }
        />
      </ListItem>
      <Divider variant="fullWidth" component="li" />
      <ListItem alignItems="center" gap={13}>
        <ListItemAvatar>
          <Typography>Date Registered :</Typography>
        </ListItemAvatar>
        <ListItemText
          // primary="Brunch this weekend?"
          secondary={
            <Typography
              sx={{ display: 'inline', marginLeft: '2rem' }}
              component="span"
              variant="body"
              color="text.primary"
            >
              {moment(item?.createdAt).format('L')}
            </Typography>
          }
        />
      </ListItem>
      <Divider variant="fullWidth" component="li" />
      <ListItem alignItems="center" gap={13}>
        <ListItemAvatar>
          <Typography>Date Verified :</Typography>
        </ListItemAvatar>
        <ListItemText
          // primary="Brunch this weekend?"
          secondary={
            <Typography
              sx={{ display: 'inline', marginLeft: '2rem' }}
              component="span"
              variant="body"
              color="text.primary"
            >
              {moment(item?.verification_date).format('L')}
            </Typography>
          }
        />
      </ListItem>
    </List>
  );
}

UserDetailTable.propTypes = {
  item: PropTypes.shape({
    createdAt: PropTypes.any,
    email: PropTypes.any,
    kyc_verification_status: PropTypes.any,
    phone: PropTypes.any,
    last_name: PropTypes.any,
    first_name: PropTypes.any,
    verification_date: PropTypes.any,
  }).isRequired,
};
