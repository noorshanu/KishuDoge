import React from "react";

function Contarct() {
  return (
    <section>
      <div className=" container-wrapper">
        <div className=" relative bg-[#e80b34] border-8 py-8 border-[#600214] rounded-3xl">
          <h1 className=" font-snow txt-s text-white text-5xl sm:text-8xl font-bold text-center"   data-aos="zoom-in-up"
          data-aos-duration="1500">
            Contract
          </h1>

          <p className="font-snow txt-s text-black text-lg sm:text-3xl font-bold text-center"   data-aos="zoom-in-left"
          data-aos-duration="1500">
            92JXpsTbVipSbNiQyZkkWjJJt3HsXvf1573TyS2iAcsR
          </p>
          <div className="flex justify-center mt-4"   data-aos="zoom-in-up"
          data-aos-duration="1500">
            <a
              href="/"
              className="  py-2 text-4xl font-snow txt-s text-white rounded-3xl border-4 border-[#feb244] bg-[#ffcc33] px-12"
            >
              Buy Now
            </a>
          </div>

          <img src=" images/logog.png" alt="" className=" absolute -bottom-4 right-0 h-[100px] sm:h-[350px]" />
        </div>
      </div>
    </section>
  );
}

export default Contarct;
