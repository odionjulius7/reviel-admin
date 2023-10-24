import { sample } from 'lodash';
// import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const loanPayment = [...Array(24)].map((_, index) => ({
  creditId: 123,
  // avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  lender: 'Julius',
  borrower: 'Aigbe',
  amount: 2000,
  repaymentDate: '12/03/2023',
  message: 'lorem jbhdfb resbhhfb bhsbfhjbhr. lorem jbhdfb',
  status: sample(['successful', 'contested', 'pending', 'awaiting approval', 'to be paid']),
  // role: sample([
  //   'Leader',
  //   'Hr Manager',
  //   'UI Designer',
  //   'UX Designer',
  //   'UI/UX Designer',
  //   'Project Manager',
  //   'Backend Developer',
  //   'Full Stack Designer',
  //   'Front End Developer',
  //   'Full Stack Developer',
  // ]),
}));
