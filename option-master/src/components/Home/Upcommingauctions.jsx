import React from "react";
import { Link } from "react-router-dom";
// import "../css/Upcomming.css";
import coin from "./images/coin.jpg";
export const Upcommingauctions = () => {
  return (
    <>
      <h1 className="text-4xl font-all tracking-tight text-gray-900 md:ml-[127px] sm:ml-[20px] ">
        Upcoming auctions
      </h1>

      <section className="py-10 mx-auto w-[80%]">
        <div className="space-y-4  box-sx">
          <template x-for="auction in current_auctions">
            <button
            
              className="group grid grid-cols-1 lg:grid-cols-4 rounded-lg transition ease-in-out duration-300 "
              style={{ border: "none" }}
            >
              <div className="col-span-3 lg:col-span-1">
                <div className="relative">
                  <img
                    src="auction.image"
                    className="w-full rounded sticky top-0"
                    alt=""
                  />
                </div>
              </div>
              <div className="p-4 col-span-3 lg:col-span-3 space-y-4">
                <div className="border-b pb-4">
                  <p
                  
                    className="text-2xl tracking-tight font-bold group-hover:text-yellow-500 dark:group-hover:text-yellow-300 transition ease-in-out duration-300 inline"
                  ></p>
                  <p className="text-lg text-yellow-500 dark:text-yellow-300 block inline">
                    <br />
                    <span className="font-all" > Lots</span>
                  </p>
                  <template >
                    <p
                      className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                     
                    ></p>
                  </template>
                </div>
                <div className="text-sm" ></div>
              </div>
            </button>
          </template>
          <a
            className="group grid grid-cols-1 lg:grid-cols-4 gap-6 p-4 bg-white dark:bg-night-900 border border-gray-200 dark:border-night-700 hover:shadow-lg rounded-lg transition ease-in-out duration-300"
 
          >
            <div className="col-span-3 lg:col-span-1">
              <img className="w-full rounded" src={coin} alt="" />
            </div>
            <div className="p-4 col-span-3 lg:col-span-3 space-y-4">
              <div className="border-b pb-4">
                <h4
                 
                  className=" font-all text-2xl tracking-tight font-bold transition ease-in-out duration-300 inline"
                >
                  AUCTION 18: Greek, Roman, Byzantine and Medieval Coins,
                  <br /> Seals, Antiquities
                </h4>
                <p className="text-lg text-black  font-all  block inline">
                  <br />
                  <br />
                  <br />
                  <span x-text="auction.count_all_items text-black font-bold font-all">
                    842
                  </span>{" "}
                  Lots
                </p>
                <template x-if="auction.planned_starting_formatted != '-'">
                  <p
                    className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                    x-text="'('+ auction.planned_starting_formatted + ' -  ' + auction.planned_ending_formatted + ')'"
                  ></p>
                </template>
                <p
                  className="mt-1 text-sm text-black  font-all   "
                >
                  20.04.2023 - 21.04.2023
                </p>
              </div>
              <div className="text-sm font-all ">
                <p>Live Auction Schedule:</p>
                <p>
                  {" "}
                  <br />
                </p>
                <p>
                  <span className="text-black "> Session 1 </span>{" "}
                  <span className="ml-2 font-all ">
                    {" "}
                    [20th of April. Live bidding starting at 05:00PM BST]
                  </span>
                </p>
                <p>
                  <br />
                  <ul className="list-disc  font-all ">
                    <li className="list-disc font-all text-black">1-204 Greek Coins</li>
                    <li className="list-disc text-black">
                      205-220 Roman Republic font-all Coins
                    </li>
                    <li className="list-disc font-all text-black">
                      221-359 Roman Provincial Coins
                    </li>
                    <li className="list-disc font-all text-black">
                      360-495 Roman Imperial Coins
                    </li>
                  </ul>
                </p>
                <p>
                  {" "}
                  <br />
                </p>
                <br />

                <span className="text-black font-semibold"> Session 2 </span>{" "}
                  <span className="ml-2 font-all">
                    {" "}
                    [21st of April. Live bidding starting at 05:00PM BST]
                  </span>
               
                <p>
                  <br />
                  <ul className="list-disc ">
                    <li className="list-disc text-black">496-528 Byzantine Coins</li>
                    <li className="list-disc font-all text-black">
                    529-533 Medieval and World Coins
                    </li>
                    <li className="list-disc text-black">
                    534-549 Islamic Coins
                    </li>
                    <li className="list-disc font-all text-black">
                    586-676 Antiquities
                    </li>

                    <li className="list-disc  font-all text-black">
                    586-676 Antiquities
                    </li>
                  </ul>
                </p>
                <p>
                  {" "}
                  <br />
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};
