import { FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi"





const Footer = () => {
  return (
    <footer className="" >
      <div className=" flex md:flex-row flex-col justify-around items-start bg-gray-600 p-20">
        <div className=" py-10">
          <h1 className="font-bold text-3xl text-white" >Follow Us On:</h1>
          <div className="flex gap-5 py-5 ">
      
            <FaInstagram className="  text-2xlcursor-pointer hover:text-black hover:border-[1px] hover:border-orange-600   hover:bg-none bg-orange-600 text-white  rounded-full p-1" />
            <FaTwitter className=" cursor-pointer hover:text-black hover:border-[1px] hover:border-orange-600   hover:bg-none bg-orange-600 text-white  rounded-full p-1 text-2pxl" />
            <FaFacebook className="  text-2pxl cursor-pointer hover:text-black hover:border-[1px] hover:border-orange-600   hover:bg-none bg-orange-600 text-white  rounded-full p-1" />
            <FaLinkedin className="  text-2pxl cursor-pointer hover:text-black hover:border-[1px] hover:border-orange-600   hover:bg-none bg-orange-600 text-white  rounded-full p-1" />

          </div>
        </div>
        <div className="text-white">
          <h1 className="font-bold  text-4xl">Quick Link</h1>
          <div>
            <ul>

            <li className=" hover:text-orange-500 "> About us</li>
            <li className=" hover:text-orange-500 ">Destination</li>
            <li className=" hover:text-orange-500 ">Tour Packages </li>
            <li className=" hover:text-orange-500 ">Tour Guide</li>
            <li className=" hover:text-orange-500 ">Booking Process</li>
            <li className=" hover:text-orange-500 ">Blog</li>
            </ul>
          </div>

        </div>
        <div className="text-white">
          
          <h1 className="font-bold text-4xl">Tour Type</h1>
          <div >
            <ul>

            <li className="hover:text-orange-500 "> Wild & Adventure Tour</li>
            <li className=" hover:text-orange-500 ">Seasonal Tours</li>
            <li className=" hover:text-orange-500 ">Group Tour</li>
            <li className=" hover:text-orange-500 ">Relaxation Tours</li>
            <li className=" hover:text-orange-500 ">Family Friendly Tours</li>
            
            </ul>
          </div>
        </div>
      </div>
      <div className="  flex md:flex-row flex-col justify-around items-center font-bold bg-gray-700 text-white p-4" >
        <h1 className="text-3xl"  >  Contact Us : </h1>
        <div  className="flex items-center">  
      <HiOutlinePhone/>
      <span>
        
          0145667600
      </span>
          </div >
        <div className="flex items-center"> 
          < HiOutlineMail className=""/>
          
          stravelwithNF@gmail.com 
            </div>
        

      </div>
      <div className="flex md:flex-row flex-col justify-around items-start  p-5 bg-gray-800 text-white font-semibold">
        <h1 className="text-white py-5">Copyright 2023 FNTravels </h1>
        <img
      src="/img/logo.png"
      width="100"
      height="100"
      alt="Logo"
      className="cursor-pointer"
    />
        <h1 className="py-5" >Terms & Condition |  Privacy Policy</h1>
      </div>
    </footer>
  )
}
export default Footer