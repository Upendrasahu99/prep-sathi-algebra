import React, {createContext, useState} from 'react'


const AppContext = createContext();

const AppContextProvider = ({children}) => {
  const[testMode, setTestMode] = useState('modeSelection');
  const[resultData, setResultData] = useState([]);  

  return (
    <AppContext.Provider value={{
      testMode,
      setTestMode,
      resultData,
      setResultData
    }}>
      {children}
    </AppContext.Provider>
  )
}

export {AppContext, AppContextProvider as default}