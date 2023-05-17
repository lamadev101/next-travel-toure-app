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
          link="/package"
          border
        />
      </div>

      {/* popular pakages */}
      <div className="grid grid-cols-3 gap-8">
        {Packages.map(item=>{
          return(
            <div key={item.id}>
              <PackageCardDemo {...item}/>
            </div>
          )
        })}
      </div>
    </Container>
  )
}

export default PopularPackage