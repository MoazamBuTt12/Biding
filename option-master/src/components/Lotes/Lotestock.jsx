import React, { useState } from "react";

import { Sidebarfilter } from "./Sidebarfilter";
import { Pagination } from "./Pagination";
import { LotsProduct } from "./LotsProduct";

export const Lotestock = () => {
  return (
    <>
      <section className="py-10 mx-auto w-[80%]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
          {/* Left Column: Filters */}
          {/* filters object here  */}
          <Sidebarfilter />
          {/* filter object end  */}
          {/* Right Column: Objects */}
          <section className="col-span-12 lg:col-span-9">
            {/* Results */}
            {/* top pagination object  */}
            <template x-if="objects.length" />
            <div className="space-y-4">
              {/* Pagination object here */}
              <Pagination />
              {/* pagination object ended  */}

              {/* lots objects below  */}
              {/* List of Lots */}
              {/* lots objects here  */}
              <LotsProduct />
              {/* lot object ended */}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
