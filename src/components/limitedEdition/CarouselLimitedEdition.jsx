'use client'
import Image from "next/image"
import { useRef } from "react";
import { limitedEdition } from "./data";



const CarouseLimitedEdition = () => {
  
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -250, // Ajusta el valor según el ancho de tus elementos
        behavior: 'smooth', // Animación de desplazamiento suave
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {

      carouselRef.current.scrollBy({
        left: 250,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="overflow-x-hidden flex flex-col lg:flex-row gap-x-5 relative z-0">
      <section className="lg:hidden flex gap-x-5 justify-center">
        <button className='text-[4rem]' onClick={scrollLeft}>{'<'}</button>
        <button className='text-[4rem]' onClick={scrollRight}>{'>'}</button>
      </section>
      <button className='text-[4rem] hidden lg:block' onClick={scrollLeft}>{'<'}</button>

      <div className="flex gap-x-3 snap-x snap-mandatory overflow-x-hidden"  ref={carouselRef}>
        {limitedEdition.map((d) => (
          <div key={d.id}>
            <div className="border border-[#ffff] relative z-50 bg-black w-[217px]">
              <section>
                <Image src={d.img} width={228} height={228} alt="premium products" />
              </section>
              <section className="text-center">
                <p className="text-[13px]">{d.description}</p>
                <p className={`text-[#ffff] font-[Barlow-600]`}>{d.type}</p>
                <p className="text-[25px]">{d.name}</p>
                <p className="text-[13px]">{d.price}</p>
              </section>
              <section className={`bg-[#ffff] text-center py-2 text-[#000]`}>
                <p className="cursor-pointer">BUY NOW</p>
              </section>
            </div>
          </div>
        ))}
      </div>
      <section className=" flex flex-col justify-center">
        <button className='text-[4rem] hidden lg:block' onClick={scrollRight}>{'>'}</button>
      </section>
    </div>
  );
};
export default CarouseLimitedEdition;
