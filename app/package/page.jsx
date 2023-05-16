import { Banner, Container, PackageCard } from '@/components'
import { Packages } from '@/constant/data'
import React from 'react'
const Package = () => {
  return (
    <main>
      <Banner />
      <Container>
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
      </Container>
    </main>
  )
}
export default Package