import React, { useState } from "react";

import { FaSearch, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
const products = [
    {
      id: 1,
      name: "Product Name",
      description:
        "Greek, Roman, Byzantine and Medieval Coins, Seals, Antiquities.",
      image:
        "https://katzauction.b-cdn.net/auction_imgs/2023_03_21__141314_80p_bbf26.jpg",
      names: "Zurich (CH)",
    },
    {
      id: 2,
      name: "Product Name",
      description:
        "Greek, Roman, Byzantine and Medieval Coins, Seals, Antiquities.",
      image:
        "https://katzauction.b-cdn.net/auction_imgs/2023_03_21__141314_80p_bbf26.jpg",
      names: "Zurich (CH)",
    },
    {
      id: 3,
      name: "Product Name",
      description:
        "Greek, Roman, Byzantine and Medieval Coins, Seals, Antiquities.",
      image:
        "https://katzauction.b-cdn.net/auction_imgs/2023_03_21__141314_80p_bbf26.jpg",
      names: "Zurich (CH)",
    },
    {
      id: 4,
      name: "Product Name",
      description:
        "Greek, Roman, Byzantine and Medieval Coins, Seals, Antiquities.",
      image:
        "https://katzauction.b-cdn.net/auction_imgs/2023_03_21__141314_80p_bbf26.jpg",
      names: "Zurich (CH)",
    },
    {
      id: 5,
      name: "Product Name",
      description:
        "Greek, Roman, Byzantine and Medieval Coins, Seals, Antiquities.",
      image:
        "https://katzauction.b-cdn.net/auction_imgs/2023_03_21__141314_80p_bbf26.jpg",
      names: "Zurich (CH)",
    },
  ];
export const Newlistingpage = () => {
    const [jumpForLot, setJumpForLot] = useState("");
  const [search, setSearch] = useState("");
// Link
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

  return (
   <>
   
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
            className="bg-white rounded-r-md px-4 py-2 border border-gray-300 w-1/2 mr-2 border rounded-lg md:h-[35px] drop-shadow-lg"
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
      {/*  */}
      
      <div className="bg-slate-200 md:p-[37px] sm:p-[2px]">
        {/* font-size: 21px; position: absolute; font-family: initial; margin-left:
        43px; */}
        <h1
          className=" lg:mt-[-11px] 	 font-[initial] md:absolute lg:absolute sm:relative  ml-[34px] sm:text-[auto] md:text-[27px] mt-[-4px] border-4 border-b-border-black"
          style={{ borderBottom: "2px solid" }}
        >
    New Listing page 
        </h1>
      </div>
      {/*  */}
      
      <div className="flex-1">
        <div className="p-8">
          <Link to='/Productpage' >
          {products.map((product) => (
            <div
              key={product.id}
              style={{ marginTop: "30px" }}
              className=" cursor-pointer bg-white rounded-lg overflow-hidden flex flex-col md:flex-row md:w-[85%] md:mx-auto md:m-auto  mt-[10px] border-y 
              border-black"
            >
              <img
                src={product.image}
                alt="Product Image"
                className="object-contain h-48 w-full md:h-auto md:w-96"
              />
              <div className="table-column p-4 md:flex md:flex-row justify-center md:p-[57px] md:gap-[17.25rem]">
                <div className="md:ml-[33px]">
                  <h2 className="font-bold text-xl mb-2">{product.name}</h2>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                </div>
                {/* <hr className="absolute sm:border-1 sm:block hr22" /> */}
                <div className="flex flex-row lg:ml-[75px]">
                  <div className="pt-4 ">
                  <hr className="border border-black hr-border-transform lg:relative  lg:left-[-103px]    lg:top-[24px]  md:top-[24px]    md:relative   md:left-[-103px] hide---hr" />

                    <p className="text-gray-700 font-bold">
                      <span className="text-[#2e0d23] cursor-pointer	">
                        {" "}
                        20 - 21 April 2023
                      </span>{" "}
                      <span className="relative  left-[57px] lg:top-[0rem] md:top-[0rem] lg:left-5 archive-text">
                        {" "}
                        ${product.name}
                      </span>{" "}
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          ))}
          </Link>
        </div>
      </div>
   </>
  )
}
