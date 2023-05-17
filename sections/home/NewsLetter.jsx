import { FeatureCard } from "@/components"
import { Featurelist } from "@/constant/data"

const NewsLetter = () => {
  return (
    <section className="newsLetterBg p10" >
      <div className="flex flex-2 items-center gap-20">
        <div className="flex-1">
          <h1 className="font-bold text-white text-[40px]">SUBSCRIBE OUR</h1>
          <h2 className="text-orange-500 text-[40px] font-bold">NEWSLETTER</h2>
          <p className="max-w-[400px] my-10 text-white">Sign up to receive the best offers on promotion and coupons. Don’t worry! It’s not Spam</p>
          <div className="bg-white h-[60px] w-full">
            <input type="email" className="h-full w-[80%]" />
            <button className="w-[20%] h-full bg-black text-orange-500 hover:bg-orange-500 hover:text-black">SUBSCRIBE</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 flex-1 ">
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