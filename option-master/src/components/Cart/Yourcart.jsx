import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { Paymentform } from './Paymentform';
export const Yourcart = () => {

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

  const products = [
    {
      id: 1,
      name: "Product Name",
      description: "Greek, Roman, Byzantine and Medieval Coins, Seals, Antiquities.",
      image: "https://katzauction.b-cdn.net/auction_imgs/2023_03_21__141314_80p_bbf26.jpg",
      price: 19.99,
    },
    {
      id: 2,
      name: "Product Name",
      description: "Greek, Roman, Byzantine and Medieval Coins, Seals, Antiquities.",
      image: "https://katzauction.b-cdn.net/auction_imgs/2023_03_21__141314_80p_bbf26.jpg",
      price: 19.99,
    },

  
  
  ]
  
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

      {/*  */}

      <h1 className=" w-[100%]  md:mt-[-13px]    lg:mt-[-13px]   cartstyle sm:relative  sm:text-3xl top:9px  text-4xl font-[initial]  tracking-tight text-gray-900 md:ml-[12px] sm:ml-[20px] mb-[3rem]  md:text-[3rem]   lg:text-[3rem]  lg:mt-4rem  md:mt-4rem "> Your Cart</h1>
      {/*  */}

     <div>

     <div className="flex-1">
    <div className="p-8">
      {products.map((product) => (
        <div key={product.id} style={{marginTop:"30px"}}  className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row md:w-[95%] md:mx-auto md:m-auto drop-shadow-lg mt-[10px]">
          <img src={product.image} alt="Product Image" className="object-contain h-48 w-full md:h-auto md:w-96" />
          <div className="table-column p-4 md:flex md:flex-row justify-center md:p-[57px] md:gap-[17.25rem]">
            <div className="md:ml-[33px]">
              <h2 className="font-bold text-xl mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-4">{product.description}</p>
            </div>
            <div className="border-t pt-4">
              <p className="text-gray-700 font-bold">Price: ${product.price.toFixed(2)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
     </div>
    <Paymentform/>  

 </>
  )
}
