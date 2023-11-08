// import { AccountView } from 'src/sections/account/view';

import { Helmet } from 'react-helmet-async';
import { ForgotPasswordView } from 'src/sections/forgot-password';

export default function AccountPage() {
  return (
    <>
      <Helmet>
        <title>Reviel | Forgot Password</title>
      </Helmet>

      <ForgotPasswordView />
    </>
  );
}
