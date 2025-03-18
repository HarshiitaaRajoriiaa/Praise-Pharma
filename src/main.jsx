import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import React from "react";
import Layout from "./Layout";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Contact from "./Components/Contact";
import Dealers from "./Components/Dealers";
import About from "./Components/About";
import Acne from "./Components/Products/Acne";
import Fungal from "./Components/Products/Fungal";
import Emollient from "./Components/Products/Emollient";
import Hair from "./Components/Products/Hair";
import Hansen from "./Components/Products/Hansen";
import WhiteOint from "./Components/Products/WhiteOint";
import Anti from "./Components/Products/Anti";
import Nerve from "./Components/Products/Nerve";
import Vitiligo from "./Components/Products/Vitiligo";
import Muscle from "./Components/Products/Muscle";
import Hydrating from "./Components/Products/Hydrating";
import PotentSteriods from "./Components/Products/PotentSteriods";
import Heel from "./Components/Products/Heel";
import Sunscreen from "./Components/Products/Sunscreen";
import Skinwhite from "./Components/Products/Skinwhite";
import Protective from "./Components/Products/Protective";
import Oral from "./Components/Products/Oral";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path='products/anti-acne' element={<Acne/>}/>
      <Route path='products/hansens-diseases' element={<Hansen/>}/>
      <Route path='products/skin-whitening' element={<Skinwhite/>}/>
      <Route path='products/anti-fungal' element={<Fungal/>}/>
      <Route path='products/emollient' element={<Emollient/>}/>
      <Route path='products/hair-care' element={<Hair/>}/>
      <Route path='products/protective-cream' element={<Protective/>}/>
      <Route path='products/sunblock' element={<Sunscreen/>}/>
      <Route path='products/Hydratings-diseases' element={<Hansen/>}/>
      <Route path='products/heel-management' element={<Heel/>}/>
      <Route path='products/whitfield' element={<WhiteOint/>}/>
      <Route path='products/oral-steroids' element={<Oral/>}/>
      <Route path='products/oral-antibiotic' element={<Anti/>}/>
      <Route path='products/muscle-pain' element={<Muscle/>}/>
      <Route path='products/nerve-pain' element={<Nerve/>}/>
      <Route path='products/vitiligo' element={<Vitiligo/>}/>
      <Route path='products/hydrating' element={<Hydrating/>}/>
      <Route path='products/steroid' element={<PotentSteriods/>}/> 
      <Route path="contact" element={<Contact />} />
      <Route path="dealers" element={<Dealers />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
