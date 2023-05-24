import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import LogOutBtn from './Forms/LogOutBtn'

import "../css/headernav.css";
import {
  FaGripLines,
  FaTimes,
  FaShoppingCart,
  FaRegHeart,
} from "react-icons/fa";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const { loggIn } = useContext(AuthContext);
  console.log(loggIn)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setShowNav(width > 767);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <div className="container custom-container">
        <div className="logo-section">
          <Link to="/">
            {" "}
            <h1 className="logo font-all">Bucephalus numismatic</h1>
          </Link>

          <div className="">
            {showNav ? (
              <FaTimes
                className="lg:hidden text-white iconss"
                onClick={handleToggle}
              />
            ) : (
              <FaGripLines
                className="lg:hidden text-white iconss"
                onClick={handleToggle}
              />
            )}
          </div>
        </div>
        <div className={showNav ? "nav-bar show" : "nav-bar"} id="nav-bar">
        
          <ul>
            <Link to="/">
              <li className="li li-links font-all" onClick={handleToggle}>
                Home
              </li>
            </Link>
            <hr className="hr border" />
            <Link to="/archive">
              <li className="li li-links font-all" onClick={handleToggle}>
                Archives
              </li>
            </Link>
            <hr className="hr border" />
            <Link to="/lots">
              <li className="li li-links font-all" onClick={handleToggle}>
                Lots
              </li>
            </Link>
            <hr className="hr border" />
            <Link to="/faq">
              <li className="li li-links font-all" onClick={handleToggle}>
                Faq
              </li>
            </Link>
            {/* <hr className="hr border" />
            <Link to="/Cartpage">
              <li className="li li-links" onClick={handleToggle}>
                Cart
              </li>
            </Link> */}
            <hr className="hr border" />
            { loggIn === true && <Link to="/account">
              <li className="li li-links font-all" onClick={handleToggle}>
                MY Account
              </li>
            </Link>  }
          </ul>

          <div className="--rel relative  w-[50%]">

            <div className="flex flex-row justify-center gap-[17px]  " style={{alignItems:'center'}}>
             { loggIn === false && <Link to="/login"> <p className="text-white cursor-pointer font-all">Login</p></Link> }
             { loggIn === true && <LogOutBtn/>  } 
             <Link to="/wishlist"> <FaRegHeart className="text-white cursor-pointer"/></Link>
             <Link to="/mycart"><FaShoppingCart className="text-white cursor-pointer"/></Link> 

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
