import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { FaHeart } from "react-icons/fa";

import "react-toastify/dist/ReactToastify.css";
// import "../CssFolder/custom.css";
import { Link } from "react-router-dom";
import { Otherlot } from "../Lotes/Otherlot";
import AuthContext from "../../context/AuthContext";
// Link
const Bidpage = () => {
  const [countdown, setCountdown] = useState(null);
  
  const [jumpForLot, setJumpForLot] = useState("");
  const [search, setSearch] = useState("");
  const { loggIn } = useContext(AuthContext);
  const [inval, setInval] = useState([]);

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

  const [images, setImages] = useState({
    img1: "https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg",
    img2: "https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg",
    img3: "https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg",
    img4: "https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg",
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  const [bidd, setBidd] = useState();

  const [amount, setAmount] = useState(1);
  const [show, setShow] = useState(true);
  // console.log(show)

  const [buttonText, setButtonText] = useState("Add to Cart");
  const thandleClick = () => {
    setButtonText("Added to Cart");
    toast.success("Item successfully added to cart!", {
      // position: "top-left",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };
  useEffect(() => {
    const endDate = new Date("2023-06-01T00:00:00");
    const intervalId = setInterval(() => {
      const now = new Date();
      const diff = endDate - now;

      if (diff < 0) {
        clearInterval(intervalId);
        setCountdown("Expired");
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // useEffect(()=> {
  //   handleForm();
  // },[])

  

  const handleForm = async (e) => {
    e.preventDefault();
    console.log(bidd)
   try{
    const bidData = { bidd };
    console.log(bidData)
    await axios.post("http://localhost:8000/add", bidData)
   }
   catch(error){
    console.log('Error in Frontend')
   }
} 
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

      <h1 className=" cartstyle sm:relative  sm:text-3xl top:9px  text-4xl font-[initial] mt-[30px] tracking-tight text-gray-900 md:ml-[12px] sm:ml-[20px] mb-[3rem]  md:text-[3rem]   lg:text-[3rem]  lg:mt-4rem  md:mt-4rem ">
        Pre Biding
      </h1>
      <div className="parent flex md:flex-row parent-col">
        <div className="child-1">
          <div className="flex flex-col justify-start lg:flex-col gap-16  md:mb-[170px]">
            <div className="flex flex-col gap-8 lg:w-2/4 mx-auto m-auto ">
              <img
                src={activeImg}
                alt=""
                className="w-full lg:custom-img22  h-[215px] lg:p-[auto] aspect-square object-cover rounded-xl"
              />
              <div className="flex flex-row justify-bcenter h-24">
                <img
                  src={images.img1}
                  alt=""
                  className="w-[auto] h-24 rounded-md cursor-pointer mr-3"
                  onClick={() => setActiveImage(images.img1)}
                />
                <img
                  src={images.img2}
                  alt=""
                  className="w-[auto] h-24 rounded-md cursor-pointer mr-3"
                  onClick={() => setActiveImage(images.img2)}
                />
                {/* <img src={images.img3} alt="" className='w-[auto] h-24 rounded-md cursor-pointer mr-3' onClick={() => setActiveImage(images.img3)}/> */}
                {/* <img src={images.img4} alt="" className='w-[auto] h-24 rounded-md cursor-pointer mr-3' onClick={() => setActiveImage(images.img4)}/> */}
              </div>
            </div>
            <hr className="border" />
            <div className="flex flex-row  items-center gap-4 ml-12  lg:mt-[-58px]	">
              <div className="c-1">
                <FaHeart />
              </div>
              <div className="c-2">
                <p className="text-black "> Add to wishlist</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:w-2/4 align-middle relative md:left-[50px] custom-relative">
              <div>
                <h1 className="">Description </h1>
              </div>
              {/* <hr /> */}
              <p className="text-gray-700">
                i, sostenitivo, è pensato per dare il massimo lungo il tuo
                percorso preferito e fare ritorno a casa carico di energia, in
                attesa della prossima corsa.
              </p>
              <h1 className="font-[initial] text-3xl font-semibold  pb-5 mt-3">
                Ask about this Lot
              </h1>
              <p style={{ opacity: "0.8" }}>
                contact the auction house to leave text here{" "}
              </p>
              <div style={{ position: "relative" }}>
                <textarea
                  className="rounded"
                  name=""
                  id=""
                  cols="90"
                  rows="5"
                  style={{ marginBottom: "30px" }}
                ></textarea>
                <button
                  style={{
                    position: "absolute",
                    bottom: "39px",
                    right: "-302px",
                    padding: "5px 10px",
                    backgroundColor: "#2e0d23",
                    color: "white",
                    borderRadius: "5px",
                  }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" child-col child-2  md:h-[54vh] rounded-3xl drop-shadow relative right-5 child-form ">
          <div
            id="summary"
            className="w- px-8 py-10 md:mt-[-70px]  lg:mt-[-70px]  lg:ml-5  bg-slate-100 "
          >
            <div className="flex flex-row lg:items-center lg:justify-center">
              <h1 className="font-[initial] text-3xl font-semibold  pb-5 realtve lg:top-[-28px] md:mb-5">
                Bid Now
              </h1>
              <p className="absolute left-[16rem]  top-[63px] lg:top-[11px] lg:mb-[-23px] lg:left-[19rem] font-[initial] border-t-2 border-dashed   border-gray-500  text-center lg:w-[150px]">
      time left for bid
    </p>
              {/* <hr  classNam/'e="border border-gray-500 border-dashed absolute"/> */}

              <div className="hidden lg:block">
                <hr className="border border-gray-500 border-dashed bid-border" />
                {countdown ? (
                  <div className="grid grid-cols-4   lg:w-[10rem] gap-[1rem] relative lg:bottom-[18px] left-[58px] ">
                    {countdown.split(" ").map((item, index) => (
                      <div
                        key={index}
                        className="  text-center flex items-center"
                      >
                        <h4 className="lg:text-[19px] font-[initial] font-semibold flex">
                          {" "}
                          {item.slice(0, -1)}{" "}
                          <span className="relative left-1">
                            {item.slice(-1)}
                          </span>
                        </h4>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>Loading countdown...</p>
                )}
              </div>
            </div>

            <div
              className="flex flex-col justify-center"
              style={{ alignItems: "center" }}
            >
              <h3 className="text-black text-3xl ">40 Euro</h3>

              <div>
                <button
                  className="bg-[#2e0d23] text-white font-semibold p-[6px] rounded h-full relative lg:w-[385px] "
                  style={{ marginleft: "81px" }}
                  onClick={thandleClick}
                >
                  {buttonText}
                </button>
                <ToastContainer />
              </div>
            </div>
            <hr className="border-2 mt-5" />
            <h1 className="font-[initial] text-3xl font-semibold  pb-5">
              Bidding
            </h1>
            <div className="flex flex-col gap-[1.75rem] ">
              {/*  */}
              <div className="box flex  bg-white  flex-row p-[12px] justify-center md:gap-[11rem] gap-a">
                <span className="font-[initial] text-2xl">Current Bid:</span>
                <span className="font-[initial] text-2xl relative left-3">
                  700euro
                </span>
              </div>
              <div className="box  bg-white flex flex-row p-[12px] justify-center md:gap-[10rem] gap-a">
                <span className="font-[initial] text-2xl">starting price:</span>
                <span className="font-[initial] text-2xl relative left-2">
                  700euro
                </span>
              </div>
              <hr className="border-2" />
              <h1 className="font-[initial] text-3xl font-semibold  pb-5 font-response-sm">
                Place a Bid
              </h1>
            </div>

            { loggIn === false ? <Link to="/login">
              <button
                className=" bg-[#2e0d23] text-white font-semibold p-[6px] rounded h-full relative lg:w-[385px]"
                style={{ marginleft: "81px" }}
              >
                Login or Singup
              </button>
            </Link> : <>
              { show ? 
              <form  style={{marginTop: "1rem"}} onSubmit={handleForm}>
                <input type="text" placeholder="Enter your bid" value={bidd} onChange={(e) => setBidd(e.target.value)} 
                style={{width: '72%'}}/>
                <Link>
                <button onClick={()=>setShow(false)} type="submit" style={{width: '6rem', height:'2.7rem', border: '1px solid gray', marginLeft: '.5rem'}}>Bid</button>
                </Link>
              </form> : <>
                <div className="subdata">
                  You placed a bid of { bidd } 
                </div>
              </>  }
            </> }

                     
            <p className="mt-4" style={{ color: "green" }}>
              how to bid ?
            </p>

            <hr className="border-2" />
          </div>
        </div>
      </div>
      {/* other lots  card */}

      <Otherlot />
    </>
  );
};

export default Bidpage;
