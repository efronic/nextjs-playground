import { User } from '@/types';
import { UsersArraySchema } from '@/utils';
import * as v from 'valibot';

export const getAllUsers = async (): Promise<User[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  try {
    const response = await res.json();
    const validationResult = v.parse(UsersArraySchema, response);

    return response;
  } catch (error) {
    console.error('efron error:', error);
  }
  return [];
};
