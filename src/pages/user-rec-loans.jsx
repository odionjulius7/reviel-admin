import { Helmet } from 'react-helmet-async';

import { UserRecordedLoanView } from 'src/sections/user-recorded-loans/view';

// ----------------------------------------------------------------------

export default function UserRecordedLoanPage() {
  return (
    <>
      <Helmet>
        <title> Reviel | User Recorded Loans </title>
      </Helmet>

      <UserRecordedLoanView />
    </>
  );
}
