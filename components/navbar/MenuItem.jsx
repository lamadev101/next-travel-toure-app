
const MenuItem = ({label, onClick}) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer hover:text-orange-500 font-semibold"
    >
      {label}
    </div>
  )
}

export default MenuItem