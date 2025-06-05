"use client"
import api from "@/components/api";
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Page = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [errMessage, setErrMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const inputsRef = useRef([]);
  const [verifyEmail, setVerifyEmail] = useState(null)

  const router = useRouter()

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  useEffect(() => {
   setVerifyEmail(window.localStorage.getItem('verify-email'))
  }, [])
  

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsLoading(true)
    const finalOtp = otp.join("");
    if(otp.length<6) return setErrMessage('Invalid otp please fll valid otp ')
    try {
      const response = await api.post(`/user/verify-otp`,  {email: verifyEmail, otp:finalOtp})
      if(response.status === 200){
        toast.success(`${verifyEmail} OTP verified successfully`)
        setErrMessage(null)
        router.push('/')
        window.localStorage.removeItem('verify-email')
      }
    } catch (error) {
      console.error(error)
      setErrMessage(error.response?.data?.message)
    }
    finally{
      setIsLoading(false)
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-5">
      <div className="w-full md:w-[520px] lg:w-[650px] relative p-6 lg:p-10 rounded-lg border-[1px] background">
        <h2 className="text-white font-bold pb-1">Verify OTP</h2>
        <p className="text-white tracking-wide pb-8">We send verification OTP on your email <span className="text-blue-600">{verifyEmail || "N/A"}</span></p>
        <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
          <div className="flex justify-between gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputsRef.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 md:w-14 md:h-14 text-white text-center bg-transparent border rounded-md outline-none text-lg"
              />
            ))}
          </div>
          {errMessage && <div className="flex justify-end">
            <p className="text-red-500">{errMessage}</p>
          </div>}
          <button
            className="py-3 px-8 bg-blue-600 text-white rounded-lg text-lg flex gap-2 items-center justify-center"
            type="submit"
          >
            {isLoading ? "Verifying..." : "Verify"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
