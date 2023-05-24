import React, { useState } from "react";

export const Paymentform = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardHolderChange = (e) => {
    setCardHolder(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <>
    <hr className="border" />
    <h1 className=" cartstyle sm:relative w-[100%]  sm:text-3xl top:9px  text-4xl font-[initial] mt-[30px] tracking-tight text-gray-900 md:ml-[12px] sm:ml-[20px] mb-[3rem]  md:text-[3rem]   lg:text-[3rem]  lg:mt-4rem  md:mt-4rem ">Payment</h1>
      
      <form
        onSubmit={handleSubmit}
        className="   md:w-[65%]   lg:w-[65%]  mx-auto my-4 p-6  rounded-md "
      >
        <div className="flex justify-between mb-4">
          <div className="flex items-center bg-slate-100 md:p-[20px] rounded-md">
            <input
              type="radio"
              id="invoice"
              name="paymentMethod"
              value="invoice"
              checked={paymentMethod === "invoice"}
              onChange={handlePaymentMethodChange}
              className="mr-2"
            />
            <label htmlFor="invoice">Invoice Creation</label>
          </div>
          <div className="flex items-center bg-slate-100 md:p-[20px] rounded-md">
            <input
              type="radio"
              id="paypal"
              name="paymentMethod"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={handlePaymentMethodChange}
              className="mr-2"
            />
            <label htmlFor="paypal">Paypal (+4.5% on sale price)</label>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="cardNumber" className="block mb-1">
            Enter Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            className="border border-gray-400 p-2 rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="cardHolder" className="block mb-1">
            Cardholder
          </label>
          <input
            type="text"
            id="cardHolder"
            name="cardHolder"
            value={cardHolder}
            onChange={handleCardHolderChange}
            className="border border-gray-400 p-2 rounded-md w-full"
          />
        </div>

        <div className="flex justify-between">
          <div className="w-1/2">
            <label htmlFor="expiryDate" className="block mb-1">
              Expiry Date
            </label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              className="border border-gray-400 p-2 rounded-md w-full"
            />
          </div>
          <div className="w-1/2 pl-4">
            <label htmlFor="cvv" className="block mb-1">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              className="border border-gray-400 p-2 rounded-md w-full"
            />
          </div>
        </div>

      </form>
      <div className="flex justify-center">
        <div></div>
     
      <div>
      <button
          type="submit"
          className="   relative  top-[-22px]   mb:25px mx-auto   mt-4 px-4 py-2 bg-[#2e0d23] text-white rounded-md hover:bg-[#2e0d23d6] transition duration-200"
        >
         Procceed to payment
        </button>
        </div>
        </div>
    </>
  );
};
