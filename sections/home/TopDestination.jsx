import { DestinationCard, Heading } from "@/components"
import { DestinationItems } from "@/constant/data"

const TopDestination = () => {
  return (
    <section className="mb-8">
      <div className="md:ml-20">
        <Heading
          title="Explore Top Destination"
          subtitle="Embark on a journey of discovery as you explore the most captivating and sought-after destinations, unveiling their wonders and enchantment."
        />
      </div>

      {/* Top destination card */}
      <div className="flex items-center gap-2 flex-row md:flex-col">
        {DestinationItems.slice(3,7).map(item=>(
          <DestinationCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </section>
  )
}

export default TopDestination