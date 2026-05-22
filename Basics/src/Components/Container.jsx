import React from 'react'
import Box from './Box'
import Box2 from './Box2'

function Container() {
  return (
    <div className='flex px-50 justify-between'>
      <Box/>
      <Box2/>
    </div>
  )
}

export default Container
