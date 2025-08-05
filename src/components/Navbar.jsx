import logo from "../assets/kevinRushLogo.jpg";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { motion } from "motion/react";  // or from 'framer-motion' if you're using that


const Navbar = () => {
  return (
    <div>
      <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <motion.img
  className="mx-2 w-16 cursor-pointer"
  src={logo}
  alt="logo"
  initial={{ scale: 1 }}
  animate={{ scale: [1, 1.1, 1] }}
  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
/>

        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a
              href="https://www.linkedin.com/in/subrat-kumar-malla-3285872a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/SUbRAt-2004"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/MallaSubrat2004"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaSquareXTwitter />
            </a>
            <a
              href="https://www.instagram.com/__subrat__2004__/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaInstagram />
            </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
