import { Helmet } from 'react-helmet-async';
import { CreditTipView } from 'src/sections/credit-tip/view';

// ----------------------------------------------------------------------

export default function CreditTipPage() {
  return (
    <>
      <Helmet>
        <title>Reviel | Credit Tips</title>
      </Helmet>

      <CreditTipView />
    </>
  );
}
