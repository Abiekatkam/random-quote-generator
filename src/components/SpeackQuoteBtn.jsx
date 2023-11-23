import React from "react";

const SpeackQuoteBtn = ({ quote }) => {
  return (
    <div
      className="cursor-pointer lg:w-[40px] lg:h-[40px] w-[35px] h-[35px] lg:text-[1.4rem] text-[1.1rem] flex items-center justify-center rounded-full text-indigo-600 border-2 border-indigo-600 hover:scale-110 hover:bg-indigo-600 hover:text-white transition-all ease-in"
      onClick={quote}
    >
      <i className="fa-solid fa-volume-high"></i>
    </div>
  );
};

export default SpeackQuoteBtn;
