import React from "react";
import { BsTelegram, BsTwitterX } from "react-icons/bs";
import CopyAddress from "./CopyAddress";
import { FaTelegram } from "react-icons/fa6";

function Hero() {
  return (
    <section className="  py-4 ">
      <div className=" container-wrapper pt-[5%] sm:pt-[5%]  overflow-hidden relative">
        <div className=" flex justify-between flex-col sm:flex-row items-center ">
          <div className=" w-full sm:w-1/2">
            <div>
              <h1
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                className=" text-3xl sm:text-8xl  font-bold font-snow  txt-s text-white py-2"
              >
               Kishu Doge
              </h1>


              <p className=" text-black text-2xl py-2"   data-aos="zoom-in-up"
          data-aos-duration="1500">
             Kishu Doge: The coolest white Doge on Solana, racing to a 1000x profit in a Lambo—smart, fast, and primed for big gains!
              </p>
              <div
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                className=" flex mt-4 mb-2 items-center justify-start gap-2  relative z-20 py-1 bg-white border-t-2 border-l-2 border-r-2 border-[#000000] rounded-xl w-full max-w-full sm:max-w-xl px-4 "
              >
                <CopyAddress />{" "}
                <button className="copy">
                  <span
                    data-text-end="Copied!"
                    data-text-initial="Copy to clipboard"
                    className="tooltip"
                  ></span>
                  <span>
                    <svg
                      xmlSpace="preserve"
                      id="tgt"
                      viewBox="0 0 6.35 6.35"
                      y="0"
                      x="0"
                      height="20"
                      width="20"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      className="clipboard"
                    >
                      <g>
                        <path
                          fill="#000"
                          d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
                        ></path>
                      </g>
                    </svg>
                    <svg
                      xmlSpace="preserve"
                      id="tgt"
                      viewBox="0 0 24 24"
                      y="0"
                      x="0"
                      height="18"
                      width="18"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      className="checkmark"
                    >
                      <g>
                        <path
                          data-original="#fff"
                          fill="currentColor"
                          d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            <div
              className=" relative  "
              data-aos="zoom-in-right"
              data-aos-duration="1500"
            >
              <div className=" flex flex-row-reverse justify-start w-full max-w-[300px] gap-4  py-4">
                <a href="https://www.dextools.io/app/en/solana/pair-explorer/CZPWAmWqZRrHTYBsgJoa7XiVbZgyHdGw8XZfCUKiokSV?t=1723474275110" className=" mx-auto " target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src="/images/dex.svg"
                    alt=""
                    className=" h-[80px]   w-auto"
                  />
                </a>

           
             
           

                <a
                  href="https://t.me/KishuDoge" target="_blank" rel="noreferrer"
                  className=" mx-auto bg-[#ffffff] p-4 rounded-full "
                >
                  {" "}
                  <FaTelegram className=" text-black text-5xl"/>
              
                </a>

                <a
                  href="https://x.com/KishuDoge_Sol" target="_blank" rel="noreferrer"
                  className=" mx-auto bg-[#ffffff] p-4 rounded-full "
                >
                  {" "}
                  <BsTwitterX className=" text-black text-5xl" />{" "}
                </a>
              </div>
            </div>
          </div>
          <div className=" w-full sm:w-1/2">
            <img
              src="images/hero4.png"
              alt=""
              className=" mx-auto  floating"
              data-aos="zoom-in-up"
              data-aos-duration="1500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
