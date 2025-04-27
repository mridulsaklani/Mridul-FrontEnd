'use client';

import React from 'react';
import Image from 'next/image';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Stars } from '@react-three/drei';

const FloatingWireSphere = () => {
  return (
    <mesh>
     
      <sphereGeometry args={[1.5, 128, 128]} />
      <meshBasicMaterial 
        color="#00FFFF" 
        wireframe 
        transparent 
        opacity={0.7} 
      />
    </mesh>
  );
};

const Special = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-8 lg:py-24 flex flex-col items-center w-full justify-center gap-5 px-5">
        <div className="mb-9 flex flex-col w-full items-center lg:items-start">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-center lg:text-start">Everything Is for You</h2>
          <span className="border-blue-600 border-4 w-20 rounded-full flex flex-col"></span>
        </div>

        <div className="flex flex-col justify-center items-center gap-16 lg:flex-row lg:gap-5 w-full">
          
          <div className="w-full lg:w-[40%]">
            <Image
              className="shadow-blue-400 shadow-xl rounded-xl aspect-[3/4] object-cover w-full"
              src={"/images/special.jpg"}
              width={400}
              height={360}
              quality={100}
              alt="My parents"
            />
          </div>

          <div className="w-full h-[400px] lg:w-[60%] rounded-xl  overflow-hidden">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <FloatingWireSphere />
              <OrbitControls 
                enableZoom={false} 
                autoRotate 
                autoRotateSpeed={1}  
                dampingFactor={0.1} 
              />
              <Stars 
                radius={10} 
                depth={50} 
                count={3000} 
                factor={4} 
                fade 
                speed={0.5} 
              />
              <Environment preset="sunset" />
            </Canvas>
          </div>
        </div>
      </div>
    </>
  );
};

export default Special;
