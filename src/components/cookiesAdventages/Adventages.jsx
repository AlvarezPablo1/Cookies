import Image from "next/image"
import logo from '../../../public/favicon.png'
import product from '../../../public/product/product-big.png'
import AdventagesPoint from "./AdventagesPoint"
const   Adventages = () => {
  return (
    <div className="relative  flex flex-col 2xl:justify-center lg:flex-row bg-black justify-between overflow-y-hidden">
        <section className="absolute shadow-[0_5px_900px_100px] md:shadow-[0_5px_900px_150px] shadow-[#45A7E1] md:shadow-[#45A7E1] top-[80%] 2xl:left-0"/>
        <section className="absolute shadow-[0_5px_900px_100px] md:shadow-[0_5px_900px_150px] shadow-[#45A7E1] md:shadow-[#45A7E1] right-0 top-[10%]"/>
      <div className="pt-10 px-1 min-[1440px]:pl-[4rem]">
        <Image src={logo} alt="logo"/>
        <p className="text-[50px] md:text-[70px] font-[Barlow-900] md:w-[480px]">THE COOKIES DIFERENCE</p>
        <AdventagesPoint/>
      </div>
      <section>
        <Image src={product} alt="product"/>
      </section>
    </div>
  )
}
export default Adventages