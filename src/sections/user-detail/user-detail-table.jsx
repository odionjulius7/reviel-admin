import * as React from 'react';
import PropTypes from 'prop-types';
// import { Fragment } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import moment from 'moment';

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
              ??
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
  }).isRequired,
};
