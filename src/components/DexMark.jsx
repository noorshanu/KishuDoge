import React from "react";
import Marquee from "react-fast-marquee";

function DexMark() {
  return (
    <section className=" overflow-x-hidden bg-[#00000059] py-6 ">
      {/* <h1 className=" text-center text-2xl sm:text-4xl text-white py-6">
      Onchain Data ⟱ $SPEPE is now available on the following platforms.
      </h1> */}
      <div className=" relative">
        <div className=" my-4 ">
          <Marquee className=" ">
            <div className="marquee-img-main">
              <a
                href="https://dexscreener.com/solana/escntgpb5pcxenp53rnxf8rqhdadnnbqgdfnzrqenyfe"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="brand-logos"
                  src="/images/brand-logo6.png"
                  alt="brand-logo6"
                />
              </a>
            </div>
            <div className="marquee-img-main">
                    <a href="https://raydium.io" target="_blank">
                        <img classNmae="brand-logos" src="images/brand-logo1.png" alt="brand-logo1"/>
                    </a>
                </div>
                <div class="marquee-img-main">
                    <a href="https://jup.ag/" target="_blank">
                        <img class="brand-logos" src="/images/brand-logo2.png" alt="brand-logo2"/>
                    </a>
                </div>
                <div class="marquee-img-main">
                    <a href="https://solscan.io/" target="_blank">
                        <img class="brand-logos" src="/images/brand-logo3.png" alt="brand-logo3"/>
                    </a>
                </div>
                <div class="marquee-img-main">
                    <a href="https://coinmarketcap.com/" target="_blank">
                        <img class="brand-logos" src="/images/brand-logo4.png" alt="brand-logo4"/>
                    </a>
                </div>
                <div class="marquee-img-main">
                    <a href="https://www.coingecko.com/" target="_blank">
                        <img class="brand-logos" src="/images/brand-logo5.png" alt="brand-logo5"/>
                    </a>
                </div>
                <div class="marquee-img-main">
                    <a href="https://www.dextools.io/app/en/solana/pair-explorer/" target="_blank">
                        <img class="brand-logos" src="/images/brand-logo5b.png" alt="brand-logo5"/>
                    </a>
                </div>
                <div class="marquee-img-main">
                    <a href="https://dexscreener.com/solana/" target="_blank">
                        <img class="brand-logos" src="/images/brand-logo6.png" alt="brand-logo6"/>
                    </a>
                </div>
                <div class="marquee-img-main">
                    <a href="https://birdeye.so/token//" target="_blank">
                        <img class="brand-logos" src="/images/brand-logo8.png" alt="brand-logo8"/>
                    </a>
                </div>
                <div class="marquee-img-main">
                    <a href="https://mango.markets/" target="_blank">
                        <img class="brand-logos" src="/images/brand-logo9.png" alt="brand-logo9"/>
                    </a>
                </div>
                <div class="marquee-img-main">
                    <a href="https://www.geckoterminal.com/pt/solana/" target="_blank">
                        <img class="brand-logos" src="images/brand-logo10.png" alt="brand-logo10"/>
                    </a>
                </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default DexMark;
