import CopyAddress from "./CopyAddress";

function AboutUs() {
  return (
    <section className="   sm:pt-0 pt-3 relative overflow-hidden" id="about">
      <div className=" container-wrapper pt-[2%]">
        <div className="relative flex justify-between flex-col sm:flex-row items-center gap-4">
          <div
            className=" w-full sm:w-1/2  rounded-xl p-2 "
            data-aos="zoom-in-left"
            data-aos-duration="1500"
          >
            <h1 className="  p-2 text-3xl sm:text-6xl font-bold font-snow text-sad text-black text-center mb-4">
              MEET KISHU DOGE
            </h1>

            <p
              className=" text-lg text-black font-dream  py-2"
              data-aos="zoom-in-left"
              data-aos-duration="1500"
            >
              Kishu Doge is a sleek and savvy white Doge on the Solana
              blockchain, embodying the perfect blend of coolness and
              intelligence. With its eyes set on a 1000x profit, this Doge is
              more than just a meme—it's a force of nature, zooming ahead at
              full speed. 
            </p>

            <p className=" text-lg font-dream text-black">
            Kishu Doge is all about making smart moves and leaving
              the competition in the dust, all while cruising in style in a
              Lambo. This meme coin is destined to outpace everyone, marking its
              territory as the ultimate trailblazer in the crypto world.
            </p>
          </div>
          <div
            className=" w-full sm:w-1/2 relative "
            data-aos="zoom-in-right"
            data-aos-duration="1500"
          >
            <img src="/images/wood.png" alt="" />
            <img
              src="images/dog-3.webp"
              alt=""
              className=" absolute bottom-4 floating h-[100px] sm:h-[150px] right-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
