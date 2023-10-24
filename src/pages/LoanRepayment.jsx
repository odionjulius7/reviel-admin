import { Helmet } from 'react-helmet-async';
import { LoanRepayment } from 'src/sections/loan-repayment/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> Reviel | Loan Repayment </title>
      </Helmet>

      <LoanRepayment />
    </>
  );
}
