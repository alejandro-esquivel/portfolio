import { createContext, useState } from 'react';


const LoaderContext = createContext({
  isLoaded: false,
  setIsLoaded: () => { }
});

function LoaderContextProvider() {

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <LoaderContext.Provider value={
      {
        isLoaded: isLoaded,
        setIsloaded: setIsLoaded
      }
    }>
    </LoaderContext.Provider>
  )
}

export default LoaderContextProvider;