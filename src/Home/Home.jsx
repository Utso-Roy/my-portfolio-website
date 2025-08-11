import React from "react";
import TiltedCard from "../../Reactbits/TiltedCard/TiltedCard";
import BlurText from "../../Reactbits/BlurText/BlurText";
import { motion } from "framer-motion";
import AboutMe from "./AboutMe";
import Skill from "./Skill";



const Home = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";  
    link.download = "Utso_Roy_Resume.pdf";
    link.click();
  };

  return (
    <div className="py-12 space-y-5">
      <div className="hero bg-base-200 dark:bg-gray-800 min-h-screen">
        <div className="hero-content flex-col space-y-20 lg:space-y-0 lg:flex-row-reverse lg:gap-12">
          
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
          <div className="text-center lg:text-left max-w-xl">
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

           
            <p className="text-[16px] my-4 text-gray-600 dark:text-gray-300">
              I am a passionate MERN Stack Developer skilled in building
              full-stack, responsive, and user-friendly web applications.
            </p>

            {/* Resume Download Button */}
            <button
              onClick={handleResumeDownload}
              className="btn btn-outline text-[#0267af] hover:bg-[#0267af] hover:text-white mt-4"
            >
              Download Resume
            </button>

          
          </div>
        </div>
      </div>
      <section>
          <AboutMe></AboutMe>
      </section>

      <section>
        <Skill></Skill>

        
      </section>

    
    </div>
  );
};

export default Home;
