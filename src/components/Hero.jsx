import React from 'react';
import { motion } from "motion/react"
import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/subratProfile.jpg';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5,
    }
  },
})
const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 variants={container(0)} initial="hidden" animate="visible" className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Subrat Kumar Malla</motion.h1>
                <motion.span variants={container(0.5)} initial="hidden" animate="visible" className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>Full Stack Developer</motion.span>
                <motion.p variants={container(1)} initial="hidden" animate="visible" className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                    {HERO_CONTENT}
                </motion.p>
            </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex justify-center'>
                <motion.div
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1, delay: 1.2 }}
  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 255, 255, 0.6)" }}
  className="relative p-[2px] rounded-xl bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500"
>
  <img
    src={profilePic}
    alt="Subrat Kumar Malla"
    className="rounded-xl border-4 border-white"
  />
  <div className="absolute bottom-0 left-0 right-0 h-1/3 rounded-b-xl bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
</motion.div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
