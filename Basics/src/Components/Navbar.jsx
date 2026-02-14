import React from 'react'

function Navbar() {

const arr = [
    {name:"About me ",link:"#"},
    {name:"contact us ",link:"#"},
    {name:"my works ",link:"#"}
]
  return (
<div className="w-full h-25 border-2 flex items-center space-between">
{arr.map((item, index)=><a href={item.link}>{item.name}</a>)}

</div>
  )
}

export default Navbar
