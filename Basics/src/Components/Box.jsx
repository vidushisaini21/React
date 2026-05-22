import React, { useState } from 'react'

function Box() {
    const [count,setCount] = useState(0);
    const click =()=>{
        if(count==107){
            return 
        }
    }
  return (
    <>
    
    {count == 107?(
         <div className='w-80 border-2 border-gray-500 rounded-xl mt-10   h-40  text-white hover:border-white overflow-hidden ' onClick={click}>
        complete
    </div>
    ):(
         <div className='w-80 border-2 border-gray-500 rounded-xl mt-10   h-40  text-white hover:border-white overflow-hidden ' onClick={click}>
        <div className=" w-full h-1   bg-linear-to-r from-green-500 to-black"></div>
      <div className=' pl-8 mt-3 text-gray-500 mb-4'>Performance</div>
      <div className='pl-8  text-white text-2xl'>{count}</div>
      <div className='pl-8  text-yellow-500  '>{count} of 107 days lit</div>
    </div>
    )
}
   </>
  )
  
}

export default Box
