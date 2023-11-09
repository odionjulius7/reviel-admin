import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';

import { bgGradient } from 'src/theme/css';

import * as yup from 'yup';
import { useFormik } from 'formik';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import { useDispatch, useSelector } from 'react-redux';
import { recoverPassword } from 'src/features/auth/authSlice';

// ----------------------------------------------------------------------
// Yup validation setting, yup doc
const schema = yup.object().shape({
  email: yup.string().email('Email should be valid').required('Email is Required'),
  email_code: yup.string().required('Email Code is Required'),
  password: yup.string().required('Password is Required'),
  confirm_password: yup.string().required('Confirm Password is Required'),
});
export default function RecoverPawssordView() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state);

  const { isSuccess3, isLoading } = authState.auth;

  const theme = useTheme();

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  // const handleClick = () => {
  //   router.push('/dashboard');
  // };

  // Formik state, check doc
  const formik = useFormik({
    // initial form state
    initialValues: {
      email: '',
      password: '',
      confirm_password: '',
      email_code: '',
    },
    validationSchema: schema, // to validate the yup setup schema
    onSubmit: (values) => {
      // pass the value of the data got from formik to the login action
      dispatch(recoverPassword(values));
      // console.log(values);
    },
  });

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

        <TextField
          name="password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
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
        <div
          className="error mt-2"
          style={{
            color: 'red',
            fontSize: '12px',
            marginTop: '0px',
          }}
        >
          {formik.touched.password && formik.errors.password}
        </div>
        <TextField
          name="confirm_password"
          label="Confirm Password"
          value={formik.values.confirm_password}
          onChange={formik.handleChange('confirm_password')}
          onBlur={formik.handleBlur('confirm_password')}
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
        <div
          className="error mt-2"
          style={{
            color: 'red',
            fontSize: '12px',
            marginTop: '0px',
          }}
        >
          {formik.touched.confirm_password && formik.errors.confirm_password}
        </div>
        <TextField
          name="email_code"
          label="Email COde"
          value={formik.values.email_code}
          onChange={formik.handleChange('email_code')}
          onBlur={formik.handleBlur('email_code')}
          type="text"
        />
        <div
          className="error mt-2"
          style={{
            color: 'red',
            fontSize: '12px',
            marginTop: '0px',
          }}
        >
          {formik.touched.email_code && formik.errors.email_code}
        </div>
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 6 }}>
        <Link variant="info">An Email with the recovery code has been sent to you.</Link>
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
        {isLoading ? ' submitting... ' : 'submit'}
      </LoadingButton>
    </>
  );

  console.log(isSuccess3);

  useEffect(() => {
    if (isSuccess3) {
      router.push('/login');
    }
  }, [isSuccess3, router]);

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
            Recover Password
          </Typography>

          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
