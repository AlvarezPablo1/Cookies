'use client'
import Image from "next/image"
import { data } from "./data"
import Slider from "react-slick"



const Carousel = () => {
  const settings = {
    infinite: true,
    Speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }
  return (
    <div className="flex gap-x-3">
      {/* <Slider {...settings}> */}
        {data.map((d) => {
          return (
            <div key={d.id} className={`border border-[#01A0DC] relative z-50 bg-black w-[217px]`}>
              <section>
                <Image src={d.img} width={228} height={228} alt="premium products"/>
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
          )
        })}
      {/* </Slider> */}
    </div>
  );
};
export default Carousel;
