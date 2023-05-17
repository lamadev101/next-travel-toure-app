"use client"

import Link from "next/link"
import { useRouter } from "next/navigation";

const MenuItem = ({ label, link }) => {
  const router = useRouter()
  const { pathname } = router;

  const isActive = (path) => {
    console.log("🚀 ~ file: MenuItem.jsx:11 ~ isActive ~ path:", path)
    return path === pathname;
  }

  return (
    <Link href={link}>
      <div className={isActive(link) ? 'text-orange-500' : ''}>
        {label}
      </div>
    </Link>
  )
}

export default MenuItem