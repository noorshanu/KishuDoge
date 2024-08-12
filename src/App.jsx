import  { useState, useEffect } from "react";
import AboutUs from "./components/AboutUs";
import BorderSec from "./components/BorderSec";

import DexMark from "./components/DexMark";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowToBuy from "./components/HowToBuy";
import Navbar from "./components/Navbar";
import Taxs from "./components/Taxs";
import Loader from "./components/Loader";
import Contarct from "./components/Contarct";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="relative overflow-x-hidden">
          <div className="relative">
            <video autoPlay playsInline loop muted>
              <source
                src="images/backbg.mp4"
                type="video/mp4"
                className="h-[700px] rounded-b-full"
              />
            </video>
            <div className="absolute top-0 left-0 right-0">
             
              <Navbar />
              <Hero />
            </div>
          </div>
          <div className="mb-4">
              <BorderSec />
            </div>
        
          <AboutUs />
          <div className=" my-4">
            <img src="images/ice.png" alt="" className="w-full h-full" />
          </div>
          <Contarct/>
        
          <Taxs />
          <div className="w-full my-4">
            <img src="images/ice.png" alt="" className="w-full h-full" />
          </div>
        
          <div className="">
            <HowToBuy />
    
         
            <Faq />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;