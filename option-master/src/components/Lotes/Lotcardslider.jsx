import React from 'react'
// Link
// import "../CssFolder/Custom.css"
import { FaRegBookmark } from "react-icons/fa";
import { Card, Dropdown, Tooltip, Button } from "flowbite-react";
import { Link } from 'react-router-dom';

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
export const Lotcardslider = () => {
  return (
   <>
   <h1 className="following-head md:mt-[30px] sm:mt-[15px]  text-4xl font-all tracking-tight md:text-gray-900 md:ml-[127px] sm:ml-[20px] ">
        {" "}
       Popular
      </h1>
      <div className="mx-auto md:mt-[4rem]  md:mb-[110px] sm:mb-[50px] custom-margin">
        <div className="flex flex-row  overflow-x-auto md:w-[134vh] mx-auto sm:relative Bottom:[30px]">
          {images.map((image) => (
            <div key={image.id} className="lg:col-span-3 ml-[19px]">
              <div className="max-w-sm  md:mb-[15px]">
                <Card>
                  <div className="flex justify-end px-4 pt-4 custom-card custom-pos">
                    <Tooltip content="add to wishlist" placement="top" style="light">
                      <Button className=" bg-white  hover:bg-white  border-0	border-transparent	" style={{border:"none"}}>
                        <FaRegBookmark color="#2E0D23" />
                      </Button>
                    </Tooltip>{" "}
                    {/* <Dropdown inline={true} label="">
                      <Dropdown.Item>
                        <a
                          href="//////////////////////////////////////////"
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Place a bid
                        </a>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <a
                          href="//////////////////////////////////////////"
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          add to cart
                        </a>
                      </Dropdown.Item>
                    </Dropdown> */}
                  </div>
                  <div className="flex flex-col items-center pb-10">
                    <img
                      className="mb-3  rounded-full shadow-lg custom-img"
                      src={image.src}
                      alt={image.alt}
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                      {image.title}
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {image.subtitle}
                    </span>
                    <div className=" flex space-x-3 flex-gap-d ">
                        <Link
                          to="/bidpage"
                          className="custom-width inline-flex items-center rounded-lg bg-[#b19676] py-2 px-4 text-center hover:bg-[#ceae89] text-sm font-medium text-white  focus:outline-none "
                        >
                          <span className="relative left-[4px] lg:text-xs font-response-sm ">
                            Place a bid
                          </span>
                        </Link>
                        <Link
                          to="/bidpage"
                          className="custom-width inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                        >
                          <span className="relative left-[4px]">Buy now</span>
                        </Link>
                      </div>
                      <div className="flex flex-row ga-5  gap-[20px]  lg:gap-[50px] current-position">
                       
                        <span
                          
                          className="font-bold font-shadow-y"
                        >
                          Current bid 20$
                        </span>
                        <span
                          
                          className="font-bold font-shadow-y lg:left-[-17px] bid-price-sm"
                        >
                          {" "}
                          Price 20$
                        </span>
                      </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
   </>
  )
}
