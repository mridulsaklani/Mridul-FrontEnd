"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "Python", level: 75 },
  {name: "FastAPI", level: 70},
  {name: 'Pydantic', level: 60},
  {name: 'NumPy', level: 60},
  {name: 'SciPy', level: 60},
  {name: 'TensorFlow', level: 64},
  {name: 'Keras', level: 54},
  {name: 'PyTorch', level: 74},
  {name: 'OpenCV', level: 66},
  {name: 'PyMongo', level:55},
  {name: 'PostgreSQL', level:50}
];

const SkillbarTwo = () => {
  const ref = React.useRef(null);
              const isInView = useInView(ref, { once: true });

  return (
    <>
     
        <div className="w-full">
        
          <div>
            {skills.map((skill) => {
              
              return (
                <div key={skill.name} className="mb-4" ref={ref}>
                  <div className="flex justify-between">
                    <span className="text-lg font-medium">{skill.name}</span>
                    <span className="text-lg font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: isInView ? `${skill.level}%` : 0 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className="bg-blue-600 h-4 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
    </>
  );
};

export default SkillbarTwo;
