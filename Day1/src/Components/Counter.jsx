import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount]= useState(0);

    const HandleIncrease=()=>{

        setCount((prevCount)=>prevCount+1)
    }

    const HanldeDecrease=()=>{
       
            setCount((prevValue)=>prevValue-1)

        
       
    }
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className=''>
            <h1 className='text-3xl font-bold text-center'>Counter App</h1>
            <h1 className='text-7xl font-bold  text-center '>{count}</h1>
            <div className='flex gap-7 space-x-10 '>
                <button onClick={HandleIncrease} className='bg-pink-700 p-10 text-3xl font-bold'>+</button>
                <button onClick={HanldeDecrease} className={` ${count<0 ? "bg-pink-400" : "bg-pink-700"} p-10 text-3xl font-bold`}>-</button>
            </div>
        </div>
      
    </div>
  )
}

export default Counter
