import React from "react";

function Taxs() {
  return (
    <section className=" pt-[4%] pb-[2%]  relative  ">
      <div className="container-wrapper">
      <h1
          className=" text-3xl sm:text-8xl font-bold text-white font-snow txt-s text-center mb-4"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          Tokenomics
        </h1>
        <div className=" flex flex-col sm:flex-row  justify-center gap-8 items-center mt-[10%]">
          
       

        <a href="#" className="block border-4 border-[#feba5e] bg-[#e80b34] rounded-xl p-2 backdrop-blur-sm box-s2 my-4 ">
          <img src="images/logo.png" alt="" className=" h-[200px] mx-auto -mt-[55%]" />
     
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black text-center font-dream  mt-5">
            LP Burning
          </h5>
          <p className="font-normal text-black  text-center">LP LOCKED</p>
        </a>

        <a href="#" className="block border-4 border-[#feba5e] bg-[#e80b34] rounded-xl p-2 backdrop-blur-sm box-s2 my-4 ">
          <img src="images/logo.png" alt="" className=" h-[200px] mx-auto -mt-[55%]" />
     
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black text-center font-dream  mt-5">
            TAX
          </h5>
          <p className="font-normal text-black  text-center">0% TAX</p>
        </a>

        <a href="#" className="block border-4 border-[#feba5e] bg-[#e80b34] rounded-xl p-2 backdrop-blur-sm box-s2 my-4 ">
          <img src="images/logo.png" alt="" className=" h-[200px] mx-auto -mt-[55%]" />
     
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black text-center font-dream  mt-5">
           Contract
          </h5>
          <p className="font-normal text-black  text-center">Mint REVOKED</p>
        </a>

          </div>

        
    
      </div>

    

        

      <div className=" flex justify-center flex-col items-center">
        <div>
          <p className=" text-center text-white  mt-4">
          Baby Frosty: The Coldest Meme Coin on Solana
          </p>

          <h1 className=" text-xl sm:text-5xl font-bold font-snow txt-s  text-center text-white py-2">
            Total Supply 1.000.000.000
          </h1>
      
        </div>
      </div>
    </section>
  );
}

export default Taxs;
