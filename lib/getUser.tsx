import { User } from '@/types';
import { UserSchema } from '@/utils';
import * as v from 'valibot';
export const getUser = async (userId: string): Promise<User> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch user ${userId}`);
  }
  try {
    const response = await res.json();
    const validationResult = v.parse(UserSchema, response);
    return response;
  } catch (error) {
    console.error('efron error:', error);
  }
  return {} as User;
};
