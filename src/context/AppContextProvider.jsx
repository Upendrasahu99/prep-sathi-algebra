import React, {createContext, useState} from 'react'


const AppContext = createContext();

const AppContextProvider = ({children}) => {
  const[testMode, setTestMode] = useState('modeSelection');

  return (
    <AppContext.Provider value={{
      testMode,
      setTestMode
    }}>
      {children}
    </AppContext.Provider>
  )
}

export {AppContext, AppContextProvider as default}