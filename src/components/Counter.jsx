import React, { useState } from 'react'

export default function Counter() {

     const [count,setCount]=useState(0);
     const [countSet,setCountSet]=useState(0);

  return (    

       <div>
        <h1>Count is {count} </h1>
         <div className='flex items-center gap-2 mt-5' >
            <button className='text-white bg-blue-500 rounded-sm p-1' onClick={()=>setCount(count+1)} >Increase</button>
            <button className='text-white bg-blue-500 rounded-sm p-1' onClick={()=>setCount(()=>(Math.max(count-1,0)))} >Decrease</button>
            <button className='text-white bg-blue-500 rounded-sm p-1' onClick={()=>setCount(0)} >Rest Count to 0</button>
        </div> 
        <div className='mt-10'>
            <input className='border border-white rounded-sm p-1' type="text" value={countSet} onChange={(e)=>setCountSet(e.target.value)}/>
            <button className='text-white bg-green-500 rounded-sm p-1'  onClick={()=>setCount(Number(countSet))}>Set Count to : {countSet}</button>
        </div>
       </div>
  )
}
