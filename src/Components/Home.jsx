import React from "react";
import Landing from "./Landing";
import HAbout from "./Home/HAbout";
import HProduct from "./Home/HProduct";
import HDealers from "./Home/HDealers";
import Whatapp from "./Whatapp";
import EmailButton from "./Email";

export default function Home() {
  return (
  <>
    <Whatapp/>
    <Landing/>
    <EmailButton/>
    {/* <Card/> */}
    <HAbout/>
    <HProduct/>
    <HDealers/>
  </>
  )
}
