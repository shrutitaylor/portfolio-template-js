import React from "react";
import Home from "./components/Home";
import { Carousel } from "./components/Carousel";
import SplashCursor from "./blocks/Animations/SplashCursor/SplashCursor";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";


export default function App() {
  return (
    <div className="flex flex-col gap-4">
     {/* <SplashCursor /> */}
      <Navbar />
      <Home />
      <Footer/>
      
    </div>
  );  
}
