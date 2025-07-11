import { motion } from 'motion/react'
import Navlink from './Navlink'
import BurgerIcon from './BurgerIcon'
import { useState, useRef, useEffect } from 'react'

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

function Navbar () {
  const [burgerIsActive, setBurgerIsActive] = useState(false)
  const navRef = useRef(null)
  const blobRef = useRef(null)
  const [navlinkIsHovered, setNavlinkIsHovered] = useState(false)

  const toggleBurgerState = e => {
    e.stopPropagation()
    setBurgerIsActive(!burgerIsActive)
  }

  const handleOutsideNavClick = e => {
    if (
      burgerIsActive &&
      navRef.current &&
      !navRef.current.contains(e.target)
    ) {
      setBurgerIsActive(false)
    }
  }

  const handleNavlinkClick = () => {
    setBurgerIsActive(false)
  }

  const handleNavlinkHover = e => {
    setNavlinkIsHovered(true)

    const blob = blobRef.current
    const rect = e.target.getBoundingClientRect()
    const navRect = navRef.current.getBoundingClientRect()

    const relativeX = rect.x - navRect.x
    const relativeY = rect.y - navRect.y

    const [width, height] = [rect.width, rect.height]

    blob.style.transform = `translate3d(${relativeX}px, ${relativeY}px, 0)`
    blob.style.width = `${width}px`
    blob.style.height = `${height}px`
  }

  const handleNavlinkLeave = () => {
    setNavlinkIsHovered(false)
  }

  useEffect(() => {
    if (burgerIsActive) {
      document.addEventListener('touchstart', handleOutsideNavClick)
    }

    return () => {
      document.removeEventListener('touchstart', handleOutsideNavClick)
    }
  }, [burgerIsActive])

  // TODO: Modify the navbar so that when you scroll down the blob moves while also snapping to the navigation links related to the current section.

  return (
    <motion.nav
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 5 }}
      transition={{ ease: 'linear', delay: 0 }}
      ref={navRef}
      className={`
      z-10 fixed left-0 right-0 flex flex-col bg-slate-200 duration-500
      ${burgerIsActive ? 'translate-x-0' : 'translate-x-full'}
      lg:translate-x-0 transition-all justify-between w-11/12 px-6 py-3 mx-auto mt-4 lg:flex-row lg:w-10/12 xl:w-8/12 rounded-2xl
      ${burgerIsActive ? 'bg-opacity-10 backdrop-blur-md' : 'bg-opacity-0'}
      `}
    >
      <div className='self-end lg:hidden' onClick={toggleBurgerState}>
        <BurgerIcon isOpen={burgerIsActive} />
      </div>
      <div className='lg:block'></div>
      <ul
        className={`hidden lg:flex justify-center gap-3 text-xl xl:text-2xl flex-row`}
        onMouseLeave={handleNavlinkLeave}
      >
        <span
          className={`absolute top-0 left-0 hidden px-3 py-2 transition-all duration-300 bg-blue-700 rounded-lg ${
            navlinkIsHovered ? 'lg:block' : ''
          }`}
          ref={blobRef}
        ></span>
        {navLinkList.map(navLink => (
          <Navlink
            url={navLink.url}
            onClick={handleNavlinkClick}
            onMouseOver={handleNavlinkHover}
            key={navLink.url}
          >
            {navLink.text}
          </Navlink>
        ))}
      </ul>
      <ul
        className={` ${
          burgerIsActive ? ' h-[initial] flex' : 'hidden h-0'
        } absolute left-0 right-0 top-[4.5rem] rounded-lg px-2 py-4 bg-slate-800 w-full mx-0 lg:hidden flex-col justify-center gap-3 text-xl xl:text-2xl`}
        onMouseLeave={handleNavlinkLeave}
      >
        {navLinkList.map(navLink => (
          <Navlink
            url={navLink.url}
            onClick={handleNavlinkClick}
            onMouseOver={handleNavlinkHover}
            key={navLink.url}
          >
            {navLink.text}
          </Navlink>
        ))}
      </ul>
    </motion.nav>
  )
}

export default Navbar
