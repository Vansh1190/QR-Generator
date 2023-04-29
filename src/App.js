import React from "react";
// import { useState } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css"
// import Loading from "./Loading";
import Home from "./components/home";
import Qrpage from "./components/Qrpage";

export default function App() { 

  return (
    <>

    <BrowserRouter>

   {/* <Home/> */}
    
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/GenerateQr/*" element={<Qrpage/>}></Route>

      </Routes> 
    </BrowserRouter>
    </>
  )
}