import React from "react";

const Button = () => {
  return (
    <div>
      <button
        className="
          inline-block
          px-7 pt-2
          m-2.5
          text-2xl
          font-bold
          uppercase
          text-white
          bg-gradient-to-br from-[#cfcfcf] to-[#919190]
          border-none
          rounded-[40px]
          shadow-[0px_4px_0px_#f5f5f5]
          transition-all
          duration-200
          ease-in-out
          cursor-pointer
          relative
          hover:translate-y-[-2px]
          hover:shadow-[0px_6px_0px_#f5f5f5]
          active:translate-y-0
          active:shadow-none
          active:bg-gradient-to-br active:from-[#0072ff] active:to-[#00c6ff]
          before:content-['']
          before:absolute
          before:top-[-3px]
          before:left-[-3px]
          before:w-0
          before:h-0
          before:rounded-[40px]
          before:border-t-[3px]
          before:border-l-[3px]
          before:border-white
          after:content-['']
          after:absolute
          after:bottom-[-3px]
          after:right-[-3px]
          after:w-0
          after:h-0
          after:rounded-[40px]
          after:border-b-[3px]
          after:border-r-[3px]
          after:border-white
          font-aoMono uppercase
        "
      >
        CONTACT
      </button>
    </div>
  );
};

export default Button;