import { getAllUsers } from '@/lib/getAllUsers';
import { Inter } from 'next/font/google';
import { User } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });
export default function Home() {
  const users: Promise<User[]> = getAllUsers();
  return (
    <main className={inter.className}>
      <h1>Hello World!</h1>
      <Link href={'/users'}>Users</Link>
    </main>
  );
}
