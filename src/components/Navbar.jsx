import { motion } from "motion/react";
import Navlink from "./Navlink";
import { useState } from "react";

function Navbar() {
  const [burgerIsActive, setBurgerIsActive] = useState(false);

  const toggleBurgerState = () => {
    setBurgerIsActive(!burgerIsActive);
  }

  return (
    <motion.nav initial={{ y: -50 }} animate={{ y: 5 }}
      className={`z-10 fixed left-0 right-0 flex flex-col justify-between w-11/12 px-6 py-3 mx-auto mt-4 lg:flex-row lg:w-8/12 xl:w-6/12 rounded-2xl backdrop-blur-xl bg-slate-50/5`}
    >
      <div className="self-end lg:hidden" onClick={toggleBurgerState}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className="rounded-sm size-8 text-slate-50 ring-1 ring-transparent active:ring-slate-100 active:text-slate-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      <div className="lg:block"></div>
      <ul className={` ${burgerIsActive ? ' h-[initial] flex' : 'hidden h-0'} transition-all lg:h-[initial] lg:flex flex-col justify-center gap-3 text-xl lg:flex-row`}>
        <Navlink>
          <a href="">Home</a>
        </Navlink>
        <Navlink>
          <a href="">About me</a>
        </Navlink>
        <Navlink>
          <a href="">Projects</a>
        </Navlink>
        <Navlink>
          <a href="">Contact</a>
        </Navlink>
      </ul>
    </motion.nav>
  )
}

export default Navbar;