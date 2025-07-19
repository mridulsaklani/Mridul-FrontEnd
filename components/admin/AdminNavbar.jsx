"use client"
import React from 'react'
import { usePathname } from 'next/navigation'



const AdminNavbar = () => {
  const pathname = usePathname()

  const mainpath = pathname.split('/').pop()
  
  return (
    <div className='fixed top-0 p-3 background border-[#ffffff20] border-b-1 w-full pl-72 flex items-center justify-between'>
       <p className='text-white capitalize'> {mainpath} </p>
       <div>
        
       </div>
    </div>
  )
}

export default AdminNavbar