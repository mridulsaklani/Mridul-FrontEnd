"use client"
import React,{useEffect} from "react";
import Image from "next/image";
import AOS from "aos";
import 'aos/dist/aos.css';
import Link from "next/link";

const Skills = () => {

  useEffect(() => {
  AOS.init({
    duration: 2000,
    once: true
  })
  }, [])

  return (
    <>
      <div className="max-w-7xl m-auto py-20 pr-5 pl-5">
        <div className="mb-14 flex flex-col items-center lg:items-start ">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight text-center lg:text-start" data-aos='fade-up'>
            Mastering the Art of Code
          </h2>
          <span className="border-blue-600 border-4 w-20 rounded-full flex flex-col" data-aos='fade-up'></span>
        </div>
        <div className="flex flex-col gap-16">
          <div className="  skill-border grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 p-8 rounded-lg">
            <div className="border-right p-4 flex items-center justify-center">
              <h3 className="text-xl font-semibold text-white">
                AI & ML
              </h3>
            </div>
            <Link href={'https://www.python.org'} target="_blank" className="border-right  px-4 py-12 border-b-[1px] md:border-b-0 border-white/30 lg:p-4 md:py-4 flex items-center justify-center">
              <Image className="skill-img transition-all" src="/images/python.png" width={100} height={100} alt="python" data-aos="zoom-in" />
            </Link>
            <Link href={'https://numpy.org'} target="_blank" className="border-right px-4 py-12 border-b-[1px] md:border-b-0 border-white/30 p-4 md:py-4 flex items-center justify-center" >
            <Image className="skill-img transition-all scale-110" src="/images/numpy.png" width={100} height={100} alt="numpy" data-aos="zoom-in" data-aos-delay="200"/>
            </Link>
            <Link href={'https://www.tensorflow.org'} target="_blank" className="border-right  px-4 py-12 border-b-[1px] md:border-b-0 border-white/30 p-4 md:py-4 flex items-center justify-center">
            <Image className="skill-img transition-all" src="/images/TensorFlow.png" width={100} height={100} alt="TensorFlow" data-aos="zoom-in" data-aos-delay="400"/>
            </Link>
            <Link href={'https://keras.io'}target="_blank" className="border-right  px-4 py-12 border-b-[1px] md:border-b-0 border-white/30 p-4 md:py-4 flex items-center justify-center">
            <Image className="skill-img transition-all rounded-lg scale-60" src="/images/Keras.png" width={100} height={100} alt="Keras" data-aos="zoom-in" data-aos-delay="600"/>
            </Link>
            <Link href={'https://pytorch.org'} target="_blank" className=" px-4 py-12 md:border-b-0 border-white/30 p-4 md:py-4 flex items-center justify-center">
            <Image className="skill-img rounded-xl transition-all" src="/images/PyTorch.png" width={100} height={100} alt="PyTorch" data-aos="zoom-in" data-aos-delay="800"/>
            </Link>
          </div>
          <div className="background grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 p-8 rounded-lg">
          <div className="border-white p-4 flex items-center justify-center">
              <h3 className="text-xl font-semibold text-white">
                AI & ML
              </h3>
            </div>
            <Link href={'https://opencv.org'} target="_blank" className="border-white  px-4 py-12 border-b-[1px] md:border-b-0 border-white/45 p-4 md:py-4 flex items-center justify-center">
            <Image className="skill-img transition-all" src="/images/OpenCV.png" width={100} height={100} alt="OpenCV" data-aos="zoom-in" />
            </Link>
            <Link href={'https://scipy.org'} target="_blank" className="  px-4 py-12  md:border-b-0 border-white/45 p-4 md:py-4 flex items-center justify-center">
            <Image className="skill-img transition-all" src="/images/scipy.png" width={100} height={100} alt="scipy" data-aos="zoom-in" />
            </Link>
          
            
          </div>
          <div className="  skill-border grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 p-8 rounded-lg">
            <div className="border-right p-4 flex items-center justify-center">
              <h3 className="text-xl font-semibold text-white">
                Front End Skills
              </h3>
            </div>
            <div className="border-right  px-4 py-12 border-b-[1px] md:border-b-0 border-white/30 p-4 md:py-4 flex items-center justify-center">
              <Image className="skill-img transition-all" src="/images/html.png" width={100} height={100} alt="html" data-aos="zoom-in" />
            </div>
            <div className="border-right  px-4 py-12 border-b-[1px] md:border-b-0 border-white/30 p-4 md:py-4 flex items-center justify-center" >
            <Image className="skill-img transition-all" src="/images/css.png" width={100} height={100} alt="css" data-aos="zoom-in" data-aos-delay="200"/>
            </div>
            <div className="border-right  px-4 py-12 border-b-[1px] md:border-b-0 border-white/30 p-4 md:py-4 flex items-center justify-center">
            <Image className="skill-img transition-all" src="/images/javascript.png" width={100} height={100} alt="JavaScript" data-aos="zoom-in" data-aos-delay="400"/>
            </div>
            <div className="border-right  px-4 py-12 border-b-[1px] md:border-b-0 border-white/30 p-4 md:py-4 flex items-center justify-center">
            <Image className="skill-img transition-all" src="/images/react.png" width={100} height={100} alt="react" data-aos="zoom-in" data-aos-delay="600"/>
            </div>
            <div className=" p-4 md:py-4 flex  px-4 py-12  md:border-b-0 border-white/30 items-center justify-center">
            <Image className="skill-img rounded-xl transition-all" src="/images/nextjs.jpeg" width={100} height={100} alt="nextjs" data-aos="zoom-in" data-aos-delay="800"/>
            </div>
          </div>
          <div className="background grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 p-8 rounded-lg">
          <div className="border-white p-4 flex items-center justify-center">
              <h3 className="text-xl font-semibold text-white">
                Back End Skills
              </h3>
            </div>
            <Link href={'https://nodejs.org'} target="_blank" className="border-white  px-4 py-12 border-b-[1px] md:border-b-0 border-white/45 p-4 md:py-4 flex items-center justify-center">
            <Image className="skill-img transition-all" src="/images/nodejs.png" width={100} height={100} alt="nodejs" data-aos="zoom-in" />
            </Link>
          
            <div className="border-white  px-4 py-12 border-b-[1px] md:border-b-0 border-white/45 p-4 md:py-4 flex items-center justify-center">
            <Image className="skill-img transition-all" src="/images/express-js.png" width={100} height={100} alt="express js" data-aos="zoom-in" data-aos-delay="200"/>
            </div>
            <div className="border-white  px-4 py-12 border-b-[1px] md:border-b-0 border-white/45 p-4 md:py-4 flex items-center justify-center">
            <Image className="skill-img transition-all" src="/images/fastapi.svg" width={100} height={100} alt="express js" data-aos="zoom-in" data-aos-delay="200"/>
            </div>
            <div className=" px-4 py-12  md:border-b-0 border-white/45 p-4 flex md:py-4 items-center justify-center">
            <Image className="skill-img transition-all" src="/images/java.png" width={100} height={100} alt="express js" data-aos="zoom-in" data-aos-delay="200"/>
            </div>
          </div>
          <div className="  skill-border grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 p-8 rounded-lg">
            <div className="border-right p-4 flex items-center justify-center">
              <h3 className="text-xl font-semibold text-white">
                Data Base Skills
              </h3>
            </div>
            <div className="border-right  px-4 py-12 border-b-[1px] md:border-b-0 border-white/30 p-4 md:py-4 flex items-center justify-center">
              <Image className="skill-img transition-all" src="/images/mongo-db.png" width={100} height={100} alt="mongodb" data-aos="zoom-in" />
            </div>
            <div className="border-right  px-4 py-12 border-b-[1px] md:border-b-0 border-white/30 p-4 md:py-4 flex items-center justify-center">
            <Image className="skill-img transition-all" src="/images/postgresq.png" width={100} height={100} alt="postgresq" data-aos="zoom-in" data-aos-delay="200"/>
            
            </div>
            <div className=" px-4 py-12  md:border-b-0 border-white/30 p-4 flex items-center md:py-4 justify-center">
            <Image className="skill-img transition-all" src="/images/MongoPython.png" width={100} height={100} alt="MongoPython" data-aos="zoom-in" data-aos-delay="200"/>
            
            </div>
           
          </div>
          <div className=" background grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 p-8 rounded-lg">
            <div className="border-white p-4 flex items-center justify-center">
              <h3 className="text-xl font-semibold text-white">
                Other Skills
              </h3>
            </div>
            <div className="border-white  px-4 py-12 border-b-[1px] md:border-b-0 border-white/45 p-4 md:py-4 flex items-center justify-center">
              <Image className="skill-img transition-all" src="/images/python.png" width={100} height={100} alt="python" data-aos="zoom-in" />
            </div>
            <div className="border-white  px-4 py-12 border-b-[1px] md:border-b-0 border-white/45 p-4 md:py-4 flex items-center justify-center">
            <Image className="skill-img transition-all" src="/images/typescript.png" width={100} height={100} alt="typescript" data-aos="zoom-in" data-aos-delay="200"/>
            
            </div>
            <div className="border-white  px-4 py-12 border-b-[1px] md:border-b-0 border-white/45 p-4 md:py-4 flex items-center justify-center">
            <Image className="skill-img transition-all" src="/images/c-language.png" width={100} height={100} alt="c++" data-aos="zoom-in" data-aos-delay="400"/>
            </div>
            <div className="border-white  px-4 py-12 border-b-[1px] md:border-b-0 border-white/45 p-4 md:py-4 flex items-center justify-center">
            <Image className="skill-img transition-all" src="/images/tailwind.png" width={100} height={100} alt="tailwind" data-aos="zoom-in" data-aos-delay="600"/>
            </div>
            <div className=" px-4 py-12  md:border-b-0 border-white/30 p-4 flex items-center md:py-4 justify-center">
            <Image className="skill-img transition-all" src="/images/wordpress.png" width={100} height={100} alt="wordpress" data-aos="zoom-in" data-aos-delay="800"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;