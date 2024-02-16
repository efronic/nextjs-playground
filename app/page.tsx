import { getAllUsers } from '@/lib/getAllUsers';
import { User } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const users: Promise<User[]> = getAllUsers();
  return (
    <main>
      <h1>Hello World!</h1>
      <Link href={'/users'}>Users</Link>
    </main>
  );
}
