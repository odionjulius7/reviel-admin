import { useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Box, Grid, IconButton, InputAdornment, TextField, alpha, useTheme } from '@mui/material';
import Iconify from 'src/components/iconify/iconify';
import { LoadingButton } from '@mui/lab';
import { bgGradient } from 'src/theme/css';

// ----------------------------------------------------------------------

export default function AccountPage() {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => {
    router.push('/dashboard');
  };
  const renderForm = (
    <>
      <Stack
        spacing={3}
        sx={{
          margin: '1rem 0',
        }}
      >
        <TextField
          name="currentPassword"
          label="Current Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          sx={{
            margin: '1rem 0',
          }}
          name="newPassword"
          label="New Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          sx={{
            margin: '1rem 0',
          }}
          name="confirmNewPassword"
          label="Confirm New Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        // onClick={handleClick}
      >
        Change Password
      </LoadingButton>
    </>
  );

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Account</Typography>
      </Stack>
      {/* <Card> */}
      <Box
        sx={{
          ...bgGradient({
            color: alpha(theme.palette.background.default, 0.9),
            imgUrl: '/assets/background/overlay_4.jpg',
          }),
          height: 1,
        }}
      >
        <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
          <Card
            sx={{
              p: 5,
              width: 1,
              maxWidth: 420,
            }}
          >
            <Typography
              sx={{
                margin: '0 0 2rem 0',
              }}
              variant="h4"
            >
              Update Password
            </Typography>

            {renderForm}
          </Card>
        </Stack>
      </Box>
      {/* </Card> */}
    </Container>
  );
}
