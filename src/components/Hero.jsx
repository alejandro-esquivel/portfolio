import { useEffect, useRef } from "react";
import Typed from 'typed.js';

function Hero() {

  const devRef = useRef(null);

  useEffect(() => {
    const develop = new Typed(devRef.current, {
      strings: [
        '&nbsp;full-stack developer',
        '&nbsp;front-end developer',
        '&nbsp;<span class="text-[#F05340]">Laravel</span> developer',
        'n&nbsp;<span class="text-[#F05340]">Eloquent</span> developer',
        '&nbsp;<span class="text-[#61DBFB]">Vue</span> developer',
        '&nbsp;<span class="text-[#41B883]">React</span> developer',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => {
      develop.destroy();
    }
  }, [])
  return (
    <>
      <section className="flex items-center flex-row w-11/12 h-[100vh] mx-auto justify-center align-middle lg:w-8/12 xl:w-6/12">
        <h1 className="text-2xl lg:leading-tight lg:text-[4rem] text-slate-200 -mt-8 text-balance mx-auto lg:mx-[initial] lg:text-balance ">
          Hi, I&apos;m <span className="text-blue-500">Alejandro Esquivel</span>.<br /> A<span ref={devRef}></span>
        </h1>
      </section>
    </>
  )
}

export default Hero;