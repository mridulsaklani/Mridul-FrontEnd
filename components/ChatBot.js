"use client"
import React from 'react';
import { TbMessageChatbot } from "react-icons/tb";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChatBot = () => {
  
  const handleHover = () => {
    toast.info('Sorry, I am under development', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: 'colored',
    });
  };

  return (
    <>
      <div className='fixed flex items-end gap-4 flex-col bottom-9 right-7 z-40'>
        <span 
          className='bot relative z-40 bg-blue-600 h-16 w-16 rounded-full flex items-center justify-center cursor-pointer'
          onMouseEnter={handleHover} // Trigger toast on hover
        >
          <TbMessageChatbot className='text-white text-4xl z-50' />
        </span>
      </div>
      <ToastContainer /> {/* Required for displaying toasts */}
    </>
  );
}

export default ChatBot;
