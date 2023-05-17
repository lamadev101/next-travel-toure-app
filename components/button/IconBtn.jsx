import Link from 'next/link'
import React from 'react'

export const IconBtn = ({link,icon}) => {
  return (
    <Link  href={link}>
      <button className="text-2xl cursor-pointer hover:text-black hover:border-[1px] hover:border-orange-600   hover:bg-none bg-orange-600 text-white  rounded-full p-1" >
        {icon}

      </button>
    </Link>
  )
}
