"use client"
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';

import { FaXmark } from "react-icons/fa6";
import { FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import Link from 'next/link';

const page = () => {
    const [errorMessage, setErrorMessage] = useState("")

       const [signInData, setSignInData] = useState({
          email: "",
          password: "",
        });
        const [showPass, setShowPass] = useState(false);
      const router = useRouter();


      const handleChangeTwo = (e) => {
        const { name, value } = e.target;
        setSignInData({ ...signInData, [name]: value });
      };

      // HandleSubmit

    const handleSignIn = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/user/login`,
            signInData,
            {
              withCredentials: true,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if(response.data.emailVerified === false){
            router.push('/verify-otp')
          }
    
          if (response.status === 200) {        
    
            router.push('/')
          }
        } catch (err) {
          console.log("Login error:", err.message);
          setErrorMessage(err.response?.data?.message);
        }
    
      };
  return (
    <>
    <div className="py-24 flex items-center justify-center">
    <div className=" w-[90%] md:w-[520px] lg:w-[650px]  p-5 md:p-8 background rounded-lg overflow-hidden">
          <h2 className="text-xl font-bold text-white pb-4"> Sign In </h2>
         

          <form className="flex flex-col gap-4" onSubmit={handleSignIn}>
            <input
              className="w-full outline-none p-2 md:p-3 rounded-md"
              type="email"
              id="email"
              value={signInData.email}
              name="email"
              onChange={handleChangeTwo}
              placeholder="Email"
            />
            <div className="w-full outline-none p-2 md:p-3 rounded-md bg-white flex  items-center">
              {showPass ? (
                <input
                  type="text"
                  name="password"
                  id="password"
                  className="outline-none w-full"
                  placeholder="Password"
                  value={signInData.password}
                  onChange={handleChangeTwo}
                />
              ) : (
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="outline-none w-full"
                  placeholder="Password"
                  value={signInData.password}
                  onChange={handleChangeTwo}
                />
              )}{" "}
              {showPass ? (
                <FaEye
                  className="text-xl cursor-pointer"
                  onClick={() => setShowPass(!showPass)}
                />
              ) : (
                <FaEyeSlash
                  className="text-xl cursor-pointer"
                  onClick={() => setShowPass(!showPass)}
                />
              )}{" "}
            </div>
            <div className="flex justify-between">
              <p className="text-red-500">{errorMessage}</p>
              <Link className="text-blue-600" href={""}>
                {" "}
                Forgot Password?
              </Link>
            </div>
            <button
              className="disabled:bg-blue-400 p-2 md:p-3 rounded-lg bg-blue-600 text-white"
              type="submit"
            >
              {" "}
              Log In{" "}
            </button>
            <div className="text-white flex justify-center">
              {" "}
              Already have an account?&nbsp;{" "}
              <Link
                className="text-blue-600 font-semibold"
                href={"/signup"}
                onClick={() => setShowSignUp(false)}
              >
                {" "}
                Sign Up{" "}
              </Link>
            </div>
          </form>
        </div>

    </div>
    </>
  )
}

export default page