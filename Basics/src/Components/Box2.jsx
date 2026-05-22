import React, { useState } from 'react'

function Box2() {
        const [count,setWidth] = useState(0);
        const length =()=>{
            if(count<100){
              setWidth(count+1)
            }
        }
return (

    <div className='w-80 border-2 border-gray-500 rounded-xl mt-10  h-40  text-white hover:border-white overflow-hidden ' onClick={length}>
        <div className=" w-full h-1   bg-linear-to-r from-violet-500 to-black"></div>
      <div className=' pl-8 mt-3 text-gray-500 mb-4'>Projected Finish</div>
      <div className='pl-8  text-white text-2xl'>0.0%</div>
      <div className='pl-8  text-violet-500 '>≈0 days projected</div>
      <div className='w-[70%] rounded-xl ml-8 mt-3 h-2 bg-gray-700 border-gray-700 border-1'>
        <div className="h-2 bg-red-500" style={{width:`${count}%`}}></div>
      </div>
    </div>
  )
}

export default Box2
