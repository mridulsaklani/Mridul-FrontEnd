"use client";
import api from "@/components/api";
import { redirect } from "next/navigation";
import React, { useState, useEffect } from "react";

const page = () => {
  
    const verifyAuth = async()=>{
      try {
         const response = await api.get(`/auth/verify`, {withCredentials: true});
         console.log("response", response)
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
     <div className="pl-[275px] relative">
      hii i am main dashboard
     </div>
    </>
  );
};

export default page;
