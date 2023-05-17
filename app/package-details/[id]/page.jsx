import { Banner, Container, QuickInfoCard } from '@/components'
import { PackageQuickInfo } from '@/constant/data'
import { BookNowForm, PackageOffer, PackageTag } from '@/sections/package'
import React from 'react'

const PackageDetails = () => {
  return (
    <main>
      <Banner
        title="Package Details"
        bgImg="https://images.unsplash.com/photo-1584884255471-e92d057f10ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      <Container>
        <div className="flex col-span-12 flex-1 gap-4">
          <div className="col-span-8 space-y-6">

            {/* Quick Information of package */}
            <div className="grid grid-cols-4 gap-4">
              {PackageQuickInfo.map(item=>{
                return(
                  <QuickInfoCard
                    key={item.id}
                    {...item}
                  />
                )
              })}
            </div>

            {/* Package main image */}
            <div>
              <img 
                src="https://images.unsplash.com/photo-1584884789751-68dd2836ada1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" 
                alt="main image" 
                className="rounded-md object-cover w-full h-[400px]"
              />
            </div>

            {/* Package Details */}
            <div>
              <h1 className="text-[40px] font-extrabold">Package Details</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laudantium eveniet quis odio at molestiae eligendi, obcaecati sunt repellendus nobis placeat ducimus aperiam a itaque mollitia ratione dolore unde vitae soluta dignissimos ullam delectus? Molestias ea tenetur debitis architecto blanditiis suscipit rerum error maiores commodi dicta dolores quidem sunt maxime, velit earum? Minus porro tempora accusantium voluptates temporibus, optio soluta voluptatem molestiae pariatur fugiat beatae nesciunt, inventore veniam. Laboriosam omnis unde nisi cumque minus qui harum neque ea molestias itaque laudantium corrupti quae, corporis nam expedita reiciendis ad eius! Quas molestiae corporis animi repudiandae ipsum itaque quos exercitationem quibusdam, explicabo voluptate expedita, illo, distinctio in consequatur veniam amet ducimus. Voluptatum placeat assumenda iste sint corrupti delectus illum, dolores nemo ipsam enim modi labore eligendi ea ducimus. Maiores iure amet adipisci inventore perspiciatis laudantium aliquid molestiae veniam quaerat at? Distinctio, accusantium? Enim soluta incidunt optio excepturi quae ea quibusdam quia? Cum iusto commodi ipsum reprehenderit! Officiis adipisci eos labore, excepturi numquam, harum veniam nulla nostrum dignissimos earum nobis nesciunt itaque, incidunt aperiam mollitia tempora. Ducimus earum voluptatum, iste quas pariatur commodi inventore animi sequi vero quis rerum! Ducimus, qui aut, animi obcaecati natus facilis earum quas sunt error esse sit. Neque facere corporis recusandae pariatur veritatis molestiae excepturi, labore aliquid dolores. Doloribus atque veritatis perferendis expedita repellendus voluptas deserunt optio vero soluta et quia cumque natus ex, fuga nostrum praesentium architecto, quos modi laboriosam labore. Fuga suscipit praesentium tenetur atque aut veritatis enim? Sint officia tenetur corrupti repellendus perferendis molestiae consectetur et? Dolores eaque recusandae in. Cum, perferendis eligendi nostrum maxime suscipit eaque saepe. Cupiditate omnis placeat qui vitae ut architecto atque, tenetur velit ipsa dolores ipsam dicta fugit minima nisi nam animi soluta temporibus deserunt molestiae quis repudiandae. Aut pariatur odit beatae accusamus dolorem, velit placeat tenetur optio. Molestiae, nemo.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem impedit maxime consequatur architecto eligendi nulla fuga, culpa odio, amet quis porro sunt? Dolorem corporis exercitationem repudiandae reiciendis accusamus illo delectus omnis consectetur. Sequi eos dignissimos neque nemo facere. Similique, saepe optio iusto consequuntur ad ipsam deleniti, nemo sed hic veniam vitae rem eligendi, dolor aspernatur quasi vel impedit! Expedita in veritatis itaque vitae mollitia. Ex repellat minima atque ratione laudantium. Corrupti, laborum quod ea animi praesentium eaque maiores cum iure unde tempore totam ab repellendus reprehenderit quaerat. Nulla, amet? Corrupti laborum adipisci aut excepturi alias eos voluptatem deleniti dolorum?</p>
            </div>
          </div>

          {/* Right site */}
          <div className="col-span-4">
            <BookNowForm/>
            <PackageOffer/>
            <PackageTag/>
          </div>
        </div>        
      </Container>
    </main>
  )
}

export default PackageDetails 