import ProfileHeader from '@/components/ProfileHeader'
import React from 'react'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const page = () => {
   const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    redirect('/');
  }
  return (
    <>
      <ProfileHeader />
    </>
  )
}

export default page
