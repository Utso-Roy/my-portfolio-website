import React from "react";
import TiltedCard from "../../Reactbits/TiltedCard/TiltedCard";
import BlurText from "../../Reactbits/BlurText/BlurText";
import { motion } from "framer-motion";

const skills = [
  "MongoDB",
  "Express.js",
  "React.js",
  "Next.js",
  "Node.js",
  "Firebase",
  "Tailwind CSS",
  "JWT Auth",
  "Typescript"
];

const Home = () => {
  return (
    <div className="py-8 ">
      <div className="hero bg-base-300 dark:bg-gray-800 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* Image card */}
          <TiltedCard
            imageSrc="https://i.ibb.co.com/6061VMNC/Utso-Roy.jpg"
            captionText="Utso Chandro Roy"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="380px"
            imageWidth="310px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />

          {/* Intro text */}
          <div>
            <h3 className="text-[16px]">Hi, My name is</h3>
            <h1 className="font-semibold">
              <BlurText
                text="Utso Chandro Roy"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-[3rem] dark:text-white text-gray-700"
              />
            </h1>
            <h2 className="text-[2rem] text-gray-700 dark:text-white font-semibold">
              I build things for the web.
            </h2>
            <p className="text-[16px] my-2">
              I am a passionate MERN Stack Developer skilled in building
              full-stack, <br />
              responsive, and user-friendly web applications using MongoDB,
              Express.js, <br />
              React.js, Next.js, and Node.js. I focus on clean design,
              efficient coding practices, <br />
              and delivering seamless user experiences with modern technologies.
            </p>

            {/*  Featured Skills Section */}
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-4 dark:text-white text-gray-700">
                 Featured Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                      type: "spring",
                    }}
                    className="px-4 py-2 bg-[#257DC8] text-white rounded-full text-sm shadow-md hover:scale-105 transition-transform duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            {/* End Skills */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
