import Button from "../Button"
import Brands from "./Brands"

const Description = () => {
  return (
    <div id="description" className="relative flex flex-col-reverse 2xl:items-center">
      <div className="hidden md:block absolute z-0 w-full text-center h-[100%]">
      <video src="/fondo.mp4" autoPlay loop muted className="w-full">
        <source type="video/mp4"/>
      </video>
      </div>
      <div>
      <div className="relative lg:w-[722px] flex flex-col items-start min-[1440px]:mt-16 gap-y-2 px-[1rem] md:pl-[4rem] lg:pl-[4rem] min-[1536px]:ml-[40rem]">
        <section >
          <h1 className="text-white text-[50px] md:text-[49px] lg:text-[64px] min-[1440px]:text-[74px] font-[Barlow-900]">ENTER THE VAULT OF <span className="text-[#0EA5E9]">COOKIES SEED BANK</span>.</h1>
        </section>
        <section>
          <p className="text-[20px] text-white md:w-[21rem] lg:w-auto">Federally legal. Legit quality strains. Best-in-class prices.</p>
        </section>
        <Button text={"SHOP NOW"} link={"https://seeds.cookies.co/"} />
      </div>
      <div className="block md:hidden z-0">
        <video src="/fondo.mp4" autoPlay loop muted className="w-full">
          <source type="video/mp4"/>
        </video>
      </div>
      <div className="text-center">
        <Brands/>
      </div>
    </div>
    </div>
    
  )
}
export default Description