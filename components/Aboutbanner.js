"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Aboutbanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="max-w-7xl m-auto py-20 flex flex-col justify-center lg:flex-row gap-8 items-center pl-5 pr-5">
        <div className="lg:w-1/2" data-aos="zoom-out">
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-neutral-200 mb-6 tracking-wide text-center lg:text-start">
            
            <span className="text-blue-500">Nothing</span>{" "} is Magical for me
          </h1>
          <p className="text-xl text-neutral-200 mb-10 lg:mb-0 text-center lg:text-start">
         I don't view the world through the lens of mystery or magic, I see it through logic, reason, and clarity. With a deep-rooted understanding of <span className="text-blue-500">Physics</span> and <span className="text-blue-500">Mathematics</span>, I naturally seek the principles that govern everything around me. I don’t get lost in illusions or uncertainties; instead, I break things down, analyze them, and uncover the logic that drives them. For me, <span className="text-blue-500">knowledge replaces wonder</span>, and  <span className="text-blue-500"> curiosity fuels discovery.</span>
          </p>
        </div>
        <div className="lg:w-1/2 justify-center flex" data-aos="zoom-out">
         <figure className="image-anime"> <Image
            src="/images/work.jpg"
            className="shadow-blue-400 shadow-xl rounded-xl"
            width={560}
            height={560}
            quality={100}
            alt="Mridul Singh Saklani"
          /> </figure>
        </div>
      </div>
    </>
  );
};

export default Aboutbanner;