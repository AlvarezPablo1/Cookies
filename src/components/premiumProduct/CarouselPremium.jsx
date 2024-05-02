'use client'
import Image from "next/image"
import { data } from "./data"
import { useRef } from "react";


const CarouselPremium = () => {
  
  const carouselRef = useRef(null);

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const clientWidth = carouselRef.current.clientWidth;
      const maxScrollLeft = scrollWidth - clientWidth;

      carouselRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });

      // Verificar si se ha llegado al final
      if (carouselRef.current.scrollLeft >= maxScrollLeft) {
        carouselRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }
    }
  }

  return (
    <div className="overflow-x-hidden flex relative z-0">
      <div className="flex gap-x-8 snap-x snap-mandatory overflow-x-hidden"  ref={carouselRef}>
        {data.map((d) => (
          <div key={d.id} className="snap-start">
            <div className="border border-[#01A0DC] relative z-50 bg-black w-[217px]">
              <section>
                <Image src={d.img} width={228} height={228} alt="premium products" />
              </section>
              <section className="text-center">
                <p className="text-[13px]">{d.description}</p>
                <p className={`text-[#01A0DC] font-[Barlow-600]`}>{d.type}</p>
                <p className="text-[25px]">{d.name}</p>
                <p className="text-[13px]">{d.price}</p>
              </section>
              <section className={`bg-[#01A0DC] text-center py-2 text-[#000]`}>
                <p>BUY NOW</p>
              </section>
            </div>
          </div>
        ))}
      </div>
      <section className="absolute flex flex-col justify-center right-0 h-full shadow-[280px_000px_50px_300px] md:p-5 md:shadow-[250px_000px_50px_300px] shadow-black md:shadow-black bg-black z-50">
        <button className='text-[4rem] text-[#01A0DC]' onClick={scrollRight}>{'>'}</button>
      </section>
    </div>
  );
};
export default CarouselPremium;
