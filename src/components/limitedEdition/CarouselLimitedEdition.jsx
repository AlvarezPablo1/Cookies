'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image"
import Link from "next/link";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { limitedEdition } from "./data";


const CarouseLimitedEdition = () => {
  return (
  <Swiper
      modules={[Autoplay, Navigation, A11y]}
      // autoplay={{
      //   delay: 1000,
      //   disableOnInteraction: false,
      // }}
      navigation
      breakpoints= {{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024:{
          slidesPerView:3,
        },
        1440:{
          
          slidesPerView:4,
        },
        2560:{
          slidesPerView:4
        }
      }}
    >
        {limitedEdition.map((d) => ( 
            <SwiperSlide key={d.id}>
            <div className="border border-[#ffff]  bg-black w-[217px] ml-12 min-[375px]:ml-20 min-[425px]:ml-24 md:ml-20 lg:ml-14 min-[1440px]:ml-20">
              <section>
                <Image src={d.img} width={228} height={228} alt="premium products" />
              </section>
              <section className="text-center">
                <p className="text-[13px]">{d.description}</p>
                <p className={`text-[#ffff] font-[Barlow-600]`}>{d.type}</p>
                <p className="text-[25px] h-[75px]">{d.name}</p>
                <p className="text-[13px]">{d.price}</p>
              </section>
              <section className={`bg-[#ffff] text-center py-2 text-[#000]`}>
                <Link href="https://seeds.cookies.co/" className="cursor-pointer">BUY NOW</Link>
              </section>
            </div>
          </SwiperSlide>
          
        ))}
        </Swiper>
  );
};
export default CarouseLimitedEdition;
