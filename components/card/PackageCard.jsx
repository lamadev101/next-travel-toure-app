import React from 'react'

const PackageCard = () => {
  return (
    <div className='py-14'> 
      <div className='bg-[url(https://images.pexels.com/photos/1687678/pexels-photo-1687678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]
      bg-center p-24 h-96 w-full bg-cover'>
      <h1 className='text-center  text-teal-50 text-bold text-6xl py-10'>
      
        Tour Package
       
      </h1>
      </div>
      <div className=' grid grid-cols-3 justify-items-center py-10 px-10 '>
      <div className='py-12 px-12 rounded-lg overflow-hidden shadow-lg max-w-sm '>
     <img  
     
     src="https://images.pexels.com/photos/2499699/pexels-photo-2499699.jpeg?auto=compress&cs=tinysrgb&w=800" 
     alt=" Bali " 
     className='w-full' />
     <div>
      
     </div>
     <div className=' py-4 font-bold'>
      <p>Etiam placerat dictum consequat an Pellentesque habitant morbi. </p>
    </div>
     <div className=' grid grid-cols-2 '>
     <button className='border-2 border-red-500 px-2 py-1 rounded-md' > Book now</button>
     <div>
     <p className='px-2'>Full</p>
     <p className='text-red-500 font-bold'>58$</p>
     <p>per Person</p>
     </div>


     
     </div>
      </div>
      <div className='py-10 px-10 rounded overflow-hidden shadow-lg max-w-sm'>
     <img  
     
     src="https://images.pexels.com/photos/2499699/pexels-photo-2499699.jpeg?auto=compress&cs=tinysrgb&w=800" 
     alt=" Bali " 
     className='w-full' />
     <div grid grid-cols-2 justify-items-center>
     <button className='border-2 border-blue-400 px-2 py-1 rounded-md' > Book now</button>
     </div>
     
      </div>
      <div className='py-10 px-10 rounded overflow-hidden shadow-lg max-w-sm'>
     <img  
     
     src="https://images.pexels.com/photos/2499699/pexels-photo-2499699.jpeg?auto=compress&cs=tinysrgb&w=800" 
     alt=" Bali " 
     className='w-full' />
     <button className='border-2 border-blue-400 px-2 py-1 rounded-md' > Book now</button>
     
      </div>
      </div>

    
    </div>
  )
}

export default PackageCard