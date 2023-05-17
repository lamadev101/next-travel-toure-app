"use client"

import MenuIcon from './MenuIcon'
import {BiUserCircle, BiSearchAlt, BiCategory} from 'react-icons/bi'
import { useRouter } from 'next/navigation'
import useCategoryModal from '@/hooks/useCategoryModal'

const UserMenu = () => {
  const router = useRouter()
  const categoryModal = useCategoryModal()

  return (
    <div className="flex items-center gap-2">
      <MenuIcon
        onClick={()=>categoryModal.onOpen()}
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