import { motion, useAnimate, useAnimation } from "framer-motion";
import React, { useState } from "react";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div
      data-scroll
      data-scroll-section
      className="w-full relative py-20 bg-white text-black"
    >
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-6xl">Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-20 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="card-containe relative w-1/2 h-[70vh]"
          >
            <div className=" card w-full h-full rounded-xl overflow-hidden ">
              <h1 className="absolute font-bold text-[#CDEA68] right-0 overflow-hidden flex -translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tighter text-8xl ">
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      dealy: index * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="card-container relative w-1/2 h-[70vh]"
          >
            <div className=" card w-full h-full rounded-xl overflow-hidden ">
              <h1 className="absolute flex font-bold overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tighter text-8xl ">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      dealy: index * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
