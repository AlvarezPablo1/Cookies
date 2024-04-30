import Carousel from "../carousel/Carousel"
import lemonnadeBg from '../../../public/bg/lemonnade-bg.png'
import Image from "next/image"
const LimitedEdition = () => {
  return (
    <div className="relative overflow-x-hidden bg-[#FFDA03] py-20">
      <div className="absolute inset-0 z-0 overflow-y-hidden">
        <Image src={lemonnadeBg} alt="background image"/>
        <div class="absolute inset-0 bg-[#FFDA03] opacity-70 z-10"></div>
      </div>
      <div className="z-50 relative  text-center flex flex-col items-center">
      <section className="font-[Barlow-700]">
        <p className="text-[25px] md:text-[30px] ">NEW LIMITED EDITION!</p>
        <p className="text-[50px] md:text-[70px]">LEMONNADE</p>
      </section>
      <Carousel/>
      </div>
    </div>
    
  )
}
export default LimitedEdition