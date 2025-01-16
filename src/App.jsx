import Navbar from './components/nav/Navbar.jsx';

import { lazy, Suspense } from 'react';

function App() {

  const Hero = lazy(() => import('./components/hero/Hero.jsx'));

  return (
    <>
      <Navbar />
      <Suspense fallback={<></>}>
        <Hero />
      </Suspense>
    </>
  )
}

export default App
