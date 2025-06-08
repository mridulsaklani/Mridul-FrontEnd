"use client";
import React, { useState, useEffect, useRef } from "react";
import Skillbar from "./Skillbar";
import Image from "next/image";
import { FaLock } from "react-icons/fa";
import AOS from "aos";
import { Volume2, VolumeX } from "lucide-react";
import "aos/dist/aos.css";
const Resume = () => {
  const [num, setnum] = useState(1);
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (num === 4 && audioRef.current) {
      const audio = audioRef.current;
      audio.muted = isMuted; 
      audio.play().catch((err) => {
        console.warn("Playback prevented:", err);
      });
    }
  }, [num, isMuted]);

  const toggleMute = () => {
    if (audioRef.current) {
      const shouldMute = !audioRef.current.muted;
      audioRef.current.muted = shouldMute;
      setIsMuted(shouldMute);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <div className="max-w-7xl m-auto pt-20 pl-5 pr-5 overflow-hidden ">
        <div className="mb-14 flex flex-col items-center lg:items-start">
          <h2 className="lg:text-5xl font-bold text-white mb-4">My Resume</h2>
          <span className="border-blue-600 border-4 w-20 rounded-full flex flex-col"></span>
        </div>
        <div className="w-full mb-14">
          <div
            className="resume-shadow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 rounded-xl p-4 lg:p-0"
            data-aos="zoom-in"
          >
            <div className="py-4 lg:py-8 flex justify-center border-b-[1px] md:border-b-0 border-white/20 items-center">
              <button
                className={
                  num === 1
                    ? " text-blue-600 text-xl font-semibold tracking-wide"
                    : "text-white text-xl font-semibold tracking-wide"
                }
                onClick={() => setnum(1)}
              >
                Education <span className={`${num === 1 ? "scale-115 rotate-12" : 'scale-100'} transition-all duration-300`}>🎓</span>
              </button>
            </div>
            <div className=" py-4 lg:py-8 border-b-[1px] md:border-b-0 border-white/20 flex justify-center items-center">
              <button
                className={
                  num === 2
                    ? " text-blue-600 text-xl font-semibold tracking-wide"
                    : "text-white text-xl font-semibold tracking-wide"
                }
                onClick={() => setnum(2)}
              >
                Professional Skills <span className={`${num === 1 ? "scale-115 rotate-12" : 'scale-100'} transition-all duration-300`}>☠️</span>
              </button>
            </div>
            <div className="py-4 lg:py-8 border-b-[1px] md:border-b-0 border-white/20 flex justify-center items-center">
              <button
                className={
                  num === 3
                    ? " text-blue-600 text-xl font-semibold tracking-wide"
                    : "text-white text-xl font-semibold tracking-wide"
                }
                onClick={() => setnum(3)}
              >
                Working <span className={`${num === 1 ? "scale-115 rotate-12" : 'scale-100'} transition-all duration-300`}> 🧑‍💻 </span>
              </button>
            </div>
            <div className="py-4 lg:py-8 flex justify-center items-center">
              <button
                className={
                  num === 4
                    ? " text-blue-600 text-xl font-semibold tracking-wide"
                    : "text-white text-xl font-semibold tracking-wide"
                }
                onClick={() => setnum(4)}
              >
                Burn <span className={`${num === 1 ? "scale-115 rotate-12" : 'scale-100'} transition-all duration-300`}> 🔥 </span>
              </button>
            </div>
          </div>
          <div
            className={
              num === 1
                ? "flex w-full flex-col lg:flex-row py-16  gap-14"
                : " hidden"
            }
          >
            <div className="lg:w-1/2" data-aos="zoom-in-right">
              <div className="mb-12 flex flex-col  items-center lg:items-start">
                <h5 className="text-blue-600 mb-4">2018 - Current</h5>
                <h3 className="text-4xl font-bold text-white">
                  Education Quality
                </h3>
              </div>
              <div className="md:pl-8 md:border-l-4 border-rose-200  flex flex-col gap-12">
                <div className="skill-border edu relative p-8 rounded-lg flex flex-col ">
                  <div className="border-circle">
                    <div className=" flex items-center border-bottom pb-8">
                      <div className="w-3/4">
                        <h4 className="font-bold text-2xl text-white mb-3">
                          Bechelor of Science
                        </h4>
                        <h5 className="font-bold text-neutral-300">
                          Himachal Pradesh University (2018 - 2021){" "}
                        </h5>
                      </div>
                      <div className="w-1/4 flex items-center justify-end">
                        <p className="text-blue-600 font-semibold">7.86 / 10</p>
                      </div>
                    </div>
                    <div className="text-neutral-200 pt-8">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque sunt ratione dolorem delectus culpa fugit aperiam,
                        illum repudiandae. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Tenetur unde quod maiores!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="skill-border edu relative p-8 rounded-lg flex flex-col ">
                  <div className="border-circle">
                    <div className=" flex items-center border-bottom pb-8">
                      <div className="w-3/4">
                        <h4 className="font-bold text-2xl text-white mb-3">
                          Master of Computer Applications
                        </h4>
                        <h5 className="font-bold text-neutral-300">
                          Lovely Professional University (2022 - 2024){" "}
                        </h5>
                      </div>
                      <div className="w-1/4 flex items-center justify-end">
                        <p className="text-blue-600 font-semibold">8.52 / 10</p>
                      </div>
                    </div>
                    <div className="text-neutral-200 pt-8">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque sunt ratione dolorem delectus culpa fugit aperiam,
                        illum repudiandae. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Tenetur unde quod maiores!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2" data-aos="zoom-in-left">
              <div className="mb-12 flex flex-col items-center lg:items-start">
                <h5 className="text-blue-600 mb-4">2018 - Current</h5>
                <h3 className=" text-4xl font-bold text-white">
                  Education Quality
                </h3>
              </div>
              <div className="md:pl-8 md:border-l-4 border-rose-200  flex flex-col gap-12">
                <div className="skill-border edu relative p-8 rounded-lg flex flex-col ">
                  <div className="border-circle">
                    <div className=" flex items-center border-bottom pb-8">
                      <div className="w-3/4">
                        <h4 className="font-bold text-2xl text-white mb-3">
                          Master of Biz Administration
                        </h4>
                        <h5 className="font-bold text-neutral-300">
                          Lovely Professional University (2024 - Present){" "}
                        </h5>
                      </div>
                      <div className="w-1/4 flex items-center justify-end">
                        <p className="text-blue-600 font-semibold">Pursuing</p>
                      </div>
                    </div>
                    <div className="text-neutral-200 pt-8">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque sunt ratione dolorem delectus culpa fugit aperiam,
                        illum repudiandae. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Tenetur unde quod maiores!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="skill-border  relative p-8 rounded-lg flex flex-col ">
                  <div className="absolute z-10 w-full h-full backdrop-blur-md top-0 left-0 rounded-xl flex justify-center items-center">
                    <FaLock className="text-4xl" />
                  </div>
                  <div className="border-circle">
                    <div className=" flex items-center border-bottom pb-8">
                      <div className="w-3/4">
                        <h4 className="font-bold text-2xl text-white mb-3">
                          Master of Computer Applications
                        </h4>
                        <h5 className="font-bold text-neutral-300">
                          Lovely Professional University (2022 - 2024){" "}
                        </h5>
                      </div>
                      <div className="w-1/4 flex items-center justify-end">
                        <p className="text-blue-600 font-semibold">8.52 / 10</p>
                      </div>
                    </div>
                    <div className="text-neutral-200 pt-8">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque sunt ratione dolorem delectus culpa fugit aperiam,
                        illum repudiandae. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Tenetur unde quod maiores!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={num === 2 ? "flex w-full py-16  gap-14" : "hidden"}>
            <Skillbar />
          </div>
          <div
            className={
              num === 3
                ? "flex flex-col lg:flex-row w-full py-16 gap-14"
                : "hidden"
            }
          >
            <div className="lg:w-1/2 flex justify-center items-center">
              <Image
                className="shadow-blue-400 shadow-xl rounded-xl"
                src="/images/dev-team.jpg"
                width={500}
                height={500}
                alt="Image"
              />
            </div>
            <div className="lg:w-1/2">
              <h5 className="text-blue-600 mb-2 lg:mb-4 text-center lg:text-start">
                Currenty Working
              </h5>
              <h3 className=" text-3xl lg:text-4xl font-bold text-white mb-6 lg:mb-4 text-center lg:text-start">
                Xonier Technology
              </h3>
              <p className="text-neutral-200 text-lg text-center lg:text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus odit doloremque tempore! Rerum illum culpa debitis,
                laborum nobis labore reprehenderit vero obcaecati quae? Est
                vitae veritatis, porro aliquid dicta cum quisquam placeat
                consequatur doloribus, error neque modi suscipit autem in non
                iure eius voluptatibus expedita at enim voluptatum sapiente ea!
              </p>
            </div>
          </div>
          <div
            className={
              num === 4
                ? "flex flex-col lg:flex-row w-full py-16 gap-14"
                : "hidden"
            }
          >
            <div className="w-full lg:w-[40%] gap-5  flex flex-col lg:flex-row justify-start  items-center relative ">
              <audio ref={audioRef} src="/music/burn.mp3" loop autoPlay muted />
             
  <button
    onClick={toggleMute}
    className="fixed bottom-32 right-10 lg:right-11 z-50 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition musbtn"
    aria-label="Toggle Mute"
  >
    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
  </button>
            <Image
                className="shadow-blue-400 shadow-xl rounded-xl w-full lg:w-fit"
                src="/images/Mridul-singh-saklani-gym.jpg"
                width={300}
                height={400}
                alt="Mridul singh saklani"
              />
              <Image
                className="shadow-blue-400 shadow-xl rounded-xl relative lg:absolute w-full lg:w-fit  lg:right-0 lg:top-1/2 lg:-translate-y-1/2"
                src="/images/Mridul-singh-sakalni-gym2.jpg"
                width={170}
                height={100}
                alt="Mridul singh saklani"
              />
            </div>
            <div className="w-full lg:w-[60%]">
              <h5 className="text-blue-600 mb-2 lg:mb-4 text-center lg:text-start">
                Burning🔥
              </h5>
              <h3 className=" text-3xl lg:text-4xl font-bold text-white mb-6 lg:mb-4 text-center lg:text-start">
                Pushing limits. Breaking boundaries
              </h3>
              <p className="text-neutral-200 text-lg text-center lg:text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus odit doloremque tempore! Rerum illum culpa debitis,
                laborum nobis labore reprehenderit vero obcaecati quae? Est
                vitae veritatis, porro aliquid dicta cum quisquam placeat
                consequatur doloribus, error neque modi suscipit autem in non
                iure eius voluptatibus expedita at enim voluptatum sapiente ea!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
