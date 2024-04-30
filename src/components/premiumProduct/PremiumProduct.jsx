import Button from "../Button"
import Carousel from "../carousel/Carousel"

const PremiumProduct = () => {
  return (
    <div className="relative bg-[#000] py-14 flex flex-col min-[1440px]:flex-row md:items-center gap-x-5">
      <div className="hidden lg:block">
        <section className="absolute shadow-[0_5px_900px_150px] shadow-[#011721] top-[0%] left-0"/>
        <section className="absolute shadow-[0_5px_900px_150px] shadow-[#011721] top-[0%] right-0"/>
      </div>
      <div className=" px-[1rem] min-[1440px]:pl-[6rem] pb-5">
        <p className="text-[#0EA5E9] font-[Barlow-600] text-[25px] md:text-[30px]">PREMIUM GENETICS</p>
        <p className=" text-[60px] md:text-[70px] font-[Barlow-900]">COOKIES ORIGINALS</p>
        <p className="text-[20px  ] md:text-[26px] md:w-[609px] pb-6">Our best-in-class in-house cultivation, global varieties, and full lineup of strain-specific products. </p>
        <Button text={"BUY NOW"}/>
      </div>
        <Carousel/>
    </div>
  )
}
export default PremiumProduct