import React from "react";

const SplitText = ({text}) => {
  return (
    <div className="relative w-[100px] h-[20px] mt-2 text-center rounded-md font-sans transition-all duration-300 group overflow-hidden cursor-pointer">
      <div className="absolute inset-0 font-aoMono uppercase  flex items-center justify-center text-white transition-all duration-500 group-hover:-translate-y-full">
        {text}
      </div>
      <div className="absolute inset-0 font-aoMono uppercase  flex items-center justify-center text-white transition-all duration-500 translate-y-full group-hover:translate-y-0">
       {text}
      </div>
    </div>
  );
};

export default SplitText;
