import React from 'react';
import { NavLink } from 'react-router';
import { FaGithubSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#257DC8] font-semibold" : "text-gray-500 hover:text-blue-400"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#257DC8] font-semibold" : "text-gray-500 hover:text-blue-400"
          }
          to="/projects"
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#257DC8] font-semibold" : "text-gray-500 hover:text-blue-400"
          }
          to="/learning"
        >
          Learning
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#257DC8] font-semibold" : "text-gray-500 hover:text-blue-400"
          }
          to="/journey"
        >
          Journey
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#257DC8] font-semibold" : "text-gray-500 hover:text-blue-400"
          }
          to="/contacts"
        >
          Contacts
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <footer className="bg-base-300 dark:bg-gray-800 text-base-content py-10 px-4 text-center rounded">
        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-4 mb-6 text-sm sm:text-base">
          {navLinks}
        </ul>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://www.facebook.com/utso.roy.754/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookSquare size={28} className="text-[#257DC8] hover:text-blue-800" />
          </a>
          <a
            href="https://github.com/Utso-Roy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithubSquare size={28} className="text-gray-700 hover:text-black dark:text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/utsoroy8876/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} className="text-[#257DC8] hover:text-blue-900" />
          </a>
        </div>

        {/* Footer Bottom Text */}
        <aside className="text-sm text-gray-500 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} Utso Chandro Roy – Personal</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
