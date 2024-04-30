import Button from "../Button"
import Brands from "./Brands"
import Video from 'next-video';
import getStarted from '/videos/fondo.mp4';

const Description = () => {
  return (
    <div className="relative flex flex-col-reverse">
      <div className="hidden md:block absolute z-0">
        <Video  src={getStarted} autoPlay  controls={false} muted loop/>
      </div>
      <div>
      <div className="relative lg:w-[722px] flex flex-col items-start min-[1440px]:mt-16 gap-y-2 px-[1rem] md:pl-[4rem] lg:pl-[6rem]">
        <section >
          <h1 className="text-white text-[50px] md:text-[49px] lg:text-[64px] min-[1440px]:text-[74px] font-[Barlow-900]">ENTER THE VAULT OF <span className="text-[#0EA5E9]">COOKIES SEED BANK</span>.</h1>
        </section>
        <section>
          <p className="text-[20px] text-white md:w-[21rem] lg:w-auto">Federally legal. Legit quality strains. Best-in-class prices.</p>
        </section>
        <Button text={"SHOP NOW"}/>
      </div>
      <div className="block md:hidden z-0">
        <Video  src={getStarted} autoPlay  controls={false} muted loop/>
      </div>
      <div className="text-center">
        <Brands/>
      </div>
    </div>
    </div>
    
  )
}
export default Description