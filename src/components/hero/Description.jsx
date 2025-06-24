import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

function Description () {
  const devRef = useRef(null)

  useEffect(() => {
    const develop = new Typed(devRef.current, {
      strings: [
        '&nbsp;<span class="font-bold">full-stack</span> developer',
        '&nbsp;<span class="font-bold text-[#F05340] drop-shadow" style="filter: drop-shadow(0 0 20px  rgb(240 83 64 / 0.35)) drop-shadow(0 0 20px rgb(240 83 64 / 0.2))">Laravel</span> developer',
        'n&nbsp;<span class="font-bold text-[#F05340]" style="filter: drop-shadow(0 0 20px  rgb(240 83 64 / 0.35)) drop-shadow(0 0 20px rgb(240 83 64 / 0.2))">Eloquent</span> developer',
        '&nbsp;<span class="font-bold">front-end</span> developer',
        '&nbsp;<span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-green-500" style="filter: drop-shadow(0 0 20px rgb(239 68 68 / 0.35)) drop-shadow(0 5px 5px rgb(234 179 8 / 0.35)) drop-shadow(0 5px 5px rgb(34 197 94 / 0.35)) drop-shadow(0 20px 20px rgb(239 68 68 / 0.2)) drop-shadow(0 0 20px rgb(234 179 8 / 0.2)) drop-shadow(0 20px 20px rgb(34 197 94 / 0.2))">creative</span> developer',
        '&nbsp;<span class="font-bold text-[#61DBFB]" style="filter: drop-shadow(0 0 20px  rgb(97 219 251 / 0.35)) drop-shadow(0 0 20px rgb(97 219 251 / 0.2))">Vue</span> developer',
        '&nbsp;<span class="font-bold text-[#41B883]" style="filter: drop-shadow(0 0 20px  rgb(65 184 131 / 0.35)) drop-shadow(0 0 20px rgb(65 184 131 / 0.2))">React</span> developer'
      ],
      typeSpeed: 25,
      backSpeed: 25,
      backDelay: 1000,
      startDelay: 0,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    })

    return () => {
      develop.destroy()
    }
  }, [])

  return (
    <h1 className='text-[2rem] lg:leading-tight lg:text-[3rem] xl:text-[4rem] text-slate-200 -mt-8 text-balance lg:text-balance '>
      Hi, I&apos;m{' '}
      <span className='font-bold text-blue-500'>Alex Esquivel</span>.<br /> A
      <span ref={devRef}></span>
    </h1>
  )
}

export default Description
