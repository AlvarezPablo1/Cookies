'use client'
import Image from "next/image"
import { data } from "./data"
import Link from "next/link";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const CarouselPremium = () => {
  
  return (
    <Swiper
      // Install Swiper modules
      modules={[Autoplay, A11y]}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      breakpoints= {{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024:{
          slidesPerView:2,
        },
        1440:{
          Navigation,
          slidesPerView:3,
        },
        2560:{
          slidesPerView:4
        }
      }}
    >
        {data.map((d) => {

          return(
            <SwiperSlide key={d.id}>
            <div className="border border-[#01A0DC] relative z-50 bg-black w-[217px] ml-14 min-[375px]:ml-20 min-[425px]:ml-24 min-[1024px]:ml-0">
              <section>
                <Image src={d.img} width={228} height={228} alt="premium products" />
              </section>
              <section className="text-center">
                <p className="text-[13px]">{d.description}</p>
                <p className={`text-[#01A0DC] font-[Barlow-600]`}>{d.type}</p>
                <p className="text-[25px] h-[75px]">{d.name}</p>
                <p className="text-[13px]">{d.price}</p>
              </section>
              <section className={`bg-[#01A0DC] text-center py-2 text-[#000]`}>
                <Link href="https://seeds.cookies.co/" className="cursor-pointer">BUY NOW</Link>
              </section>
            </div>
          </SwiperSlide>
          )
          
        })}
        </Swiper>
  );
};
export default CarouselPremium;
