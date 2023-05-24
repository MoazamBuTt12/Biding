import { useState } from "react";

import Footers from "./components/Footers";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Archives } from "./components/Archives";
import { Lotpage } from "./components/Lotpage";
import ProductPage from "./components/Lotes/Productpage";

// import {Navbars}  from "./components/Header"
import { Cartpage } from "./components/Cart/Cartpage";
import Header from "./components/Header";
import { Accountpage } from "./components/Accountpage";
import { Yourcart } from "./components/Cart/Yourcart";
import Bidpage from "./components/Biddingpages/Bidpage";
import { Accountbid } from "./components/Account/Accountbid";
import { Accountwatchlist } from "./components/Account/Accountwatchlist";
import { Invoicesaccount } from "./components/Account/Invoicesaccount";
import { Consigment } from "./components/Account/Consigment";
import { Profileaccount } from "./components/Account/Profileaccount";
import { Approvalaccount } from "./components/Account/Approvalaccount";
import { Loginform } from "./components/Forms/Loginform";
import { Registerform } from "./components/Forms/Registerform";
import { Followingnewlist } from "./components/Home/Followingnewlist";
import { Endinglotpage } from "./components/Home/Endinglotpage";
import { Newlistingpage } from "./components/Home/Newlistingpage";
import Example from "./components/Faqpage/Example";



const oneWeekFromNow = new Date();
oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archives />} />
          <Route path="/lots" element={<Lotpage />} />
          <Route path="/Productpage" element={<ProductPage/>} />
        <Route path="/faq" element={<Example/>}  />
          <Route path="/cartpage" element={<Cartpage />} />
          <Route path="/account" element={<Accountbid />} />
          <Route path="/mycart" element={<Yourcart />} />
          <Route path="/Bidpage" element={<Bidpage />} />
          <Route path="/accountbid" element={<Accountbid />} />
          <Route path="/accountinvoices" element={<Invoicesaccount />} />
          <Route path="/consigmentsaccount" element={<Consigment />} />
          <Route path="/accountwatchlist" element={<Accountwatchlist />} />
          <Route path="/Profileaccount" element={<Profileaccount />} />
          <Route path="/accountapproval" element={<Approvalaccount />} />
          <Route path="/login" element={<Loginform />} />
          <Route path="/regestration" element={<Registerform/>}/>
          <Route path="/wishlist" element={<Accountwatchlist/>}/>
          <Route  path="/newlisting" element={<Followingnewlist/>}/>
          <Route path="/lotsendingsoon" element={<Endinglotpage/>}/>
          <Route path="/newlistingpage" element={<Newlistingpage/>}/>
        </Routes>

        <Footers />
      </BrowserRouter>
    </>
  );
}

export default App;
