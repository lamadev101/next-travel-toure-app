import { FeatureCard } from "@/components"
import { Featurelist } from "@/constant/data"
import Image from "next/image"

const NewsLetter = () => {
  return (
    <section className="newsLetterBg p-20" >
      <div className="flex flex-2 items-center">
        <div className="flex-1">
          <h1 className="font-bold text-white text-3xl">SUBSCRIBE OUR</h1>
          <h2 className="text-orange-500 text-3xl font-bold">NEWSLETTER</h2>
          <p className="max-w-[400px]">Sign up to receive the best offers on promotion and coupons. Don’t worry! It’s not Spam</p>
          <div className="bg-white h-[80px]">
            <input type="email" className="h-full w-80" />
            <button className="w-20">SUBCRIBE</button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 flex-1 py-20">
          {Featurelist.map(item => (
              <div key={item.id}>
                <FeatureCard
                {...item}
              />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default NewsLetter