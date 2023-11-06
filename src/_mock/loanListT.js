import { sample } from 'lodash';
// import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const loans = [...Array(24)].map((_, index) => ({
  creditId: 132,
  // avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  lender: 'Julius',
  borrower: 'Aigbe',
  loanAmount: 2000,
  expectedReturn: 2200,
  balance: 400,
  initiationDate: '12/03/2023',
  dueDate: '12/03/2023',
  status: sample(['active', 'pending', 'completed', 'bad', 'inactive']),
}));
