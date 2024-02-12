import React from 'react';
import { Metadata } from 'next';
import { getAllUser } from '@/lib/getAllUsers';

export const metadata: Metadata = {
  title: 'Users',
};

const UsersPage = async () => {
  return <div>page</div>;
}
