import React from 'react'
import cube from "../assets/pre01.gif"
export default function Preloader() {
  return (
    <div className='preloader mx-auto'>
      
      <img src={cube} className='mx-auto' alt="" />
    </div>
  )
}
