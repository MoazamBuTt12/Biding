import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
// Link
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
export const Sidebarfilter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      <section className="col-span-12 lg:col-span-3 overflow-hidden">
        {/* position: absolute;
    top: -285px;
    left: 28px;               Filters */}
        <button
          className="block sm:hidden  bottom-[-67.75rem]  text-black"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <FaFilter size={20} />
        </button>

        <div
          className={`p-6 shadow ${isFilterOpen ? "block" : "hidden"} sm:block`}
        >
          {/* Add Lot */}
          {/* Filters */}
          <form className="space-y-4">
                  {/* Available for immediate purchase */}
                  <div className="p-1 mt-1">
                    <div className="inline-flex items-center space-x-2">
                    <input
                            name="categories"
                            type="checkbox"
                            className="select-none focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-200 rounded"
                        
                          />{" "}
                      <label
                        className="select-none cursor-pointer block text-sm font-all "
                        htmlFor="Available for immediate purchase"
                        style={{ fontSize: "13px" }}
                      >
                        Available for immediate purchase
                      </label>
                    </div>
                  </div>
                  {/* Lots auctioned on website */}
                  <div className="p-1 mt-1">
                    <div className="inline-flex items-center space-x-2">
                    <input
                            name="categories"
                            type="checkbox"
                            className="select-none focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-200 rounded"
                           
                          />
                      <label
                        className="font-all   select-none cursor-pointer block text-sm font-medium"
                        htmlFor="Lots auctioned on website"
                      >
                        Lots auctioned on website
                      </label>
                    </div>
                  </div>
                  {/* Certified  */}
                  {/* Order By */}
                  <div>
                    {" "}
                    <span className="select-none block font-semibold text-sm font-[DM Serif Text', serif;]">
                      Order by
                    </span>{" "}
                    <div
                      className=" p-2 mt-1 space-y-2 border border-gray-200 rounded-md overflow-y-auto lg:h-64"
                      style={{ height: "auto" }}
                    >
                      {" "}
                      <template x-for="option in category_options" />{" "}
                      <div>
                        {" "}
                        <label
                          className="inline-flex items-center block space-x-2"
                          htmlFor="categories-34"
                        >
                          {" "}
                          <input
                            name="categories"
                            type="checkbox"
                            className="select-none focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-200 rounded"
                            defaultValue={34}
                          />{" "}
                          <span className="label-checked:font-bold select-none block text-sm font-medium cursor-pointer">
                            {" "}
                            Lot Number
                          </span>{" "}
                        </label>{" "}
                      </div>{" "}
                      <div> </div>{" "}
                      <div>
                        {" "}
                        <label
                          className="inline-flex items-center block space-x-2"
                          htmlFor="categories-37"
                        >
                          {" "}
                          <input
                            name="categories"
                            type="checkbox"
                            className="select-none focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-200 rounded"
                          />{" "}
                          <span
                            x-text="option.category"
                            className="label-checked:font-bold select-none block text-sm font-medium"
                          >
                            Country
                          </span>{" "}
                        </label>{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <label
                          className="inline-flex items-center block space-x-2"
                          htmlFor="categories-38"
                        >
                          {" "}
                          <input
                            name="categories"
                            type="checkbox"
                            className="select-none focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-200 rounded"
                          />{" "}
                          <span className="font-all label-checked:font-bold select-none block text-sm font-medium cursor-pointer">
                            {" "}
                            Title
                          </span>{" "}
                        </label>{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <label
                          className="inline-flex items-center block space-x-2"
                          htmlFor="categories"
                        >
                          {" "}
                          <input
                            name="categories"
                            type="checkbox"
                            className="select-none focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-200 rounded"
                          />{" "}
                          <span className="font-all label-checked:font-bold select-none block text-sm font-medium cursor-pointer">
                            {" "}
                            Current Price
                          </span>{" "}
                        </label>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  {/* jump_to_lot_number */}
                  {/* id */}
                  {/* Country */}
                  <div>
                    {" "}
                    <span className="font-all select-none block text-sm   font-semibold font-[DM Serif Text', serif;]">
                      Categories
                    </span>{" "}
                    <div
                      id="category"
                      className="h-64 p-2 mt-1 space-y-2 border border-gray-200 rounded-md overflow-y-auto lg:h-64"
                    >
                      {" "}
                      <template x-for="option in category_options" />{" "}
                      <div>
                        {" "}
                        <label
                          className="inline-flex items-center block space-x-2"
                          htmlFor="categories-33"
                        >
                          {" "}
                          <input
                            name="categories"
                            type="checkbox"
                            className="select-none focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-200 rounded"
                            htmlFor="categories-33"
                            id="categories-33"
                          />{" "}
                          <span className="font-all label-checked:font-bold select-none block text-sm font-medium cursor-pointer">
                            {" "}
                            Greek
                          </span>{" "}
                        </label>{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <label
                          className="inline-flex items-center block space-x-2"
                          htmlFor="categories-34"
                        >
                          {" "}
                          <input
                            name="categories"
                            type="checkbox"
                            className="select-none focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-200 rounded"
                          />{" "}
                          <span className="font-all label-checked:font-bold select-none block text-sm font-medium cursor-pointer">
                            {" "}
                             Roman
                          </span>{" "}
                        </label>{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <label
                          x-bind:for="'categories-' + option.id"
                          className="inline-flex items-center block space-x-2"
                          htmlFor="categories-"
                        >
                          {" "}
                          <input
                            name="categories"
                            type="checkbox"
                            className="select-none focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-200 rounded"
                            htmlFor="categories-"
                            defaultValue={25}
                            id="categories-"
                          />{" "}
                          <span
                            x-text="option.category"
                            className="font-all label-checked:font-bold select-none block text-sm font-medium cursor-pointer"
                          >
                            Roman Republic
                          </span>{" "}
                        </label>{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <label
                          x-bind:for="'categories-' + option.id"
                          className="font-all inline-flex items-center block space-x-2"
                          htmlFor="categories-37"
                        >
                          {" "}
                          <input
                            name="categories"
                            type="checkbox"
                            className="font-all select-none focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-200 rounded"
                            defaultValue={37}
                            id="categories-37"
                          />{" "}
                          <span
                            x-text="option.category"
                            className="font-all label-checked:font-bold select-none block text-sm font-medium cursor-pointer"
                          >
                            Roman Imperial
                          </span>{" "}
                        </label>{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <label
                          x-bind:for="'categories-' + option.id"
                          className="font-all inline-flex items-center block space-x-2"
                          htmlFor="categories-38"
                        >
                          {" "}
                          <input
                            name="categories"
                            type="checkbox"
                            className="select-none focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-200 rounded"
                            defaultValue={38}
                            id="categories-38"
                          />{" "}
                          <span
                            x-text="option.category"
                            className="label-checked:font-bold select-none block text-sm font-medium cursor-pointerfont-all "
                          >
                            {" "}
                            Roman Provincial
                          </span>{" "}
                        </label>{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <label
                          className="inline-flex items-center block space-x-2"
                          htmlFor="categories-33"
                        >
                          {" "}
                          <input
                            name="categories"
                            type="checkbox"
                            className="select-none focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-200 rounded"
                            htmlFor="categories-33"
                            id="categories-33"
                          />{" "}
                          <span className="font-all label-checked:font-bold select-none block text-sm font-medium cursor-pointer">
                            {" "}
                            Newly listed
                          </span>{" "}
                        </label>{" "}
                      </div>

                      <div>
                        {" "}
                        <label
                          className="inline-flex items-center block space-x-2"
                          htmlFor="categories-33"
                        >
                          {" "}
                          <input
                            name="categories"
                            type="checkbox"
                            className="select-none focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-200 rounded"
                            htmlFor="categories-33"
                            id="categories-33"
                          />{" "}
                          <span className="font-all label-checked:font-bold select-none block text-sm font-medium cursor-pointer">
                            {" "}
                            Ending soon
                          </span>{" "}
                        </label>{" "}
                      </div>
                      <div>
                        {" "}
                        <label
                          x-bind:for="'categories-' + option.id"
                          className="inline-flex items-center block space-x-2"
                          htmlFor="categories-123"
                        >
                          {" "}
                          <input
                            name="categories"
                            type="checkbox"
                            className="font-all select-none focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-200 rounded"
                            defaultValue={123}
                            id="categories-123"
                          />{" "}
                          <span
                            x-text="option.category"
                            className="label-checked:font-bold select-none block text-sm font-medium cursor-pointerfont-all "
                          >
                            {" "}
                            Byzantine
                          </span>{" "}
                        </label>{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <label
                          x-bind:for="'categories-' + option.id"
                          className="inline-flex items-center block space-x-2"
                          htmlFor="categories-122"
                        >
                          {" "}
                          <input
                            name="categories"
                            type="checkbox"
                            className="select-none focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-200 rounded"
                          />{" "}
                          <span className="label-checked:font-bold select-none block text-sm font-medium cursor-pointerfont-all ">
                            {" "}
                            Medieval & Islamic
                          </span>{" "}
                        </label>{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <label
                          className="inline-flex items-center block space-x-2"
                          htmlFor="categories-129"
                        >
                          {" "}
                          <input
                            type="checkbox"
                            className="select-none focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-200 rounded"
                          />{" "}
                          <span className="label-checked:font-bold select-none block text-sm font-medium cursor-pointerfont-all ">
                            {" "}
                            Antiquities
                          </span>{" "}
                        </label>{" "}
                      </div>
{/*  */}
<div>
                        {" "}
                        <label
                          className="inline-flex items-center block space-x-2"
                          htmlFor="categories-129"
                        >
                          {" "}
                          <input
                            type="checkbox"
                            className="select-none focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-200 rounded"
                          />{" "}
                          <span className="label-checked:font-bold select-none block text-sm font-medium cursor-pointer">
                            {" "}
                           Lots
                          </span>{" "}
                        </label>{" "}
                      </div>

                      <div>
                        {" "}
                        <label
                          className="inline-flex items-center block space-x-2"
                          htmlFor="categories-33"
                        >
                          {" "}
                          <input
                            name="categories"
                            type="checkbox"
                            className="select-none focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-200 rounded"
                            htmlFor="categories-33"
                            id="categories-33"
                          />{" "}
                          <span className="font-all label-checked:font-bold select-none block text-sm font-medium cursor-pointer">
                            {" "}
                            Newly listed
                          </span>{" "}
                        </label>{" "}
                      </div>

                      <div>
                        {" "}
                        <label
                          className="inline-flex items-center block space-x-2"
                          htmlFor="categories-33"
                        >
                          {" "}
                          <input
                            name="categories"
                            type="checkbox"
                            className="select-none focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-200 rounded"
                            htmlFor="categories-33"
                            id="categories-33"
                          />{" "}
                          <span className="font-all label-checked:font-bold select-none block text-sm font-medium cursor-pointer">
                            {" "}
                            Ending soon
                          </span>{" "}
                        </label>{" "}
                      </div>
                    </div>{" "}
                  </div>
                  {/* Categories */}
                  <div className="flex flex-col">
                    <p className="cursor-pointer p-[3px]  font-all">Byzantine</p>
                    <hr className="border-1" />
                    <p className="mt-1 cursor-pointer p-[3px]  font-all">Medieval</p>
                    <hr className="border-1" />

                    <p className="mt-1 cursor-pointer p-[3px]  font-all">Islamic</p>
                    <hr className="border-1" />

                    <p className="mt-1 cursor-pointer p-[3px]  font-all">Antiquities</p>
                    <hr className="border-1" />

                    <p className="mt-1 cursor-pointer p-[3px]  font-all">Lots</p>
                    <hr className="border-1" />

                    <Link to="/archive">
                      {" "}
                      <p className="   font-all cursor-pointer relative top-2 flex flex-row align-middle gap-5 cursor-pointer ">
                        view more option{" "}
                        <span>
                          {" "}
                          <FaLongArrowAltRight className="relative top-1" />
                        </span>
                      </p>
                    </Link>
                  </div>
                </form>
        </div>
      </section>
    </>
  );
};
