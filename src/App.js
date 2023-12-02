import React, { useState } from 'react'
import CusBtn from './Components/Button/CusBtn'


import { CountContext } from './context/CountContext'
import ReduxCounter from './Components/redux/ReduxCounter'
import ContextCounter from './Components/ContextCounter/ContextCounter'

function App() {
  const [val, setVal] = useState(0)

  return (
    <CountContext.Provider value={{ val, setVal }} >


      <div className='bg-[#0f0f0f] h-screen flex flex-col justify-center items-center gap-10'>
        <ReduxCounter />
        <ContextCounter />
      </div>
    </CountContext.Provider>
  )
}

export default App
