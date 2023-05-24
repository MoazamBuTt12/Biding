import React, { useState } from "react";

import { Sidebaraccount } from "./Sidebaraccount";
import { FaSearch } from "react-icons/fa";





export const Accountwatchlist = () => {
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

      <div className="flex flex-row justify-center lg:gap-[10rem] mb-[107px]">
        <div className="child-1  lg:border-r lg:h-[40vh] border-black">
          <Sidebaraccount />
        </div>
        <div className="child-2">
          <h2 className="text-2xl uppercase ml-2 font-all">my Watchlist</h2>
          <hr className="border-1 mt-2 w-[100%]" />

          <div className="custom-llg-1 flex flex-row lg:gap-[18rem] mt-5 justify-between">
            <div>
              <h1>images</h1>
            </div>
            <div>
              <h1>details</h1>
            </div>
            <div>
   <h1>delete</h1>
 </div>

          </div>
          <hr className="border-1 mt-2 w-[100%]" />
          <div className="mt-5">
            <h1 className="text-center	text-xl uppercase font-[initial]">
              no bid found{" "}
            </h1>
            <hr className="border-1 mt-2 w-[100%]" />
          </div>
        </div>
      </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <br />
<br />
    <br />
    <br />
    </>
  )
}
