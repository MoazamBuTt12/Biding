import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {  Tooltip } from "flowbite-react";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

// data for card images
const images = [
    {
      id: 1,
      src: "https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg",
      alt: "Bonnie image",
      title: "product",
      subtitle: "binance",
    },
    {
      id: 2,
      src: "https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg",
      alt: "Bonnie image",
      title: "product",
      subtitle: "binance",
    },
  
    {
      id: 3,
      src: "https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg",
      alt: "Bonnie image",
      title: "product",
      subtitle: "binance",
    },
    {
      id: 4,
      src: "https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg",
      alt: "Bonnie image",
      title: "product",
      subtitle: "binance",
    },
    {
      id: 5,
      src: "https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg",
      alt: "Bonnie image",
      title: "product",
      subtitle: "binance",
    },
    {
      id: 6,
      src: "https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg",
      alt: "Bonnie image",
      title: "product",
      subtitle: "binance",
    },
    {
      id: 7,
      src: "https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg",
      alt: "Bonnie image",
      title: "product",
      subtitle: "binance",
    },
  
    // Add more objects for additional images
  ];
export const Browseslider = () => {
  return (
  <>
    <div className="container-221">
      {/* <h1 className="heading">Flower Gallery</h1> */}
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img  className =".img shadow-x   swiper-custom-height "   src="https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg" alt="slide_image" />


        </SwiperSlide>
        <SwiperSlide>
          <img  className =".img  swiper-custom-height  shadow-x"   src="https://primary.jwwb.nl/public/u/x/q/temp-fpjrchemtgknipuwutwj/4s4a1f/95.jpg?enable-io=true&enable=upscale&fit=bounds&width=960&height=480" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className =".img  swiper-custom-height  shadow-x"    src="https://primary.jwwb.nl/public/u/x/q/temp-fpjrchemtgknipuwutwj/ylvj5m/66.jpg?enable-io=true&enable=upscale&fit=bounds&width=669&height=334" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className =".img  swiper-custom-height  shadow-x"    src="https://primary.jwwb.nl/public/u/x/q/temp-fpjrchemtgknipuwutwj/f6isaf/42.jpg?enable-io=true&enable=upscale&fit=bounds&width=960&height=480" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className =".img  swiper-custom-height  shadow-x"    src="https://primary.jwwb.nl/public/u/x/q/temp-fpjrchemtgknipuwutwj/dkgo7q/220.jpg?enable-io=true&enable=upscale&fit=bounds&width=960&height=480" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className =".img   swiper-custom-height shadow-x"    src="https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className =".img  swiper-custom-height  shadow-x"    src="https://primary.jwwb.nl/public/u/x/q/temp-fpjrchemtgknipuwutwj/dkgo7q/220.jpg?enable-io=true&enable=upscale&fit=bounds&width=960&height=480" alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler relative top-[133px] gap-4">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination h-[1px]"></div>
        </div>
      </Swiper>
    </div>
  
                
  
  
  
  
  
  </>
  )
}
