import React, { useState, useEffect } from "react";

import { FaSearch } from "react-icons/fa";
import { Productslider } from "../Lotes/Productslider";
// import "../CssFolder/custom.css";
import { Link } from "react-router-dom";
// Link
const ProductPage = () => {
  // 
  const [countdown, setCountdown] = useState(null);


  // 
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
    console.log("Jump for Lot:", jumpForLot);
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
  // 
  useEffect(() => {
    const endDate = new Date("2023-06-01T00:00:00");
    const intervalId = setInterval(() => {
      const now = new Date();
      const diff = endDate - now;

      if (diff < 0) {
        clearInterval(intervalId);
        setCountdown("Expired");
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // 
  return (
    <>

<div className="bg-gray-200  rounded-lg ">
   
   
    </div>


      <div className="flex flex-row p-4 justify-end">

        
        <form
          onSubmit={handleSubmit}
          className="flex md:mr-[30px] mb-7 mt-[9px]"
        >
          <input
            className="bg-white rounded-l-md px-4 py-2 border-gray-300 w-1/2 mr-2 border rounded-lg md:h-[35px] drop-shadow-lg"
            type="text"
            style={{ borderRadius: "17px" }}
            placeholder="Jump for Lot"
            value={jumpForLot}
            onChange={handleJumpForLotChange}
          />
          <input
            className="bg-white rounded-r-md px-4 py-2 r border-gray-300 w-1/2 mr-2 border rounded-lg md:h-[35px] drop-shadow-lg"
            type="text"
            placeholder="Search"
            value={search}
            style={{ borderRadius: "17px" }}
            onChange={handleSearchChange}
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="flex items-center bg-[#2E0D23]  text-white font-bold py-2 px-4 rounded"
            style={{ borderRadius: "14px" }}
          >
            Search
            <FaSearch className="ml-2 " style={{ fontSize: "15px" }} />
          </button>
        </form>
      </div>
<div />
<div>
      <h1 className=" cartstyle sm:relative  sm:text-3xl top:9px  text-4xl font-[initial] mt-[30px] tracking-tight text-gray-900 md:ml-[12px] sm:ml-[20px] mb-[3rem]  md:text-[3rem]   lg:text-[3rem]  lg:mt-4rem  md:mt-4rem ">
      Product Page
      </h1>
  
    
      </div>

<div>



</div>


      <div className="parent flex md:flex-row parent-col">
        <div className="child-1">
          <div className="flex flex-col justify-start lg:flex-col gap-16  md:mb-[170px]">
            <div className="flex flex-col gap-8 lg:w-2/4 mx-auto m-auto ">
              <img
                src={activeImg}
                alt=""
                className="w-full lg:custom-img22  h-[222px] lg:p-[auto] aspect-square object-cover rounded-xl"
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
            className="w- px-8 py-10 md:mt-[-70px]  lg:mt-[-70px]  lg:ml-5  bg-slate-100 "
          >
          <div className="flex flex-row lg:items-center lg:justify-center lg:mr-[63px]">
    <h1 className="font-[initial] text-3xl font-semibold  pb-5 realtve lg:top-[-28px] md:mb-5">
      Pricing Details
    </h1>
    <p className="absolute left-[16rem]  top-[63px] lg:top-[11px] lg:mb-[-23px] lg:left-[19rem] font-[initial] border-t-2 border-dashed   border-gray-500  text-center lg:w-[150px]">
      time left for bid
    </p>
    <div className=" lg:block">
      <hr className="hidden lg:block border border-gray-500 border-dashed bid-border" />
      <div className="grid grid-cols-4 w-[126px]  lg:w-[10rem] gap-[1rem] relative lg:bottom-[18px] lg:left-[58px] left-[24px] ">
        <div className="  text-center flex items-center">
          <h4 className="lg:text-[19px] font-[initial] font-semibold flex">
            {" "}
            21 <span className="relative left-1">d</span>
          </h4>
        </div>
        <div className="  text-center flex items-center">
          <h4 className="lg:text-[19px] font-[initial] font-semibold flex">
            {" "}
            8 <span className="relative left-1">h</span>
          </h4>
        </div>
        <div className="  text-center flex items-center">
          <h4 className="lg:text-[19px] font-[initial] font-semibold flex">
            {" "}
            16 <span className="relative left-1">m</span>
          </h4>
        </div>
        <div className="  text-center flex items-center">
          <h4 className="lg:text-[19px] font-[initial] font-semibold flex">
            {" "}
            59 <span className="relative left-1">s</span>
          </h4>
        </div>
      </div>
    </div>
  </div>
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
              
<div className="flex flex-row items-center gap-4"></div>

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
      {/* other lots  card */}

      <Productslider />
    </>
  );
};

export default ProductPage;
