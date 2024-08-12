import React from "react";
import Slider from "./Slider";

function HowToBuy() {
  return (
    <section className=" ">
      <div className=" container-wrapper">
        <div className=" flex items-center justify-center gap-4">
          <div
            className="   rounded-3xl px-4 w-1/2 h-full backdrop-blur-sm"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h1 className=" text-3xl sm:text-7xl font-bold font-snow py-1 text-center text-black text-sad">
              {" "}
              How To BUY $KDOGE
            </h1>
           
          </div>
        </div>

    

        <div className="border-4 border-[#5f0310] bg-[#e80b34] rounded-xl p-2 backdrop-blur-sm box-s2 mx-auto max-w-full sm:max-w-[900px] my-4">
          <div className=" flex flex-col sm:flex-row items-center gap-4 ">
            <div className=" mr-4 w-[300px]">
              <h2 className=" font-bold text-4 text-sad text-4xl py-2 text-black font-snow text-center">
                Step 1
              </h2>
            </div>

            <div className=" w-full">
              <h2 className=" font-bold font-snow text-3xl py-2 txt-s text-white">
                CHOOSE A CRYPTO-CURRENCY EXCHANGE:
              </h2>

              <p className=" text-white">
                Select a reputable exchange known for its security measures,
                user-friendly interface, and support for your specific
                cryptocurrency. Consider factors such as trading fees, available
                trading pairs, and customer support options to ensure the
                exchange meets your needs.
              </p>
            </div>
          </div>
        </div>

        <div className="border-4 border-[#5f0310] bg-[#e80b34] rounded-xl p-2 backdrop-blur-sm box-s2 mx-auto max-w-full sm:max-w-[900px] my-4">
          <div className=" flex flex-col sm:flex-row items-center gap-4 ">
            <div className=" mr-4 w-[300px]">
              <h2 className=" font-bold text-4 text-sad text-4xl py-2 text-black font-snow text-center">
                Step 2
              </h2>
            </div>

            <div className=" w-full">
              <h2 className=" font-bold font-snow text-3xl py-2 txt-s text-white">
              SEND YOUR SOLANA TO A WALLET
              </h2>

              <p className=" text-white">
              CREATE AN ACCOUNT WITH PHANTOM, BACKPACK OR ANY WALLET OF YOUR CHOICE
              </p>
            </div>
          </div>
        </div>

        <div className="border-4 border-[#5f0310] bg-[#e80b34] rounded-xl p-2 backdrop-blur-sm box-s2 mx-auto max-w-full sm:max-w-[900px] my-4">
          <div className=" flex flex-col sm:flex-row items-center gap-4 ">
            <div className=" mr-4 w-[300px]">
              <h2 className=" font-bold text-4 text-sad text-4xl py-2 text-black font-snow text-center">
                Step 3
              </h2>
            </div>

            <div className=" w-full">
              <h2 className=" font-bold font-snow text-3xl py-2 txt-s text-white">
              TRANSFER SOLANA
              </h2>

              <p className=" text-white">
              TRANSFER YOUR SOLANA TO YOUR WALLET.
              </p>
            </div>
          </div>
        </div>

        <div className="border-4 border-[#5f0310] bg-[#e80b34] rounded-xl p-2 backdrop-blur-sm box-s2 mx-auto max-w-full sm:max-w-[900px] my-4">
          <div className=" flex flex-col sm:flex-row items-center gap-4 ">
            <div className=" mr-4 w-[300px]">
              <h2 className=" font-bold text-4 text-sad text-4xl py-2 text-black font-snow text-center">
                Step 4
              </h2>
            </div>

            <div className="w-full">
              <h2 className=" font-bold font-snow text-3xl py-2 txt-s text-white">
              BUY $KDOGE
              </h2>

              <p className=" text-white">
              CONNECT YOUR WALLET TO A DECENTRALIZED EXCHANGE LIKE JUPITER OR RAYDIUM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToBuy;
