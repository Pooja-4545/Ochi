import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-100 flex items-center px-32 gap-5">
      <div className="cardcontainer h-[50vh] w-1/2 ">
        <div className=" relative card rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute font-weight:300 text-sm left-0 bottom-10 px-3 ml-2 rounded-full py-1 border-2 border-[#CDEA68]">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 h-[50vh] w-1/2 ">
        <div className=" relative card w-1/2 rounded-xl h-full bg-[#212121] flex items-center justify-center ">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute font-weight:300 text-sm left-0 bottom-10 px-3 ml-2 rounded-full py-1 border-2 border-[#666968] uppercase">
            Rating 5.0 on Clutch
          </button>
        </div>
        <div className=" relative card w-1/2 rounded-xl h-full bg-[#212121] flex items-center justify-center ">
          <img
            className="w-[15vh] h-[15vh]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute font-weight:300 text-sm left-0 bottom-10 px-3 ml-2 rounded-full py-1 border-2 border-[#6e6f6f] uppercase">
            Business Bootcamp Alumni
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
