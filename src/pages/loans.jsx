import { Helmet } from 'react-helmet-async';
import { LoanList } from 'src/sections/loan/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> Reviel | Loan List </title>
      </Helmet>

      <LoanList />
    </>
  );
}
