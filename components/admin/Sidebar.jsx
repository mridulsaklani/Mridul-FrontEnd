"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { SiBloglovin } from "react-icons/si";
import { FaFolderPlus, FaUsers } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import Link from "next/link";


const Sidebar = () => {
  return (
    <>
    
        <div className="background side-menu fixed top-0 left-0 z-30 w-[275px] p-4 border-r-[1px] border-[#ffffff20] min-h-screen ">
          <Image
            src={"/images/mridul-logo.png"}
            width={100}
            height={100}
            alt="Mridul Singh Saklani"
          ></Image>

          <ul className="mt-10 flex flex-col gap-6">
            <li>
              {" "}
              <Link href={'/dashboard'} className="text-white flex items-center gap-3 text-lg">
                {" "}
                <IoHomeOutline className="text-xl" /> Dashboard{" "}
              </Link>
            </li>
            <li>
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-white"><FaUsers className="text-xl"/> Users</div>
                    <span className="text-white"><FaAngleDown /></span>
                </div>
                <ul className="flex flex-col gap-3 list-disc pl-5 mt-4 ">
                    <li>
                        <Link href={'/dashboard/users'} className="text-white">
                          All Users
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="text-white flex flex-col gap-3 text-lg">
              {" "}
              <button className="text-white flex items-center gap-3 text-lg" type="button">
                {" "}
                <SiBloglovin className="text-xl" /> Blogs{" "}
              </button>
              <ul className="flex flex-col gap-5 pl-4">
                <li className="text-white flex items-center gap-3 text-lg">
                  {" "}
                  <FaFolderPlus className="text-xl" /> Add Blog
                </li>
                <li className="text-white flex items-center gap-3 text-lg">
                  {" "}
                  <IoHomeOutline className="text-xl" /> All Blogs
                </li>
              </ul>
            </li>

          </ul>
        </div>
        
     
    </>
  );
};

export default Sidebar;