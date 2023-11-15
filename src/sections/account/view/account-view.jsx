import { useEffect, useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Box, IconButton, alpha, TextField, InputAdornment, useTheme } from '@mui/material';

import { LoadingButton } from '@mui/lab';

import Iconify from 'src/components/iconify/iconify';

import * as yup from 'yup';
import { useFormik } from 'formik';

import { bgGradient } from 'src/theme/css';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from 'src/features/auth/authSlice';

// Yup validation setting, yup doc
const schema = yup.object().shape({
  old_password: yup.string().required('old password is Required'),
  new_password: yup.string().required('new password is Required'),
});
// ----------------------------------------------------------------------

export default function AccountPage() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state);
  const token = authState?.auth.user?.data?.token;
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const { isSuccess4, isError, message } = authState.auth;

  const formik = useFormik({
    // initial form state
    initialValues: {
      old_password: '',
      new_password: '',
    },
    validationSchema: schema, // to validate the yup setup schema
    onSubmit: (values) => {
      const userData = {
        old_password: values?.old_password,
        new_password: values?.new_password,
        token,
      };
      // pass the value of the data got from formik to the login action
      dispatch(changePassword(userData));
      // console.log(userData);
    },
  });

  // useEffect(() => {
  //   if (isSuccess4) {
  //     toast.success('successfully changed password!');
  //     formik.setFieldValue('old_password', '');
  //     formik.setFieldValue('new_password', '');
  //   }

  //   // if (isError) {
  //   //   toast.error('Something Went Wrong!');
  //   // }
  // }, [isSuccess4, formik]);

  // console.log(isSuccess4);

  const renderForm = (
    <>
      <Stack
        spacing={3}
        sx={{
          margin: '1rem 0',
        }}
      >
        <TextField
          name="old_password"
          label="Current Password"
          value={formik.values.old_password}
          onChange={formik.handleChange('old_password')}
          onBlur={formik.handleBlur('old_password')}
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
          {formik.touched.old_password && formik.errors.old_password}
        </div>
        <TextField
          sx={{
            margin: '1rem 0',
          }}
          name="new_password"
          label="New Password"
          value={formik.values.new_password}
          onChange={formik.handleChange('new_password')}
          onBlur={formik.handleBlur('new_password')}
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
          {formik.touched.new_password && formik.errors.new_password}
        </div>
      </Stack>

      <div
        className="error mt-2"
        style={{
          color: 'green',
          fontSize: '14px',
          margin: '0.5rem 0',
        }}
      >
        {message === 'success' ? `password change ${message}` : ''}
      </div>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={formik.handleSubmit}
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
