import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa"

const TourGuide = ( {img,name}) => {
  return (
   
      
      <div className="  bg-white  group  p-4" >
        <div className=" flex">
      <div className="group relative cursor-pointer  overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
        <div>
          <img className="h-60 w-full object-cover rounded-md"
            src={img} alt=" Loading" />
        </div>
        <div className="absolute   group-hover:from-black/30 group-hover:via-black/25 group-hover:to-black/30"></div>
        <div className="absolute inset-0 flex translate-y-[30%] flex-col items-center justify-center px-9 text-center transition-all duration- group-hover:translate-y-0">
          <div
             className="   rounded-full bg-gray-600 py-2 px-3.5 font-com text-sm capitalize text-white hidden group-hover:block ">
              <h1 className=" flex flex-cols-4 gap-4">
                <FaInstagram/>
                <FaFacebook/>
                <FaTwitter/>
                <FaWhatsapp/>
              </h1>
              </div>
            </div>
        </div>
      </div>
      <div>
        <h1 className=" text-black text-2xl font-bold"> {name}</h1>
        <h1 className="px-10">Tour Guide</h1>
      </div>
    </div>
    
  )
}

export default TourGuide