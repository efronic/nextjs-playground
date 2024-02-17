import { Post } from '@/types';
import { PostsArraySchema } from '@/utils';
import * as v from 'valibot';

export const getUserPosts = async (userId: string): Promise<Post[]> => {
  console.log(
    'efron getUserPosts userId:',
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch posts for user ${userId}`);
  }
  try {
    const response = await res.json();
    const validationResult = v.parse(PostsArraySchema, response);
    return response;
  } catch (error) {
    console.error('efron getUserPosts error:', error);
  }

  return [] as Post[];
};
