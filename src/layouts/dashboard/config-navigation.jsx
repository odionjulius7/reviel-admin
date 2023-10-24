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
    title: 'loans',
    path: '/loans',
    icon: icon('ic_cart'),
  },
  {
    title: 'loan repayment',
    path: '/loan-repayment',
    icon: icon('ic_cart'),
  },
  {
    title: 'user management',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'credit tips',
    path: '/credit-tip',
    icon: icon('ic_blog'),
  },
  {
    title: 'account',
    path: 'account',
    icon: icon('ic_user'),
  },
  {
    title: 'User Recorded Loans',
    path: 'user-recorded-loans',
    icon: icon('ic_user'),
  },
  // {
  //   title: 'product',
  //   path: '/products',
  //   icon: icon('ic_cart'),
  // },
  // {
  //   title: 'blog',
  //   path: '/blog',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'blog',
  //   path: '/blog',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
