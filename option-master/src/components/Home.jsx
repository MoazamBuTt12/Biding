import React from 'react'
import Topslider from "./Home/Topslider";
import { Upcommingauctions } from "./Home/Upcommingauctions";
import Browselots from "./Home/Browselots.jsx";
import { Followinglots } from "./Home/Followinglots";
import { Endinglots } from './Home/Endinglots';
import { Newlisting } from './Home/Newlisting';
export const Home = () => {
  return (
 <>
   <Topslider />
  <Upcommingauctions />
  <Browselots />
  <Followinglots/>
 <Endinglots/>
 <Newlisting/>
 </>
  )
}
