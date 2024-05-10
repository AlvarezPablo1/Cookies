
import lemonnadeBg from '../../../public/bg/lemonnade-bg.png'
import Image from "next/image"
import CarouseLimitedEdition from './CarouselLimitedEdition'

const LimitedEdition = () => {
  return (
    <div className=" bg-[#FFDA03] relative py-20 2xl:flex 2xl:justify-center 2xl:items-center">
      <div className="absolute inset-0 z-0 overflow-y-hidden">
        <Image src={lemonnadeBg} alt="background image"/>
        <div className="absolute inset-0 bg-[#FFDA03] opacity-70 z-10"></div>
      </div>
      <div className="z-50 relative  text-center">
      <section className="font-[Barlow-700]">
        <p className="text-[25px] md:text-[30px] ">NEW LIMITED EDITION!</p>
        <p className="text-[50px] md:text-[70px]">LEMONNADE</p>
      </section>
      <section className=' 2xl:w-[1500px]'>
        <CarouseLimitedEdition/>
      </section>
      </div>
    </div>
    
  )
}
export default LimitedEdition