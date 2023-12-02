import React from 'react'
import CusBtn from './Components/Button/CusBtn'
import { useDispatch, useSelector } from 'react-redux'
import { add, dec } from './Redux/counterSlice'

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)
  return (
    <div className='bg-[#0f0f0f] h-screen flex flex-col justify-center items-center gap-10'>
      <h1 className='text-2xl text-white font-semibold'>Count {count}</h1>
      <div className='flex gap-10'>
        <CusBtn lable={"Decrement"} onclick={() => {
          dispatch(dec())
        }} />
        <CusBtn lable={"Increment"} onclick={() => {
          dispatch(add())
        }} />
      </div>
    </div>
  )
}

export default App
