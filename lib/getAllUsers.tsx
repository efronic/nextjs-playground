import { User } from '@/types';
import { UserSchema, UsersArraySchema } from '@/utils';
export const getAllUsers = async (): Promise<User[] | undefined> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  try {
    const response = await res.json();
    console.log('efron ', UsersArraySchema._parse(response));
    return response;
  } catch (error) {
    console.error(error);
  }
  return undefined;
};
