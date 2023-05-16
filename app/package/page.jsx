import { Banner, PackageCard } from '@/components'
import { Packages } from '@/constant/data'
import React from 'react'
const Package = () => {
  return (
    <main className='px-8 py-6'>
      <Banner />
      <div className=' grid grid-cols-3 gap-8'>
        {Packages.map(item => {
          return (
            <PackageCard
              key={item.id}
              {...item} />
          )
        })
        }
      </div>
    </main>
  )
}
export default Package