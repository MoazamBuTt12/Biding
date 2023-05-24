import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Sidebaraccount } from "./Sidebaraccount";

export const Profileaccount = () => {
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

      <div className=" .cutom-cd flex flex-row justify-evenly  lg:w-[161vh]  md:w-[161vh]   mb-[107px]">
        <div className="child-1 border-r lg:h-[100vh] lg:border-black">
          <Sidebaraccount  />
        </div>
        <div className="child-2 lg:w-[85vh] custom-child-">
          <h2 className="text-2xl uppercase ml-2">My Profile</h2>
          <hr
            className="border-gray-300 border lg:mt-7"
            style={{ opacity: "0.7" }}
          />
          <hr className="border w-[100%] " />

          <div className="flex flex-row justify-between mt-4">
            <div>
              <h4>Identity</h4>
            </div>
            <div className="flex flex-row-justify-center gap-3">
              <button
                style={{ fontSize: "12px", padding: "6px" }}
                className="bg-[#2e0d23]  text-white rounded button-lg "
              >
                verify now
              </button>
              <button
                style={{ fontSize: "12px", padding: "4px" }}
                className="bg-slate-300  text-black rounded button-llgs shadow-x "
              >
                change
              </button>
            </div>
          </div>
          <hr
            className="border-gray-300 border lg:mt-7"
            style={{ opacity: "0.7" }}
          />

          <div className="flex flex-row justify-start  lg:gap-28px md:gap-28px  mt-[20px] .custom-child-gap profile-llgs profile-reflex
          ">
            <div className="child-1">
              <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg
                  class="absolute w-12 h-12 text-gray-400 -left-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="child-2 child-reflex">
              <h5>
                Full Name{" "}
                <span className="relative top-3px custom-rel">no company</span>
              </h5>
            </div>

            <div className="child-3">
              <button
                style={{ fontSize: "12px", padding: "4px" }}
                className="bg-slate-300  text-black rounded button-lg-verified "
              >
                not Verified yet
              </button>
            </div>
          </div>
          <hr
            className="border-gray-300 border lg:mt-7"
            style={{ opacity: "0.7" }}
          />

          <div className="container-12">
            <form>
              <div className="form-group">
                <label className="label" htmlFor="email">
                  Login
                </label>
                <input
                  className="input fa-input login--input"
                   type="email"
                  id="email"
                  name="email"
                  required=""
                />
              </div>

              <div className="form-group emails">
                <label className="label" >
                  Email
                </label>
                <input
                  placeholder="jhondoe@gmail.com"
                    className="input input-L fa-input  sm:w-[236px] "
                  type="email"
                  id="email"
                  name="email"
                  required=""
                />
              </div>
              <div className="form-group passwords mb-[41px]" style={{marginBottom:'40px'}}>
                <label className="label" htmlFor="contact">
                  Password
                </label>
                <input
                    className="input input-L input-contact fa-input pass-input"
                  placeholder="****"
                  type="text"
                  id="contact"
                  name="contact"
                />
              </div>
              <div className="form-group  notenable">
                <label className="label" htmlFor="address">
                  2FA
                </label>
                <input
                  placeholder="not enable"
                    className="input input-L address-input-d fa-input"
                  type="text"
                  id="2FA"
                  disabled
                />
              </div>
              <div className="form-group">
                <label className="label" htmlFor="email">
                  Contact
                </label>
                <input
                  className="input input-L"
                  type="email"
                  id="email"
                  name="email"
                  required=""
                />
                <button className=" bg-slate-200 rounded p-1 button-llgs shadow-x button-change-llg">Change</button>
              </div>
              <div className="form-group">
                <label className="label" htmlFor="email">
                  Address
                </label>
                <input
                  className="input input-L"
                  type="email"
                  id="address"
                  name="address"
                  required=""
                  placeholder="houseno,streetno,city,country,postalcode"
                />
              </div>
              <div className="form-group">
                <label className="label" htmlFor="email">
                  Phone
                </label>
                <input
                  className="input input-L"
                  type="text"
                  id="email"
                  placeholder="0111 222 333"
                  name="email"
                  required=""
                />
              </div><div className="form-group">
                <label className="label" htmlFor="email">
                  Mobile
                </label>
                <input
                  className="input input-L"
                  type="email"
                  id="email"
                  name="email"
                  required=""
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
