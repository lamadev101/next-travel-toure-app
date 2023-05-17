import Link from "next/link"

const MenuItem = ({ label, link }) => {
  return (
    <Link href={link}>
      <div
        // onClick={onClick}
        className="cursor-pointer hover:text-orange-500 font-semibold"
      >
        {label}
      </div>
    </Link>
  )
}

export default MenuItem