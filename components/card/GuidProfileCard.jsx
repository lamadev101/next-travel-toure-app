
const GuidProfileCard = ({pic, name}) => {

  return (
    <div className="bg-orange-500">
      <img
        src={pic}
        alt={name} 
        className="object-cover w-full h-[300px]"
      />
      <div className="text-center mt-2">
        <h1 className="font-bold text-2xl">{name}</h1>
        <h2>Tour Guide</h2>
      </div>
    </div>
  )
}

export default GuidProfileCard