import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CusBtn from '../Button/CusBtn'
import { add, dec } from '../../Redux/counterSlice'

function ReduxCounter() {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.value)
    return (

        <div className='p-10 flex  border-white border-b-2 flex-col justify-center items-center gap-10'>
            <h1 className='text-2xl text-white font-semibold'>Redux tolkit</h1>
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

export default ReduxCounter
