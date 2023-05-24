import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import {Lotcardslider} from "../components/Lotes/Lotcardslider"
// import Lotffilter from './Lotes/Lotffilter'
import {Lotffilter} from "../components/Lotes/Lotffilter"
export const Lotpage = () => {
  
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

      {/* product section starting cmain tetx*/}
      <div className="bg-slate-200 md:p-[37px] sm:p-[2px]">
        <h1
          className="  	 font-all md:absolute lg:absolute sm:relative  ml-[36px] sm:text-[auto] md:text-[23px] mt-[-4px] border-4 border-b-border-black"
          style={{ borderBottom: "2px solid" }}
        >
          Lots
        </h1>
      </div>
      
 
<Lotffilter/>
{/* <Lotcardslider /> */}
<Lotcardslider/>
  <></>
  </>
  )
}
