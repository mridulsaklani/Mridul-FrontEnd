"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const VerifyOtpPage = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [message, setMessage] = useState("")
  const inputsRef = useRef([]);
  const router = useRouter();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    
    if (element.value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const fullOtp = otp.join("");
  
    if (fullOtp.length !== 6 || otp.some((digit) => digit.trim() === "")) {
      return setMessage("Please enter a valid 6-digit OTP.");
    }
  
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/user/verify-otp`,
        { otp: fullOtp },
        { withCredentials: true }
      );
  
      if (response.status === 200) {
        router.push("/");
      }
    } catch (error) {
      console.error("OTP verification failed", error);
      setMessage("Invalid OTP or verification failed.");
    }
  };
  

  return (
    <div className="py-24 flex items-center justify-center">
      <div className="w-[550px] bg-[#1e293b] p-8 rounded-2xl shadow-xl">
        <h2 className="text-white text-2xl font-bold mb-6 text-center">
          Verify OTP
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
          <div className="flex gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputsRef.current[index] = el)}
                className="w-12 h-12 text-xl text-center text-white bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>

         {message && <p className="text-red-500">{message}</p>}

          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Submit OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
