import React from "react";
import { Link } from "react-router-dom";
// Link
export const LotsProduct = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
        <template x-for="object in objects" />
        <div
          className="group bg-white dark:bg-night-900 shadow rounded space-y-6 md:flex flex-col"
          id={1}
        >
          {/* Carousel */}
          <div className="bg-white py-3 rounded-t">
            <div className="h-full keen-slider-wrapper relative">
              <div className="h-full keen-slider flex overflow-hidden select-none">
                {/* Images */}
                <template />
                <template />
                <div
                  className="keen-slider__slide relative h-52 md:min-h-full w-full overflow-hidden flex items-center justify-center rounded-t"
                  style={{
                    minWidth: "calc(100% - 0px)",
                    maxWidth: "calc(100% - 0px)",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  <img
                    decoding="async"
                    loading="lazy"
                    className="h-full object-contain"
                    src="https://primary.jwwb.nl/public/u/x/q/temp-fpjrchemtgknipuwutwj/4s4a1f/95.jpg?enable-io=true&enable=upscale&fit=bounds&width=960&height=480"
                    alt="1 - Czechoslovakia 1 Dukas 1923 NGC MS 63"
                  />
                </div>
              </div>
              {/* Buttons */}
            </div>
          </div>
          {/* Content */}
          <div className="flex-grow flex flex-col  pb-4 px-4 space-y-3">
            {/* Lot Description */}
            <div className="space-y-2">
              {/* Lot Meta */}
              <div className="flex items-center justify-between space-x-2">
                {/* Edit */}
                <template x-if="object.context.is_editable" />
              </div>
              {/* Lot Information */}
              <div>
                <div className="flex items-center">
                  <a
                    x-bind:href="'/lot/' + object.id"
                    x-text="object.title"
                    target="_blank"
                    className="text-base font-bold text-gray-700 dark:text-white group-hover:text-yellow-500 transition ease-in-out duration-300"
                    href="/lot/272691"
                  >
                    Czechoslovakia 1 Dukas 1923 NGC MS 63
                  </a>
                  <template x-if="object.video" />
                </div>
                <article
                  x-html="object.description"
                  className="text-sm mt-1 line-clamp-3"
                >
                  KM# 8, Fr# 2, N# 19852; Gold (.986) 3.49 g.; Mintage: 61861
                  pcs.; UNC
                </article>
              </div>
            </div>
            {/* Lot Owner/Customer  */}
            {/* Pre-Bidding Information */}
            <template />
            {/* Sold Information */}
            <template x-if="(object.status === 'sold' || object.status === 'unsold')" />
            <div className="w-full mx-auto border-t-2">
              <div className="flex flex-row justify-center gap-4 mt-4">
                <Link to="/Bidpage">
                  {" "}
                  <button className="border-slate-500 p-2  rounded-full shadow-x  text-black bg-white">
                    Current Bid{" "}
                  </button>
                </Link>
                <Link to="/Productpage">
                  {" "}
                  <button className="border-slate-500 p-2 rounded-full shadow-x text-black bg-white">
                    Buy Now
                  </button>
                </Link>
              </div>
              <div class="flex flex-row ga-5  gap-[20px]  lg:gap-[50px] current-position lot-page-price-items">
                <span class="font-bold font-shadow-y">Current bid 20$</span>
                <span class="font-bold font-shadow-y lg:left-[-17px] bid-price-sm">
                  {" "}
                  Price 20$
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="group bg-white dark:bg-night-900 shadow rounded space-y-6 md:flex flex-col"
          id={1}
        >
          {/* Carousel */}
          <div className="bg-white py-3 rounded-t">
            <div className="h-full keen-slider-wrapper relative">
              <div className="h-full keen-slider flex overflow-hidden select-none">
                {/* Images */}
                <template />
                <template />
                <div
                  className="keen-slider__slide relative h-52 md:min-h-full w-full overflow-hidden flex items-center justify-center rounded-t"
                  style={{
                    minWidth: "calc(100% - 0px)",
                    maxWidth: "calc(100% - 0px)",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  <img
                    decoding="async"
                    loading="lazy"
                    className="h-full object-contain"
                    src="https://primary.jwwb.nl/public/u/x/q/temp-fpjrchemtgknipuwutwj/4s4a1f/95.jpg?enable-io=true&enable=upscale&fit=bounds&width=960&height=480"
                    alt="1 - Czechoslovakia 1 Dukat 1923 NGC MS 63"
                  />
                </div>
              </div>
              {/* Buttons */}
            </div>
          </div>
          {/* Content */}
          <div className="flex-grow flex flex-col  pb-4 px-4 space-y-3">
            {/* Lot Description */}
            <div className="space-y-2">
              {/* Lot Meta */}
              <div className="flex items-center justify-between space-x-2">
                {/* Edit */}
                <template x-if="object.context.is_editable" />
              </div>
              {/* Lot Information */}
              <div>
                <div className="flex items-center">
                  <a
                    x-bind:href="'/lot/' + object.id"
                    x-text="object.title"
                    target="_blank"
                    className="text-base font-bold text-gray-700 dark:text-white group-hover:text-yellow-500 transition ease-in-out duration-300"
                    href="/lot/272691"
                  >
                    Czechoslovakia 1 Dukat 1923 NGC MS 63
                  </a>
                  <template x-if="object.video" />
                </div>
                <article
                  x-html="object.description"
                  className="text-sm mt-1 line-clamp-3"
                >
                  KM# 8, Fr# 2, N# 19852; Gold (.986) 3.49 g.; Mintage: 61861
                  pcs.; UNC
                </article>
              </div>
            </div>
            {/* Lot Owner/Customer  */}
            {/* Pre-Bidding Information */}
            <template x-if="object.status === 'prebidding'" />
            {/* Sold Information */}
            <template x-if="(object.status === 'sold' || object.status === 'unsold')" />
            <div className="w-full mx-auto border-t-2">
              <div className="flex flex-row justify-center gap-4 mt-4">
                <Link to="/Bidpage">
                  {" "}
                  <button className="border-slate-500 p-2  rounded-full shadow-x  text-black bg-white">
                    Current Bid{" "}
                  </button>
                </Link>
                <Link to="/Productpage">
                  {" "}
                  <button className="border-slate-500 p-2 rounded-full shadow-x text-black bg-white">
                    Buy Now
                  </button>
                </Link>
              </div>
              <div class="flex flex-row ga-5  gap-[20px]  lg:gap-[50px] current-position lot-page-price-items"><span class="font-bold font-shadow-y">Current bid 20$</span><span class="font-bold font-shadow-y lg:left-[-17px] bid-price-sm"> Price 20$</span></div>

            </div>
          </div>
        </div>

        <div
          className="group bg-white dark:bg-night-900 shadow rounded space-y-6 md:flex flex-col"
          id={1}
        >
          {/* Carousel */}
          <div className="bg-white py-3 rounded-t">
            <div className="h-full keen-slider-wrapper relative">
              <div className="h-full keen-slider flex overflow-hidden select-none">
                {/* Images */}
                <template />
                <template />
                <div
                  className="keen-slider__slide relative h-52 md:min-h-full w-full overflow-hidden flex items-center justify-center rounded-t"
                  style={{
                    minWidth: "calc(100% - 0px)",
                    maxWidth: "calc(100% - 0px)",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  <img
                    decoding="async"
                    loading="lazy"
                    className="h-full object-contain"
                    src="https://primary.jwwb.nl/public/u/x/q/temp-fpjrchemtgknipuwutwj/4s4a1f/95.jpg?enable-io=true&enable=upscale&fit=bounds&width=960&height=480"
                    alt="1 - Czechoslovakia 1 Dukat 1923 NGC MS 63"
                  />
                </div>
              </div>
              {/* Buttons */}
            </div>
          </div>
          {/* Content */}
          <div className="flex-grow flex flex-col  pb-4 px-4 space-y-3">
            {/* Lot Description */}
            <div className="space-y-2">
              {/* Lot Meta */}
              <div className="flex items-center justify-between space-x-2">
                {/* Edit */}
                <template x-if="object.context.is_editable" />
              </div>
              {/* Lot Information */}
              <div>
                <div className="flex items-center">
                  <a
                    x-bind:href="'/lot/' + object.id"
                    x-text="object.title"
                    target="_blank"
                    className="text-base font-bold text-gray-700 dark:text-white group-hover:text-yellow-500 transition ease-in-out duration-300"
                    href="/lot/272691"
                  >
                    Czechoslovakia 1 Dukat 1923 NGC MS 63
                  </a>
                  <template x-if="object.video" />
                </div>
                <article
                  x-html="object.description"
                  className="text-sm mt-1 line-clamp-3"
                >
                  KM# 8, Fr# 2, N# 19852; Gold (.986) 3.49 g.; Mintage: 61861
                  pcs.; UNC
                </article>
              </div>
            </div>
            {/* Lot Owner/Customer  */}
            {/* Pre-Bidding Information */}
            <template x-if="object.status === 'prebidding'" />
            {/* Sold Information */}
            <template x-if="(object.status === 'sold' || object.status === 'unsold')" />
            <div className="w-full mx-auto border-t-2">
              <div className="flex flex-row justify-center gap-4 mt-4">
                <Link to="/Bidpage">
                  {" "}
                  <button className="border-slate-500 p-2  rounded-full shadow-x  text-black bg-white">
                    Current Bid{" "}
                  </button>
                </Link>
                <Link to="/Productpage">
                  {" "}
                  <button className="border-slate-500 p-2 rounded-full shadow-x text-black bg-white">
                    Buy Now
                  </button>
                </Link>
              </div>
              <div class="flex flex-row ga-5  gap-[20px]  lg:gap-[50px] current-position lot-page-price-items"><span class="font-bold font-shadow-y">Current bid 20$</span><span class="font-bold font-shadow-y lg:left-[-17px] bid-price-sm"> Price 20$</span></div>

            </div>
          </div>
        </div>

        <div
          className="group bg-white dark:bg-night-900 shadow rounded space-y-6 md:flex flex-col"
          id={1}
        >
          {/* Carousel */}
          <div className="bg-white py-3 rounded-t">
            <div className="h-full keen-slider-wrapper relative">
              <div className="h-full keen-slider flex overflow-hidden select-none">
                {/* Images */}
                <template />
                <template />
                <div
                  className="keen-slider__slide relative h-52 md:min-h-full w-full overflow-hidden flex items-center justify-center rounded-t"
                  style={{
                    minWidth: "calc(100% - 0px)",
                    maxWidth: "calc(100% - 0px)",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  <img
                    decoding="async"
                    loading="lazy"
                    className="h-full object-contain"
                    src="https://primary.jwwb.nl/public/u/x/q/temp-fpjrchemtgknipuwutwj/4s4a1f/95.jpg?enable-io=true&enable=upscale&fit=bounds&width=960&height=480"
                    alt="1 - Czechoslovakia 1 Dukat 1923 NGC MS 63"
                  />
                </div>
              </div>
              {/* Buttons */}
            </div>
          </div>
          {/* Content */}
          <div className="flex-grow flex flex-col  pb-4 px-4 space-y-3">
            {/* Lot Description */}
            <div className="space-y-2">
              {/* Lot Meta */}
              <div className="flex items-center justify-between space-x-2">
                {/* Edit */}
                <template x-if="object.context.is_editable" />
              </div>
              {/* Lot Information */}
              <div>
                <div className="flex items-center">
                  <a
                    x-bind:href="'/lot/' + object.id"
                    x-text="object.title"
                    target="_blank"
                    className="text-base font-bold text-gray-700 dark:text-white group-hover:text-yellow-500 transition ease-in-out duration-300"
                    href="/lot/272691"
                  >
                    Czechoslovakia 1 Dukat 1923 NGC MS 63
                  </a>
                  <template x-if="object.video" />
                </div>
                <article
                  x-html="object.description"
                  className="text-sm mt-1 line-clamp-3"
                >
                  KM# 8, Fr# 2, N# 19852; Gold (.986) 3.49 g.; Mintage: 61861
                  pcs.; UNC
                </article>
              </div>
            </div>
            {/* Lot Owner/Customer  */}
            {/* Pre-Bidding Information */}
            <template x-if="object.status === 'prebidding'" />
            {/* Sold Information */}
            <template x-if="(object.status === 'sold' || object.status === 'unsold')" />
            <div className="w-full mx-auto border-t-2">
              <div className="flex flex-row justify-center gap-4 mt-4">
                <Link to="/Bidpage">
                  {" "}
                  <button className="border-slate-500 p-2  rounded-full shadow-x  text-black bg-white">
                    Current Bid{" "}
                  </button>
                </Link>
                <Link to="/Productpage">
                  {" "}
                  <button className="border-slate-500 p-2 rounded-full shadow-x text-black bg-white">
                    Buy Now
                  </button>
                </Link>
              </div>
              <div class="flex flex-row ga-5  gap-[20px]  lg:gap-[50px] current-position lot-page-price-items"><span class="font-bold font-shadow-y">Current bid 20$</span><span class="font-bold font-shadow-y lg:left-[-17px] bid-price-sm"> Price 20$</span></div>

            </div>
          </div>
        </div>

        <div
          className="group bg-white dark:bg-night-900 shadow rounded space-y-6 md:flex flex-col"
          id={1}
        >
          {/* Carousel */}
          <div className="bg-white py-3 rounded-t">
            <div className="h-full keen-slider-wrapper relative">
              <div className="h-full keen-slider flex overflow-hidden select-none">
                {/* Images */}
                <template />
                <template />
                <div
                  className="keen-slider__slide relative h-52 md:min-h-full w-full overflow-hidden flex items-center justify-center rounded-t"
                  style={{
                    minWidth: "calc(100% - 0px)",
                    maxWidth: "calc(100% - 0px)",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  <img
                    decoding="async"
                    loading="lazy"
                    className="h-full object-contain"
                    src="https://primary.jwwb.nl/public/u/x/q/temp-fpjrchemtgknipuwutwj/4s4a1f/95.jpg?enable-io=true&enable=upscale&fit=bounds&width=960&height=480"
                    alt="1 - Czechoslovakia 1 Dukat 1923 NGC MS 63"
                  />
                </div>
              </div>
              {/* Buttons */}
            </div>
          </div>
          {/* Content */}
          <div className="flex-grow flex flex-col  pb-4 px-4 space-y-3">
            {/* Lot Description */}
            <div className="space-y-2">
              {/* Lot Meta */}
              <div className="flex items-center justify-between space-x-2">
                {/* Edit */}
                <template x-if="object.context.is_editable" />
              </div>
              {/* Lot Information */}
              <div>
                <div className="flex items-center">
                  <a
                    x-bind:href="'/lot/' + object.id"
                    x-text="object.title"
                    target="_blank"
                    className="text-base font-bold text-gray-700 dark:text-white group-hover:text-yellow-500 transition ease-in-out duration-300"
                    href="/lot/272691"
                  >
                    Czechoslovakia 1 Dukat 1923 NGC MS 63
                  </a>
                  <template x-if="object.video" />
                </div>
                <article
                  x-html="object.description"
                  className="text-sm mt-1 line-clamp-3"
                >
                  KM# 8, Fr# 2, N# 19852; Gold (.986) 3.49 g.; Mintage: 61861
                  pcs.; UNC
                </article>
              </div>
            </div>
            {/* Lot Owner/Customer  */}
            {/* Pre-Bidding Information */}
            <template x-if="object.status === 'prebidding'" />
            {/* Sold Information */}
            <template x-if="(object.status === 'sold' || object.status === 'unsold')" />
            <div className="w-full mx-auto border-t-2">
              <div className="flex flex-row justify-center gap-4 mt-4">
                <Link to="/Bidpage">
                  {" "}
                  <button className="border-slate-500 p-2  rounded-full shadow-x  text-black bg-white">
                    Current Bid{" "}
                  </button>
                </Link>

                <Link to="/Productpage">
                  {" "}
                  <button className="border-slate-500 p-2 rounded-full shadow-x text-black bg-white">
                    Buy Now
                  </button>
                </Link>
              </div>
              <div class="flex flex-row ga-5  gap-[20px]  lg:gap-[50px] current-position lot-page-price-items"><span class="font-bold font-shadow-y">Current bid 20$</span><span class="font-bold font-shadow-y lg:left-[-17px] bid-price-sm"> Price 20$</span></div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
