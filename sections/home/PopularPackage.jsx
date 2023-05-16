import { Button, Container, Heading, PackageCardDemo } from "@/components"
import { Packages } from "@/constant/data"

const PopularPackage = () => {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <Heading
          title="Popular Tour Package"
          subtitle="Explore our top-rated tour packages, curated for an unforgettable travel experience that suits your preferences and budget."
        />
        <Button
          label="View All Tour"
          link="/view-all-tour"
          border
        />
      </div>

      {/* popular pakages */}
      <div className="grid grid-cols-4 gap-4">
        {Packages.map(item=>{
          return(
            <PackageCardDemo 
              key={item.id}
              {...item}
            />
          )
        })}
      </div>
    </Container>
  )
}

export default PopularPackage