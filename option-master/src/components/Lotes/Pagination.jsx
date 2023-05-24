import React from 'react'

export const Pagination = () => {
  return (
    <>
    <nav className="flex items-center justify-end sm:justify-between py-3">
            <div className="hidden sm:block">
              <p className="select-none text-xs">
                Page{" "}
                <span
                  x-text="pagination.page + ' / ' + pagination.pages"
                  className="font-medium"
                >
                  1 /1
                </span>{" "}
                <span
                  x-text="'(' + pagination.total + ')'"
                  className="font-medium"
                >
                  (1)
                </span>
              </p>
            </div>
            {/* Layout */}
            <div className="flex justify-end space-x-3">
              {/* Grid Button */}
              <button
                type="button"
                className="hidden md:block relative inline-flex items-center px-4 py-2 text-sm font-medium bg-white dark:bg-night-900 border border-gray-200 dark:border-night-700 rounded-md hover:bg-gray-100 focus:outline-none text-gray-700 text-yellow-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>{" "}
              {/* List Button */}
              <button
                type="button"
                className="hidden md:block relative inline-flex items-center px-4 py-2 text-sm font-medium bg-white dark:bg-night-900 border border-gray-200 dark:border-night-700 rounded-md hover:bg-gray-100 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>{" "}
              {/* Display List */}
              <select
                id="display"
                className="block w-20 text-gray-700 dark:text-white bg-white dark:bg-night-900 border-gray-200 dark:border-night-700 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                x-model="filters.display"
                x-on:change="getObjects()"
              >
                <option value={4}>4</option>
                <option value={24}>24</option>
              
              
              </select>{" "}
              {/* Prev Page */}
              <template x-if="pagination.prev" />
              {/* Page Jump */}
              
              {/* Next Page */}
              <template x-if="pagination.next" />
              <button
                type="button"
                className="relative inline-flex items-center px-4 py-2 text-sm font-medium bg-white hover:bg-gray-100 dark:bg-night-900 dark:hover:bg-night-700 border border-gray-200 dark:border-night-700 rounded-md focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </nav>
    </>
  )
}
