import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
// import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';

import * as yup from 'yup';
import { useFormik } from 'formik';

import Logo from 'src/components/logo';
// import Iconify from 'src/components/iconify';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from 'src/features/auth/authSlice';

// ----------------------------------------------------------------------
// Yup validation setting, yup doc
const schema = yup.object().shape({
  email: yup.string().email('Email should be valid').required('Email is Required'),
  // password: yup.string().required('Password is Required'),
});
export default function ForgotPasswordView() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state);

  const { isSuccess2, isLoading } = authState.auth;
  console.log(authState?.auth);

  const theme = useTheme();

  const router = useRouter();

  // const handleClick = () => {
  //   router.push('/dashboard');
  // };

  // Formik state, check doc
  const formik = useFormik({
    // initial form state
    initialValues: {
      email: '',
    },
    validationSchema: schema, // to validate the yup setup schema
    onSubmit: (values) => {
      // pass the value of the data got from formik to the login action
      dispatch(forgotPassword(values));
    },
  });

  useEffect(() => {
    if (isSuccess2) {
      router.push('/recover');
    }
  }, [isSuccess2, router]);

  const renderForm = (
    <>
      <Stack spacing={3}>
        <TextField
          value={formik.values.email}
          onChange={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          // name="email"
          label="Email address"
        />
        <div
          className="error mt-2"
          style={{
            color: 'red',
            fontSize: '12px',
            marginTop: '0px',
          }}
        >
          {formik.touched.email && formik.errors.email}
        </div>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
        <Link variant="subtitle2" underline="hover">
          {/* Forgot password? */}
        </Link>
      </Stack>
      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={formik.handleSubmit}
        // onSubmit={formik.handleSubmit}
      >
        {isLoading ? 'sending...' : 'send'}
      </LoadingButton>
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

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
            Forgot Password
          </Typography>

          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
