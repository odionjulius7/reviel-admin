// import { AccountView } from 'src/sections/account/view';

import { Helmet } from 'react-helmet-async';
import { RecoverPawssordView } from 'src/sections/recover-password';

export default function AccountPage() {
  return (
    <>
      <Helmet>
        <title>Reviel | Reover Password</title>
      </Helmet>

      <RecoverPawssordView />
    </>
  );
}
