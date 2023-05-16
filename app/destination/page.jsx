import { Banner, DestinationCard, Container } from '@/components'
import {DestinationItems} from '@/constant/data'
import React from 'react'

const Destination = () => {
  return (
    <main>
      <Banner/>
      <Container>

      
      <div className=' grid grid-cols-4 gap-8'>
      {DestinationItems.map(item => {
          return (
            <DestinationCard
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

export default Destination