import { RiHtml5Line } from "react-icons/ri";
import { RiCss3Line } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";
import { motion } from "framer-motion";

const iconVariants = (duration) =>({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },

});

const Technologies = () => {
  return (
    <div className="pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiHtml5Line className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate" 
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiCss3Line className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate" 
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiJavascriptLine className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiTailwindCssLine className="text-7xl text-cyan-500" />
        </motion.div>
      </div>
    </div>
  )
}

export default Technologies;
