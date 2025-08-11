import React from "react";
import { FaLaptopCode, FaBriefcase, FaGraduationCap } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section
      data-aos="fade-right"
      data-aos-duration="1200" // animation duration in ms
      data-aos-delay="100" // small delay before start
      data-aos-easing="ease-in-out" // smooth easing
      className="mx-auto p-6 bg-base-200 dark:bg-gray-800"
    >
      <div className="flex flex-col items-center gap-8">
        {/* About Text */}
        <div
          className="text-gray-800 dark:text-gray-200 max-w-4xl"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="150"
        >
          <h2
            className="text-4xl text-center font-bold mb-6 text-[#0267af]"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            About Me
          </h2>
          <p className="mb-6 text-[16px]">
            Hi! I am Utso Chandro Roy, a passionate MERN stack developer with
            expertise in building modern, responsive, and scalable web
            applications. I love creating clean, efficient code and
            user-friendly experiences that make a difference.
          </p>
          <p className="mb-6 text-[16px]">
            I especially enjoy working on projects that challenge me to learn
            new technologies and solve complex problems. Outside of programming,
            I’m an avid reader, enjoy hiking in nature, and love experimenting
            with photography — these hobbies inspire my creativity and keep me
            energized.
          </p>
          <p className="mb-8 leading-relaxed text-lg">
            I believe in continuous growth, both personally and professionally.
            I’m friendly, detail-oriented, and always excited to collaborate
            with others who share a passion for technology and innovation.
          </p>

          {/* Skills & Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div
              data-aos="flip-left"
              data-aos-duration="1000"
              className="bg-blue-50 dark:bg-[#164e89] rounded-lg p-6 shadow-lg cursor-pointer transition-colors duration-300"
            >
              <FaLaptopCode size={40} className="mx-auto mb-3 text-[#0267af]" />
              <h3 className="font-semibold text-lg text-[#0267af]">
                Web Development
              </h3>
              <p className="text-sm text-[#034078] dark:text-[#9fc5e8] mt-2">
                MERN Stack, React.js, Next.js, Node.js
              </p>
            </div>

            <div
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="bg-green-50 dark:bg-[#145214] rounded-lg p-6 shadow-lg cursor-pointer transition-colors duration-300"
            >
              <FaBriefcase
                size={40}
                className="mx-auto mb-3 text-green-600"
              />
              <h3 className="font-semibold text-lg text-green-600 dark:text-green-300">
                Professional Experience
              </h3>
              <p className="text-sm text-green-700 dark:text-green-200 mt-2">
                1+ years in full-stack development & project management
              </p>
            </div>

            <div
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="400"
              className="bg-purple-50 dark:bg-[#4b276f] rounded-lg p-6 shadow-lg cursor-pointer transition-colors duration-300"
            >
              <FaGraduationCap
                size={40}
                className="mx-auto mb-3 text-purple-500"
              />
              <h3 className="font-semibold text-lg text-purple-600 dark:text-purple-300">
                Education
              </h3>
              <p className="text-sm text-purple-700 dark:text-purple-200 mt-2">
                Bachelor in Computer Science & Engineering
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
