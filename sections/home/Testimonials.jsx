import { Heading } from "@/components"
import {FaQuoteLeft} from "react-icons/fa"

const Testimonials = () => {
  return (
    <section className="bg-[#162B32] mb-8 ">
      <div className="px-8 py-4 text-white">
        <Heading
          title="What Our Client Say About Us"
          subtitle="Our clients rave about our exceptional service, professionalism, reliability, and attention to detail. See what they have to say!"
        />
      </div>

      {/* Customer Feedback List */}

      <div className=" h-[300px] w-[400px] bg-white mt-10 hover:bg-gray-400 ">
        <div className=" justify-middle items-center ml-36  relative">
          <img src=" https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt=" Loading"
          className=" h-[100px] w-[100px] rounded-full absolute -top-8"
          />

        </div>
        <div className=" ml-12 flex flex-cols-2 text-5xl gap-48 text-gray-200 py-10">
          <span> 
            <FaQuoteLeft/>
          </span>
          <span> 01</span>
        </div>
        <div className="text-center text-gray-300 group-hover:text-white">
          <span> Let our experienced tour guide be your compass, leading you through unforgettable adventures and unlocking hidden treasures.</span>

        </div>
        <div className="flex flex-cols-2 gap-24 mt-8">
          <span>
            <h1 className=" text-1xl font-bold group-hover:text-orange-500">Deepika Timalsina</h1>
            <h1 className="text-gray-200"> Traveller</h1>
          </span>
          <span className=" text-orange-500"> * * * * * </span>

        </div>
       



      </div>
    </section>
  )
}

export default Testimonials