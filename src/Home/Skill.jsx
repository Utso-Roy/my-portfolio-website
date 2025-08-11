import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiFirebase,
  SiJsonwebtokens,
  SiTypescript,
  SiPostman,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";

const categorizedSkills = {
  Frontend: [
    { name: "React.js", icon: <SiReact size={24} /> },
    { name: "Next.js", icon: <SiNextdotjs size={24} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={24} /> },
  ],
  Backend: [
    { name: "MongoDB", icon: <SiMongodb size={24} /> },
    { name: "Express.js", icon: <SiExpress size={24} /> },
    { name: "Node.js", icon: <SiNodedotjs size={24} /> },
    { name: "Firebase", icon: <SiFirebase size={24} /> },
  ],
  Tools: [
    { name: "JWT Auth", icon: <SiJsonwebtokens size={24} /> },
    { name: "Typescript", icon: <SiTypescript size={24} /> },
    { name: "Postman", icon: <SiPostman size={24} /> },
    { name: "Git", icon: <SiGit size={24} /> },
    { name: "GitHub", icon: <SiGithub size={24} /> },
    { name: "Figma", icon: <SiFigma size={24} /> },
  ],
};

const SkillCategory = ({ title, skills, color, aosEffect }) => {
  return (
    <section
      className="mb-10 max-w-4xl mx-auto"
      data-aos={aosEffect}
      data-aos-duration="800"
    >
      <h3 className="text-2xl font-bold mb-6" style={{ color: color }}>
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 cursor-default select-none hover:shadow-lg transition-all"
          >
            <div style={{ color: color }}>{skill.icon}</div>
            <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

const Skill = () => {
  return (
    <div
      className="w-full bg-base-200 dark:bg-gray-800 mx-auto px-4 py-8"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <h2 className="text-3xl font-semibold mb-12 text-center text-[#0267af]">
        My Skills
      </h2>

      <SkillCategory
        title="Frontend"
        skills={categorizedSkills.Frontend}
        color="#257DC8"
        aosEffect="fade-right"
      />
      <SkillCategory
        title="Backend"
        skills={categorizedSkills.Backend}
        color="#22C55E"
        aosEffect="fade-left"
      />
      <SkillCategory
        title="Tools"
        skills={categorizedSkills.Tools}
        color="#257DC8"
        aosEffect="fade-up"
      />
    </div>
  );
};

export default Skill;
