import Description from './Description.jsx';
import { motion } from "motion/react";

function Hero() {

  return (
    <motion.section initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5 }} className=" flex gap-6 flex-col w-11/12 h-[100vh] mx-auto justify-center align-middle lg:w-10/12 xl:w-8/12">
      <Description />
      <div className="self-start text-xl lg:text-3xl justify-self-start text-slate-200">
        <p>I solve problems, make things work and look <span className="text-[4.2rem] text-lime-400 ml-4 leading-10" style={{ fontFamily: 'Brother Signature' }}>fancy</span>.</p>
      </div>
    </motion.section>
  )
}

export default Hero;