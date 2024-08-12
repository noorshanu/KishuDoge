import React from "react";
import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
function Footer() {
  return (
    <section className=" pt-4 border-t-4 border-[#000000]  bg-[#e80b34]  pb-2  " id="contact">
      <div className=" container-wrapper relative  ">
      

        <div className=" relative   px-[8%] mx-auto left-0 right-0 ">
          <div className=" flex justify-between items-center flex-col sm:flex-row">
            <div>
            

              <div className=" flex items-center gap-4 text-white mb-6 ml-5">
              <a
                  href="https://x.com/KishuDoge_Sol"
                  className=" text-xl text-black bg-white hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
                >
                  <BsTwitterX />
                </a>
             
           

                <a
                  href="https://t.me/KishuDoge" target="_blank" rel="noreferrer"
                  className=" text-xl text-black bg-white hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
                >
                  <FaTelegram />
                </a>
              </div>

            <p className=" text-white text-center">Copyright 2024 $KDOGE  All Rights Reserved.</p>
            </div>

            <div className=" ">
           
          

              <div className=" grid sm:grid-cols-4 grid-cols-2 items-center gap-2 sm:gap-6  sm:justify-normal justify-center mx-auto ">
                <a
                  href="#about"
                  className="text-white font-bold text-lg block "
                >
                  About
                </a>
                <a
                  href="#col"
                  className="text-white font-bold text-lg block "
                >
                Tokenomics
                </a>
             
                <a
                  href="#contact"
                  className="text-white font-bold text-lg "
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
