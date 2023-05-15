import Image from 'next/image'
import React from 'react'

const PackageCardDemo = ({img, title, duration, price}) => {
  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden">
      <div className="relative">
        <Image
          src={img}
          alt="palce image"
          width="100"
          height="100"
          className="object-cover w-full h-[150px]"
        />
        <div className="bg-orange-500 px-4 py-2 w-[max-content] absolute left-12 -bottom-4">
          <span className="text-white">{duration}</span>
        </div>
      </div>

      <div className="px-4 py-2 mt-3">
        <p>{title}</p>
        <div>
          <button>Book Now</button>
          <div>
            <div>Form</div>
            <div>
              <span>$ {price}</span>
              per person
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PackageCardDemo