import React from "react";
import { useState } from "react";
import "../CssFolder/custom.css";
import { Link } from "react-router-dom";
import "../CssFolder/Cartstyle.css";
// Link

export const Cartpage = () => {
  const [jumpForLot, setJumpForLot] = useState("");
  const [search, setSearch] = useState("");

  const handleJumpForLotChange = (event) => {
    setJumpForLot(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Jump for Lot:", search);
    console.log("Search:", search);
  };

  const [images, setImages] = useState({
    img1: "https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg",
    img2: "https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg",
    img3: "https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg",
    img4: "https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg",
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  const [amount, setAmount] = useState(1);

  return (
    <>
      <h1 className=" cartstyle sm:relative  sm:text-3xl top:9px  text-4xl font-[initial] mt-[30px] tracking-tight text-gray-900 md:ml-[12px] sm:ml-[20px] mb-[3rem]  md:text-[3rem]   lg:text-[3rem]  lg:mt-4rem  md:mt-4rem ">
        Cart
      </h1>
      <div className="parent flex md:flex-row parent-col">
        <div className="child-1">
          <div className="flex flex-col justify-start lg:flex-col gap-16  md:mb-[170px]">
            <div className="flex flex-col gap-8 lg:w-2/4 mx-auto m-auto ">
              <img
                src={activeImg}
                alt=""
                className="w-full custom-img22  md:h-[228px] aspect-square object-cover rounded-xl"
              />
              <div className="flex flex-row justify-bcenter h-24">
                <img
                  src={images.img1}
                  alt=""
                  className="w-[auto] h-24 rounded-md cursor-pointer mr-3"
                  onClick={() => setActiveImage(images.img1)}
                />
                <img
                  src={images.img2}
                  alt=""
                  className="w-[auto] h-24 rounded-md cursor-pointer mr-3"
                  onClick={() => setActiveImage(images.img2)}
                />
                {/* <img src={images.img3} alt="" className='w-[auto] h-24 rounded-md cursor-pointer mr-3' onClick={() => setActiveImage(images.img3)}/> */}
                {/* <img src={images.img4} alt="" className='w-[auto] h-24 rounded-md cursor-pointer mr-3' onClick={() => setActiveImage(images.img4)}/> */}
              </div>
            </div>
            <hr className="border " />
            {/* ABOUT */}
            <div className="flex flex-col gap-4 lg:w-2/4 align-middle relative md:left-[50px] custom-relative">
              <div>
                <span className=" text-violet-600 font-semibold">
                  COIN NAME
                </span>
                <h1 className="text-3xl font-bold">Lot 420 - ‘Rare’ </h1>
                <h6 className="text-[20px] font-semibold">5 euro</h6>
              </div>
              <hr />
              <p className="text-gray-700">
                i, sostenitivo, è pensato per dare il massimo lungo il tuo
                percorso preferito e fare ritorno a casa carico di energia, in
                attesa della prossima corsa.
              </p>
              <h6 className="text-2xl font-semibold">$ 199.00</h6>
            </div>
          </div>
        </div>

        <div className=" child-col child-2  md:h-[54vh] rounded-3xl drop-shadow relative right-5 child-form ">
          <div
            id="summary"
            className="w- px-8 py-10 md:mt-[-70px]  lg:mt-[-113px]  lg:ml-5  bg-slate-100 "
          >
            <h1 className="font-[initial] text-3xl  pb-5 text-center md:mb-5">
              Pricing details
            </h1>
            <div className="flex flex-col gap-3 ">
              <div className="box  flex flex-row p-[12px] justify-center md:gap-[11rem] gap-a">
                <span className="font-[initial] text-2xl">Product Price:</span>
                <span className="font-[initial] text-2xl">700euro</span>
              </div>
              {/*  */}
              <div className="box flex flex-row p-[12px] justify-center md:gap-[11rem] gap-a">
                <span className="font-[initial] text-2xl">Current Bid:</span>
                <span className="font-[initial] text-2xl relative left-3">
                  700euro
                </span>
              </div>
              <div className="box flex flex-row p-[12px] justify-center md:gap-[15rem] gap-a">
                <span className="font-[initial] text-2xl">VAT:</span>
                <span className="font-[initial] text-2xl relative left-3">
                  700euro
                </span>
              </div>
              <hr />
              <div className="box flex flex-row p-[12px] justify-center md:gap-[11rem] gap-a mt-2">
                <span className="font-[initial] text-2xl">Total Price:</span>
                <span className="font-[initial] text-2xl">2100euro</span>
              </div>
              
            </div>
            <Link to="/mycart">
                <button
                  className="         bg-[#2e0d23] text-white font-semibold py-3 px-16 rounded-xl h-full  relative top-5 md:left-[70px] flex-row"
                  style={{ marginleft: "81px" }}
                >
                  Proceed to check-out
                </button>
              </Link>
          </div>
        </div>
      </div>
      {/* modal popup below  */}
      {/* procced to check out */}
    </>
  );
};
