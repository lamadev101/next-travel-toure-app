import Image from 'next/image'
import React from 'react'
import {BsStopwatch} from 'react-icons/bs'

const PackageCard = () => {
  return (
   
      
     < div  className='bg-white w-[300px]'>
      
        <div className='relative mb-4  '>
        <img  
     
     src="//images.pexels.com/photos/2902939/pexels-photo-2902939.jpeg?auto=c"
      alt=" nepal " 
      className='w-full rounded-md h-[200px] object-cover'
      />
          
      

          <div className='bg-orange-500 px-5 py-2 w-[max-content ] absolute -bottom-2 left-8 flex items-center gap-2'>
              <BsStopwatch/>
            

          <span>

         3 Days 2 Night
          </span>

          </div>
          </div>
          <div>
            <p className='px-4 py-2 font-bold'>Mount Everest </p>
            
          </div>

          <div className=' flex px-4 pb-4'>
            <button className='border-2 border-red-500 px-2 py-1 rounded-md' > Book now</button>
            <div>

              <div className='px-5'> From</div>
              <div >

                <span className='font-bold text-orange-500 px-5' >60$</span>
                Per Person
              </div>

            </div>



          </div>
      </div>


  
  )
}

export default PackageCard