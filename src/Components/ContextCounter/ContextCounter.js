import React from 'react'
import { useCounter } from '../../context/CountContext'
import CusBtn from '../Button/CusBtn'

function ContextCounter() {

    const { val, setVal } = useCounter()
    return (
        <div className='flex flex-col justify-center items-center gap-10'>
            <h1 className='text-2xl text-white font-semibold'>Context</h1>
            <h1 className='text-2xl text-white font-semibold'>Count {val}</h1>
            <div className='flex gap-10'>
                <CusBtn lable={"Decrement"} onclick={() => {
                    setVal((prev) => prev - 1)
                }} />
                <CusBtn lable={"Increment"} onclick={() => {
                    setVal((prev) => prev + 1)
                }} />
            </div>
        </div>
    )
}

export default ContextCounter
