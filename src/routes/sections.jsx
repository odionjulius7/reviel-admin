import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

import ProtectedRoute from './ProtectedRoute'; // Ensure proper spacing

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoanListPage = lazy(() => import('src/pages/loans'));
export const LoanRepaymentPage = lazy(() => import('src/pages/LoanRepayment'));
export const CreditTipPage = lazy(() => import('src/pages/credit-tip'));
export const AccountPage = lazy(() => import('src/pages/account'));
export const LoanDetailsPage = lazy(() => import('src/pages/loan-details'));
export const UserDetailPage = lazy(() => import('src/pages/userDetail'));
export const UserRecordedLoanPage = lazy(() => import('src/pages/user-rec-loans'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        {
          element: (
            <ProtectedRoute>
              <IndexPage />
            </ProtectedRoute>
          ),
          index: true,
        },
        {
          path: 'loans',
          element: (
            <ProtectedRoute>
              <LoanListPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'loan-repayment',
          element: (
            <ProtectedRoute>
              <LoanRepaymentPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'user',
          element: (
            <ProtectedRoute>
              <UserPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'credit-tip',
          element: (
            <ProtectedRoute>
              <CreditTipPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'account',
          element: (
            <ProtectedRoute>
              <AccountPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'user-recorded-loans',
          element: (
            <ProtectedRoute>
              <UserRecordedLoanPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'loan/:id',
          element: (
            <ProtectedRoute>
              <LoanDetailsPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'user/:id',
          element: (
            <ProtectedRoute>
              <UserDetailPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'products',
          element: (
            <ProtectedRoute>
              <ProductsPage />
            </ProtectedRoute>
          ),
        },
        {
          path: 'blog',
          element: (
            <ProtectedRoute>
              <BlogPage />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
