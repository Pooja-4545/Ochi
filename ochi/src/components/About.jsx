import React from "react";

function about() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="text-[4vw] leading-[4.5vw] tracking-tight from-neutral-50">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="w-full flex gap-5 pt-5 border-t-[1.3px] mt-20 border-[#99AD53]">
        <div className="w-1/2 ">
          <h1 className="text-7xl ">Our approach:</h1>
          <button className="px-10 py-6 flex gap-10 items-center bg-zinc-900 mt-10 text-white rounded-full">
            READ MORE
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>

        <img
          className="rounded-xl mt-3"
          src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
}

export default about;
