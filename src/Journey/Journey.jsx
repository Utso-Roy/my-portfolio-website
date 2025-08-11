import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const journeyData = [
  {
    year: "2022",
    title: "Foundation in HTML & CSS",
    icon: <FaHtml5 className="text-orange-500 text-2xl" />,
    description:
      "My journey began with learning the fundamentals of HTML and CSS. I built basic static web pages and explored how websites are structured and styled.",
  },
  {
    year: "2023",
    title: "Exploring JavaScript & React",
    icon: <FaReact className="text-blue-400 text-2xl" />,
    description:
      "I dived into JavaScript and discovered the power of React. This opened the door to building interactive, component-based, and responsive web applications.",
  },
  {
    year: "2024",
    title: "Becoming a MERN Stack Developer",
    icon: <FaNodeJs className="text-green-600 text-2xl" />,
    description:
      "I embraced the full MERN stack — MongoDB, Express.js, React, and Node.js. I built full-stack projects, handled APIs, authentication, and worked with real-time data.",
  },
  {
    year: "2025",
    title: "Real Projects, Problem Solving & Growth",
    icon: <FaDatabase className="text-purple-500 text-2xl" />,
    description:
      "Currently working on real-world projects with complex requirements. I’m focusing on clean architecture, scalable backend systems, testing, and DevOps tools to become a complete full-stack engineer.",
  },
];

const Journey = () => {
  return (
   <div className="py-20 bg-base-200 dark:bg-gray-800 px-4 md:px-10 my-4">
  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold text-[#257DC8] dark:text-white">My Development Journey</h2>
    <p className="text-gray-600 dark:text-gray-300 mt-2 text-[16px] max-w-xl mx-auto">
      A timeline of my learning, growth, and transition into a MERN Stack Developer...
    </p>
  </div>

  <div className="space-y-10 relative border-l-4 border-dashed border-[#257DC8] ml-4">
    {journeyData.map((item, index) => (
      <motion.div
        key={index}
        className="ml-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4">
          <div className="bg-white dark:bg-gray-800 shadow-lg p-3 rounded-full border border-primary">
            {item.icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-base-content dark:text-white">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{item.year}</p>
          </div>
        </div>
        <p className="ml-14 mt-2 text-gray-700 dark:text-gray-300">{item.description}</p>
      </motion.div>
    ))}
  </div>

  <motion.div
    className="mt-12 text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <p className="text-[16px] text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
      This journey has taught me that consistency...
    </p>
    <img
      src="https://i.ibb.co/Xk7qLK60/My-Journey-in-Web-Development-visual-selection-2.png"
      alt="My Web Dev Journey"
      className="w-full max-w-3xl mx-auto mt-6 rounded shadow-lg object-contain"
    />
  </motion.div>
</div>

  );
};

export default Journey;
