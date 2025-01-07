function BurgerIcon({ isOpen }) {

  const burgerClosed = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
    className="rounded-sm size-8 text-slate-50 ring-1 ring-transparent active:ring-slate-100 active:text-slate-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>;

  const burgerOpen = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="rounded-sm size-8 text-slate-50 ring-1 ring-transparent active:ring-slate-100 active:text-slate-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>


  return (
    isOpen ? burgerOpen : burgerClosed
  )


}

export default BurgerIcon;