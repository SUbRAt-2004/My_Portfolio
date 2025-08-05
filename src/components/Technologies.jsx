import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiExpress, SiFramer, SiThreedotjs, SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "motion/react";


const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
    duration: duration,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse"
  },
  }
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-900 p-24'>
      <motion.h1 
      whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1.5}}
      className='my-20 text-center text-4xl'>Technologies</motion.h1>
      <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1.5}} className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4 transition transform duration-300 hover:scale-110 shadow-md hover:shadow-cyan-500/40">
  <RiReactjsLine className="text-7xl text-cyan-400" />
</motion.div>

<motion.div variants={iconVariants(3)} initial="initial" animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4 transition transform duration-300 hover:scale-110 shadow-md hover:shadow-green-500/40">
  <SiMongodb className="text-7xl text-green-500" />
</motion.div>

<motion.div variants={iconVariants(3.5)} initial="initial" animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4 transition transform duration-300 hover:scale-110 shadow-md hover:shadow-white/30">
  <SiExpress className="text-7xl text-white" />
</motion.div>

<motion.div variants={iconVariants(4)} initial="initial" animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4 transition transform duration-300 hover:scale-110 shadow-md hover:shadow-green-500/40">
  <FaNodeJs className="text-7xl text-green-500" />
</motion.div>

<motion.div variants={iconVariants(4.5)} initial="initial" animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4 transition transform duration-300 hover:scale-110 shadow-md hover:shadow-pink-500/40">
  <SiFramer className="text-7xl text-pink-500" />
</motion.div>

<motion.div variants={iconVariants(5)} initial="initial" animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4 transition transform duration-300 hover:scale-110 shadow-md hover:shadow-white/30">
  <SiThreedotjs className="text-7xl text-white" />
</motion.div>

<motion.div variants={iconVariants(5.5)} initial="initial" animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4 transition transform duration-300 hover:scale-110 shadow-md hover:shadow-blue-500/40">
  <SiMysql className="text-7xl text-blue-500" />
</motion.div>

      </motion.div>
    </div>
  )
}

export default Technologies;
