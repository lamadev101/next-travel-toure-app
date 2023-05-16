import Image from 'next/image'

const img
= "https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg"

const Banner = () => {
  return (
    <div>
      <Image
        src={img}
        alt="Pexels"
        width="100"
        height="100"
        className="object-cover w-full h-[400px]"
      />
    </div>
  )
}

export default Banner