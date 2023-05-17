import Image from 'next/image'

const Hero = () => {
  return (
    <div data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
      <Image
        src="https://images.pexels.com/photos/15031960/pexels-photo-15031960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Slider Image"
        width="100"
        height="100"
        className="w-full h-[100px] object-cover"
      />
    </div>
  )
}

export default Hero