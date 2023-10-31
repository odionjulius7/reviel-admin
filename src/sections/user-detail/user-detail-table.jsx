import * as React from 'react';
import { Fragment } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';

export default function UserDetailTable() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="center" gap={13}>
        <ListItemAvatar>
          <Typography>First Name :</Typography>
        </ListItemAvatar>
        <ListItemText
          // primary="Brunch this weekend?"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline', marginLeft: '2rem' }}
                component="span"
                variant="body"
                color="text.primary"
              >
                Ali Connors
              </Typography>
            </>
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
            <>
              <Typography
                sx={{ display: 'inline', marginLeft: '2rem' }}
                component="span"
                variant="body"
                color="text.primary"
              >
                Ola
              </Typography>
            </>
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
            <>
              <Typography
                sx={{ display: 'inline', marginLeft: '2rem' }}
                component="span"
                variant="body"
                color="text.primary"
              >
                0987654321
              </Typography>
            </>
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
            <>
              <Typography
                sx={{ display: 'inline', marginLeft: '2rem' }}
                component="span"
                variant="body"
                color="text.primary"
              >
                example@gmail.com
              </Typography>
            </>
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
            <>
              <Typography
                sx={{ display: 'inline', marginLeft: '2rem' }}
                component="span"
                variant="body"
                color="text.primary"
              >
                Unverified
              </Typography>
            </>
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
            <>
              <Typography
                sx={{ display: 'inline', marginLeft: '2rem' }}
                component="span"
                variant="body"
                color="text.primary"
              >
                19/08/2023
              </Typography>
            </>
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
            <>
              <Typography
                sx={{ display: 'inline', marginLeft: '2rem' }}
                component="span"
                variant="body"
                color="text.primary"
              >
                12/11/2023
              </Typography>
            </>
          }
        />
      </ListItem>
    </List>
  );
}
