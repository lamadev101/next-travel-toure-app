"use client"

import MenuIcon from './MenuIcon'
import {BiUserCircle, BiSearchAlt, BiCategory} from 'react-icons/bi'
import { useRouter } from 'next/navigation'

const UserMenu = () => {
  const router = useRouter()

  return (
    <div className="flex items-center gap-2">
      <MenuIcon
        onClick={()=>{}}
        icon={<BiCategory/>}
      />
      <MenuIcon
        onClick={()=>{}}
        icon={<BiSearchAlt/>}
      />
      <MenuIcon
        onClick={()=>router.push('/user/101')}
        icon={<BiUserCircle/>}
      />
    </div>
  )
}

export default UserMenu