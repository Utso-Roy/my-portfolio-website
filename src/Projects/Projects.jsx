import React from "react";
import { motion } from "framer-motion";
import projectList from "../../public/projectList.json"



const Projects = () => {
  return (
    <div className="px-6 py-20 my-4 dark:bg-gray-900 bg-base-300">
      <h2 className="text-3xl font-bold text-[#257DC8] text-center mb-16">
        My Projects
      </h2>
      <div className="relative border-l-2 border-[#257DC8] dark:border-gray-600 ml-4">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-12 ml-6 relative"
          >
            <div className="absolute w-4 h-4 bg-[#257DC8] rounded-full left-[-10px] top-2.5"></div>
            <div
              className={`md:flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } items-center`}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/2 rounded-xl cursor-pointer shadow-lg object-cover h-56"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
              <div className="md:w-1/2 px-6 mt-4 md:mt-0">
                <h3 className="text-2xl font-semibold text-[#257DC8]">
                  {project?.title}
                </h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  {project?.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded font-medium text-gray-800 dark:text-gray-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4">
                  <a
                    href={project?.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#257DC8] text-white px-4 py-2 rounded hover:bg-primary-focus transition"
                  >
                    Live
                  </a>
                  <a
                    href={project?.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-[#257DC8] text-[#257DC8] px-4 py-2 rounded hover:bg-[#257DC8] hover:text-white transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
