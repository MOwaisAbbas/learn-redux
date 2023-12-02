import React from 'react'

function CusBtn({ lable, onclick }) {
    return (
        <button className='bg-blue-500 p-2 rounded-md text-white font-bold' onClick={onclick} >{lable}</button>
    )
}

export default CusBtn
