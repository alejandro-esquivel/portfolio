import Navbar from './components/nav/Navbar.jsx';

import { lazy, Suspense } from 'react';

function App() {

  const Hero = lazy(() => import('./components/Hero.jsx'));

  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
    </>
  )
}

export default App
