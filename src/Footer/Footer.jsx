import React from 'react';
import { NavLink } from 'react-router';
import { FaGithubSquare,FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {

    const navLinks = (
        <>
                  <li> <NavLink className={({isActive}) => isActive ? " text-blue-500" : " border-gray-300"} to= "/"> Home</NavLink> </li>
                  <li> <NavLink className={({isActive}) => isActive ? " text-blue-500" : " border-gray-300"} to= "/projects"> Projects</NavLink> </li>
                  <li> <NavLink className={({isActive}) => isActive ? " text-blue-500" : " border-gray-300"} to= "/learning"> Learning </NavLink> </li>
                  <li> <NavLink className={({isActive}) => isActive ? " text-blue-500" : " border-gray-300"} to= "/blogs"> Journey</NavLink> </li>
                  <li> <NavLink className={({isActive}) => isActive ? " text-blue-500" : " border-gray-300"} to= "/contacts"> Contacts </NavLink> </li>
              
        
      </>
    );
    return (
        <div className=' '>
           <footer className="footer footer-horizontal dark:bg-gray-800 footer-center bg-base-300 text-base-content rounded p-10">
                
                    
                    <ul className='grid grid-flow-col gap-4'>
                    {navLinks}


                    </ul>

  <nav>
    <div className="grid grid-flow-col gap-4">
      
     <a href="https://www.facebook.com/utso.roy.754/"> <FaFacebookSquare size={25} /></a>
     <a href="https://github.com/Utso-Roy"> <FaGithubSquare size={25} /></a>
     <a href="https://www.linkedin.com/in/utsoroy8876/"> <FaLinkedin size={25} /></a>
    </div>
  </nav>
  <aside>
    <p>Utso Chadro Roy {new Date().getFullYear()} - Personal </p>
  </aside>
</footer>
            
        </div>
    );
};

export default Footer;