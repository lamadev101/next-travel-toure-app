import React from 'react'

const ContactInfo = () => {
  return (

    <div className="flex flex-cols-2 mt-20  mb-20 gap-10 ml-52 bg-slate-50">
      <div className='w-[550px]'>
        <img className="h-[600px] w-full object-cover rounded-md"
          src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80" alt=" Loading" />

      </div>
      <div className=' group  w-[550px]'> 

      <div className='  ml-6'>
        <div>
          <h1 className="text-3xl text-black font-semibold mt-16"  >  Contact Info.  </h1>
          <div className="h-0.5 w-1/4 bg-orange-500 boarder-2"></div>
        </div>
        <button className='hover:bg-gray-800 hover:text-white rounded-md mt-9 border-2 border-gray-100 '>
        <div className=' mt-7'>
          <h1 className='font-bold'>Let's Talk</h1>
          <div className='flex flex-col-2 gap-8 py-2'>
            <span>info@example.com</span>
            <span>info@example.com</span>
          </div>
          <h1 className='py-1'> 0145667600</h1>
        </div>
        </button>
      
      <button className='hover:bg-gray-800 hover:text-white mt-9 border-2 border-gray-100 rounded-md '>

      <div className=' group w-[450px] mt-7  border-gray-500 '>
          <h1 className='font-bold'>Location</h1>
          <div className='flex flex-col-2 gap-8 py-2'>
            <span> Streets Suite 666 Mirpur DOHS, Bangladesh</span> 
          </div>
        </div>
      </button>
        <button className='hover:bg-gray-800 rounded-md  hover:text-white border-2 border-gray-100 mt-9'>

        <div className=' group w-[450px] relative border-gray-500 '>
          <h1 className='font-bold'>Visit Us:</h1>
          <div className='py-2'>
            <span > https://facebook.com/</span> 
          </div>
        </div>
        </button>

      </div>
      </div>

    </div>
  )
}

export default ContactInfo
