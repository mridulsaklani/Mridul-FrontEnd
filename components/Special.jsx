import React from 'react'
import Image from 'next/image'

const Special = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-24 flex flex-col items-center w-full justify-center gap-5">
      <div className="mb-9 flex flex-col w-full items-center lg:items-start" >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-center lg:text-start ">Everything Is for You</h2>
          <span className="border-blue-600 border-4 w-20 rounded-full flex flex-col"></span>
        </div>
        <div className='flex  gap-5 w-full'>
        <div className="w-[40%]">
          <Image 
          className=' shadow-blue-400 shadow-xl rounded-xl aspect-[3/4] object-cover '
        src={"/images/special.jpg"}
        width={400}
        height={360}
        quality={100}
        alt='My parents'
          />
        </div>
        <div className="w-[60%]">
         <p className='text-2xl text-neutral-200 font-semibold mb-5 text-center lg:text-start'>My strength, My roots, My everything...</p>
        </div>
        </div>
      </div>
    </>
  )
}

export default Special