import { FeatureCard } from "@/components"
import { Featurelist } from "@/constant/data"
import Image from "next/image"

const NewsLetter = () => {
  return (
    <section className="px-8 relative">
      {/* <Image
        src="https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
        alt="bg image"
        width="100"
        height="100"
        className="sticky w-full h-[450px] object-cover"
      /> */}
      <div className="flex items-center flex-2">
        <div className="flex-1">
          <h1 className="font-bold text-[80px] ">SUBSCRIBE OUR</h1>
          <h1>NEWSLETTER</h1>
          <p>Sign up to receive the best offers on promotion and coupons. Don’t worry! It’s not Spam</p>
          <div>
            <input type="email" />
            <button>SUBCRIBE</button>
          </div>
        </div>
        <div className="gird grid-cols-4 flex-1">
          {Featurelist.map(item => (
              <FeatureCard
                key={item.id}
                {...item}
              />
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default NewsLetter