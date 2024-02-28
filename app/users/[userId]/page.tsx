import { getUser } from '@/lib/getUser';
import { getUserPosts } from '@/lib/getUserPosts';
import { getAllUsers } from '@/lib/getAllUsers';
import { Post, User } from '@/types';
import { Suspense } from 'react';
import UserPosts from './components/UserPosts';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Params = {
  params: {
    userId: string;
  };
};
// to make the metadata available dynamically
export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User | undefined> = getUser(userId);
  const user = await userData;
  if (!user?.name) notFound();

  return {
    title: user?.name,
    description: `This is the page of ${user?.name}`,
  };
}
// to make the component ssg (without this, it'll be ssr)
export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;
  return users.map((user) => ({ userId: user.id.toString() }));
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User | undefined> = getUser(userId);
  const userPostsData: Promise<Post[] | undefined> = getUserPosts(userId);

  //   const [user, userPosts] = await Promise.all([userData, userPostsData]);
  const user = await userData;

  if (!user?.name) notFound();

  return (
    <>
      <h2>{user?.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading ...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}
