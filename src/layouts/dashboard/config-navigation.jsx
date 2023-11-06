import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Loan Management',
    icon: icon('ic_blog'),
    items: [
      {
        title: 'Loans',
        path: '/loans',
        icon: icon('ic_cart'),
      },
      {
        title: 'Loan Repayment History',
        path: '/loan-repayment',
        icon: icon('ic_cart'),
      },
    ],
  },
  // {
  //   title: 'loans',
  //   path: '/loans',
  //   icon: icon('ic_cart'),
  // },
  // {
  //   title: 'loan repayment',
  //   path: '/loan-repayment',
  //   icon: icon('ic_cart'),
  // },
  {
    title: 'user management',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'account',
    path: 'account',
    icon: icon('ic_lock'),
  },
  {
    title: 'User Recorded Loans',
    path: 'user-recorded-loans',
    icon: icon('ic_user'),
  },
];

export default navConfig;
