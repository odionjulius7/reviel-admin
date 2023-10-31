import { AccountView } from 'src/sections/account/view';

import { Helmet } from 'react-helmet-async';
import { UserDetailView } from 'src/sections/user-detail/view';

export default function AccountPage() {
  return (
    <>
      <Helmet>
        <title>Reviel | User Details</title>
      </Helmet>

      <UserDetailView />
    </>
  );
}
