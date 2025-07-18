"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineDollarCircle } from "react-icons/ai";
import AOS from "aos";
import 'aos/dist/aos.css';
import { ReactTyped } from "react-typed";
import HeroLine from "../public/images/hero-line-shape-2.png"

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      disable:'mobile'
    });
  }, []);

  return (
    <>
    <div className="relative py-24">
      
      <Image 
      className="absolute top-0 right-0"
      src="/images/hero-line-shape-2.png"
      width={700}
      height={200}
      alt="linne"></Image>

      <span className="blue-circle absolute left-right"></span>


      <div className="max-w-7xl m-auto flex flex-col lg:flex-row items-center pl-5 pr-5">
        <div className=" lg:w-1/2 pb-16 lg:pb-0" data-aos="zoom-in-right">
          <h1 className=" text-4xl sm:text-5xl lg:text-6xl text-center lg:text-start font-extrabold leading-tight text-white mb-6 tracking-wide">
            Building Digital Solutions – Mridul <br/>
            <ReactTyped
      strings={[
        "  Singh  ",
        "Saklani",
        "Singh Saklani"
      ]}
      typeSpeed={40}
      backSpeed={50}
      
      loop
    ></ReactTyped>
          </h1>
          <p className="text-xl text-neutral-200 mb-10 text-center lg:text-start">
            I build smart software powered by <span className="text-blue-500 font-medium tracking-wide">Artificial Intelligence &  Machine Learning</span> and the <span className="text-blue-500 font-medium tracking-wide">MERN stack</span> — delivering innovative, scalable solutions from concept to deployment. Behind the rough face lies an intelligent, logical mind that turns ideas into reality.
          </p>
          {/* <div className="flex justify-center lg:justify-start">
            <Link
              href=""
              className="text-lg bg-blue-600 py-3 px-8 rounded-lg text-white flex items-center gap-2 hover:bg-white hover:text-blue-600 transition-all"
            >
              
              <AiOutlineDollarCircle className="text-xl" /> Hire Me
            </Link>
          </div> */}
        </div>
        <div className="lg:w-1/2  flex justify-center items-center " data-aos="zoom-in-left">
         <figure className="image-anime  hover:md:scale-105 transition-all"><Image
            className="shadow-blue-400 shadow-xl rounded-xl"
            src="/images/Mridul-Singh-saklani.jpg"
            width={400}
            height={400}
            alt="Mridul Singh Saklani"
          /> </figure>
        </div>
      </div>
      </div>
    </>
  );
};

export default Banner;
