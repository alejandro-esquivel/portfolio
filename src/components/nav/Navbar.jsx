import { motion } from "motion/react";
import Navlink from "./Navlink";
import BurgerIcon from "./BurgerIcon";
import { useState, useRef, useEffect } from "react";

const navLinkList = [
  {
    url: '#home',
    text: 'Home'
  },
  {
    url: '#aboutme',
    text: 'About me'
  },
  {
    url: '#skills',
    text: 'Skills'
  },
  {
    url: '#projects',
    text: 'Projects'
  },
  {
    url: '#contact',
    text: 'Contact'
  }
]

function Navbar() {
  const [burgerIsActive, setBurgerIsActive] = useState(false);
  const navRef = useRef(null);
  const blobRef = useRef(null);
  const [navlinkIsHovered, setNavlinkIsHovered] = useState(false);

  const toggleBurgerState = (e) => {
    e.stopPropagation();
    setBurgerIsActive(!burgerIsActive);
  }

  const handleOutsideNavClick = (e) => {
    if (burgerIsActive && navRef.current && !navRef.current.contains(e.target)) {
      setBurgerIsActive(false);
    }
  }

  const handleNavlinkClick = () => {
    setBurgerIsActive(false);
  }

  const handleNavlinkHover = (e) => {
    setNavlinkIsHovered(true);

    const blob = blobRef.current;
    const rect = e.target.getBoundingClientRect();
    const navRect = navRef.current.getBoundingClientRect();

    const relativeX = rect.x - navRect.x;
    const relativeY = rect.y - navRect.y;

    const [width, height] = [rect.width, rect.height];

    blob.style.transform = `translate3d(${relativeX}px, ${relativeY}px, 0)`;
    blob.style.width = `${width}px`;
    blob.style.height = `${height}px`;
  }

  const handleNavlinkLeave = () => {
    console.log("Leaving...");
    // setNavlinkIsHovered(false);
  }

  useEffect(() => {
    if (burgerIsActive) {
      document.addEventListener('touchstart', handleOutsideNavClick);
    }

    return () => {
      document.removeEventListener('touchstart', handleOutsideNavClick);
    }
  }, [burgerIsActive])

  return (
    <motion.nav initial={{ y: -50 }} animate={{ y: 5 }} ref={navRef}
      className={`z-10 fixed left-0 right-0 flex flex-col bg-slate-200
       ${burgerIsActive ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 transition-all duration-300 justify-between w-11/12 px-6 py-3 mx-auto mt-4 lg:flex-row lg:w-8/12 xl:w-6/12 rounded-2xl ${burgerIsActive ? 'bg-opacity-10 backdrop-blur-md' : 'bg-opacity-0'}`}
    >
      <div className="self-end lg:hidden" onClick={toggleBurgerState}>
        <BurgerIcon isOpen={burgerIsActive} />
      </div>
      <div className="lg:block"></div>
      <ul className={` ${burgerIsActive ? ' h-[initial] flex' : 'hidden h-0'} transition-all lg:h-[initial] lg:flex flex-col justify-center gap-3 text-xl lg:flex-row`}
        onMouseLeave={handleNavlinkLeave}>
        <span className={`absolute top-0 left-0 hidden px-3 py-2 transition-all duration-300 bg-blue-700 rounded-lg ${navlinkIsHovered ? 'lg:block' : ''}`} ref={blobRef} ></span>
        {navLinkList.map((navLink) => (
          <Navlink url={navLink.url} onClick={handleNavlinkClick}
            onMouseOver={handleNavlinkHover}
            key={navLink.url}>
            {navLink.text}
          </Navlink>
        ))}
      </ul>
    </motion.nav>
  )
}

export default Navbar;