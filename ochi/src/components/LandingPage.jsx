import { motion } from "framer-motion";
import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".-3" className="w-full h-screen bg-zinc-900 pt-1 ">
      <div className="textstructure mt-52 px-20">
        {["WE CREATE", "EYE CREATE", "PRESENTATION"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8.9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1] , duration: 1}}
                    className="mr-[1vw] w-[8.9vw] rounded-md h-[6.3vw] -bottom-[1.8vw] top-[1.9vw] relative bg-center	bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/04/Favicon.png')]"
                  >
                  
                  </motion.div>
                )}
                <h1 className=" pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[.75]  font-[Founders_Grotesk_X-Condensed],font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] flex justify-between items-center  border-zinc-800 mt-20 py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[2px] border-zinc-500 rounded-full font-light text-sm">
            START THE PROJECT
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full">
            <span className="rotate-[45deg]">
              <FaLongArrowAltUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
