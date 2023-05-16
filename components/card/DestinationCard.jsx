
"use client"
import React, { useState } from 'react'

const DestinationCard = ({ img, place,id}) => {
  const [show,setShow]=useState(null)

  return (
    

<div className="flex   bg-white " onMouseEnter={()=>
setShow(id)} 
onMouseLeave={()=>
setShow(null)}
>

  <div>
    <div className="group relative cursor-pointer  overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div>
        <img className="h-60 w-full object-cover rounded-md"
         src={img} alt=" Loading" />
      </div>
      <div className="absolute   group-hover:from-black/30 group-hover:via-black/25 group-hover:to-black/30"></div>
      <div className="absolute inset-0 flex translate-y-[30%] flex-col items-center justify-center px-9 text-center transition-all duration- group-hover:translate-y-0">
        <h1 className=" text-3xl font-bold text-white">{place}</h1>
        <button className={`  rounded-full bg-orange-500 py-2 px-3.5 font-com text-sm capitalize text-white ${show===id ? 'block': 'hidden' } `}>See More Photos</button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default DestinationCard