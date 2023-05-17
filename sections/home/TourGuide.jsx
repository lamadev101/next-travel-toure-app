import { GuidProfileCard, Heading } from "@/components"
import { TourGuideList } from "@/constant/data"

const TourGuide = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <Heading
          title="Tour Guide"
          subtitle="Let our experienced tour guide be your compass, leading you through unforgettable adventures and unlocking hidden treasures."
          pos
        />
      </div>

      {/* Tour Guide Profile */}
      <div className="grid grid-cols-3 gap-8">
        {TourGuideList.map(item=>(
          <GuidProfileCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </section>
  )
}

export default TourGuide