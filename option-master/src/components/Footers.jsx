import React, { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
const Footers = () => {
 
    const [email, setEmail] = useState('');

    function handleEmailChange(event) {
      setEmail(event.target.value);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      // Handle form submission here
    }
  

  return (
    
<footer className="bg-[#2E0D23] shadow dark:bg-gray-900  ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/////" className="flex items-center mb-4 sm:mb-0">
                {/* <img src="" className="h-8 mr-3" alt="Flowbite Logo" /> */}
                <span className="self-center  text-[#b19676] text-2xl font-semibold whitespace-nowrap ">BUCEPHALUS NUMISMATIC
</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white  sm:mb-0">
                <li>
                    <a href="//////////////////////////////////////////" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="//////////////////////////////////////////" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="//////////////////////////////////////////" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="//////////////////////////////////////////" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        {/* <span className="block text-[10px] text-gray-500 sm:text-center dark:text-gray-400"><a href="https://flcom/" className="hover:underline"></a> subscribe for latest auction</span> */}
        <div className="flex items-center justify-center">
      <div className="relative w-[50%] mr-3">
        <label htmlFor="email" className="hidden block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Email address
        </label>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <HiOutlineMail className="hide-me w-4 h-4 text-gray-500 dark:text-gray-400 ml-[7px]"  /> 
        </div>
        <input
          id="email"
          className="footer-input form-input bg-[#b196762b] border-transparent   text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-200 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="email"
          type="email"
          placeholder=" Subscribe for latest auction  @Your email address..."
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <button
        className="px-5 py-3 text-sm font-medium text-center text-white bg-[#b19676] rounded-lg cursor-pointer  focus:ring-4 focus:ring-[beige]-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleSubmit}
      >
        Subscribe
      </button>
    </div>
    </div>



    
</footer>


  );
};

export default Footers;
