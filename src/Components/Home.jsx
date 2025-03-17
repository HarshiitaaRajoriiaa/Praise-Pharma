import React from "react";
import Landing from "./Landing";
import Card from "./Card";
import HAbout from "./Home/HAbout";
import HProduct from "./Home/HProduct";
import HDealers from "./Home/HDealers";

export default function Home() {
  return (
  <>
    <Landing/>
    {/* <Card/> */}
    <HAbout/>
    <HProduct/>
    <HDealers/>
  </>
  )
}
