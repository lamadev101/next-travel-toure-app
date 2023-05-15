"use client"

import { Navitems } from '@/constant/data'
import React from 'react'
import MenuItem from './MenuItem'
import { useRouter } from 'next/navigation'

const NavItems = () => {
  const router = useRouter()

  return (
    <div className="flex items-center gap-4">
      {Navitems.map(({label, link})=>{
        return(
          <MenuItem
            key={link}
            label={label}
            onClick={()=> router.push(link)}
          />
        )
      })}
    </div>
  )
}

export default NavItems