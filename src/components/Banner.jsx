import {BANNER_CONTENT} from "./data";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: {y: -100, opacity: 0},
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

const Banner = () => {
  return  (
  <div className="pb-4 lg:mb-35">
    <div className="flex flex-wrap">
        <div className="w-full">
        <div className="flex flex-col items-center">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-16 text-7xl font-light tracking-tight lg:mt-16 lg:text-10xl">Gaurangi Rane</motion.h1>
            <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
            bg-clip-text text-4xl tracking-tight text-transparent">
                Front End Developer
            </motion.span>
            <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible" 
            className="my-2 max-w-lg py-6 font-light text-center">{BANNER_CONTENT}</motion.p>
            <a href="/Gaurangi_Rane_CV.pdf" className="border-b" download>Download Resume</a>
        </div>
        </div>
        
    </div>
  </div>
  );
};

export default Banner;
