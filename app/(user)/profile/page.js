'use client'
import ProfileHeader from '@/components/ProfileHeader'
import React from 'react'
import { redirect } from 'next/navigation';
import api from '@/components/api';
import { useEffect } from 'react'

const page = () => {

  const verifyAuth = async()=>{
    try {
       const response = await api.get(`/auth/verify`, {withCredentials: true})
     if(response.status !== 200){
            redirect('/')
     }
    } catch (error) {
      console.error(error)
    }
    
  }

  useEffect(() => {
    verifyAuth()
  }, [])
  
  
  return (
    <>
      <ProfileHeader />
    </>
  )
}

export default page
