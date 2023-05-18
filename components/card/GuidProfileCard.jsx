import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { IconBtn } from ".."

const GuidProfileCard = ({pic, name ,}) => {

  return (
    <div className="   bg-white  group">
      <div className=" relative cursor-pointer  overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <img
        src={pic}
        alt={name} 
        className="object-cover w-full h-[300px]"
      />
        <div className="absolute inset-0 flex  gap-3 translate-y-[10%] flex-col   justify-end px-9 text-center transition-all duration- group-hover:translate-y-0">
          <div className=" rounded-full bg-gray-700   space-x-4  text-white hidden group-hover:block ">
          <IconBtn
              link="https://github.com/"
              icon = {<FaInstagram/>}
            />
            
            <IconBtn
              link="https://github.com/"
              icon = {<FaFacebook/>}
            />
            <IconBtn
              link="https://github.com/"
              icon = {<FaWhatsapp/>}
            />
             </div>
        </div>
      
      </div>
      <div className="text-center mt-2">
        <h1 className="font-bold text-2xl">{name}</h1>
        <h2>Tour Guide</h2>
      </div>
    </div>
  )
}

export default GuidProfileCard