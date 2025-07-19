"use client"
import React, {useState, useEffect} from 'react'
import api from '../api'
import Image from 'next/image'
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UsersTable = () => {
  const [userData, setUserData] = useState(null)


  const getUser = async()=>{
    try {
      const response = await api.get('/user/getall', {withCredentials: true})
      if(response.status === 200){
        setUserData(response.data.users)
        console.log("users data", response.data.users)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  const handleDelete = async(id)=>{
    try {
      const confirm = window.confirm('Are you sure to delete user')
      if(!confirm) return
      const response = await api.delete(`/user/delete/${id}`, {withCredentials: true})
      if(response.status === 200){
         toast.success('User deleted successfully')
      }
      const filter = userData?.filter(item=> item._id !== id)
      setUserData(filter)
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <>
      <div className='flex flex-col gap-4 background p-5 px-7 rounded-xl'>
        <h2 className='text-white font-semibold text-2xl'>User Table</h2>
        <div className='border-b-[1px] border-white/30 w-full'></div>
        <table className='border-[1px] border-white/30 rounded-xl '>
          <thead>
            <tr className='bg-white/40'>
                  
                  <th className='text-white p-3 text-lg text-start'>Name</th>
                  <th className='text-white p-3 text-lg text-start'>Email</th>
                  <th className='text-white p-3 text-lg text-start'>Number</th>
                  <th className='text-white p-3 text-lg text-start'>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData?.length > 0 && userData.map((item, index)=>(
              <tr key={index} className='border-b-[1px] border-white/30'>
               
                <td className='p-3 text-white capitalize flex items-center gap-3'>
                  <Image className='object-cover object-center w-10 h-10 rounded ' src={item?.image} height={24} width={24} alt='user image'/>
                  {item?.name || "N/A"}
                  </td>
                  <td className='p-3 text-white border-l-[1px] border-white/30 '>{item?.email || "N/A"}</td>
                  <td className='p-3 text-white  border-l-[1px] border-white/30 '>{item?.phone || "N/A"}</td>
                  <td className='p-3 text-white  border-l-[1px] border-white/30 flex gap-3 items-center '> <button className='h-9 w-9 text-white rounded flex items-center justify-center bg-blue-600 text-xl'><FaEye /></button> <button className='h-9 w-9 text-white rounded flex items-center justify-center bg-red-500 text-xl ' onClick={()=>handleDelete(item?._id)} > <MdDelete /> </button> </td>

              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </>
  )
}

export default UsersTable