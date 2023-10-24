import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const users = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  // avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  firstName: 'First Name',
  lastName: 'Last Name',
  phoneNumber: '09854232432',
  status: sample(['verified', 'unverified']),
  email: 'example@gmail.com',
  dateRegistered: '24/10/2023',
  dateVerified: '24/10/2023',
}));
