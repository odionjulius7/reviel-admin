import { AccountView } from 'src/sections/account/view';

import { Helmet } from 'react-helmet-async';

export default function AccountPage() {
  return (
    <>
      <Helmet>
        <title>Reviel | Account Edit</title>
      </Helmet>

      <AccountView />
    </>
  );
}
