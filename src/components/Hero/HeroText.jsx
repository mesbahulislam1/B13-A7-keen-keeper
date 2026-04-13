import React from "react";
import { FaPlus } from "react-icons/fa";

const HeroText = () => {
  return (
    <div className="text-center space-y-5">
        <h1 className="text-[#1F2937] font-bold text-4xl md:text-5xl">
          Friends to keep close in your life
        </h1>
        <p className="text-[#64748B]">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br />
          relationships that matter most.
        </p>
        <button className=" font-semibold bg-[#244D3F] text-white btn">
          <FaPlus></FaPlus> Add a Friend
        </button>
      </div>
  )
}

export default HeroText