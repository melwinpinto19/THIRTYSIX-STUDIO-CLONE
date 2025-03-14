import React from "react";
import Highlights from "../Highlights";

function Section4() {
  return (
    <div>
      <div className=" w-full border flex justify-center pt-[100px] border-b-gray-500 border-b pb-[150px]">
        <div className="w-[30%] h-full   text-white p-5 ">
          <h4 className="text-2xl">02 - WHO WE ARE</h4>
        </div>
        <div className="w-[25%] h-full border  p-5 pt-3 flex flex-col gap-[130px]">
          <h5 className="text-white text-[30px]">
            Our vision is to refine digital production while creating social
            impact and opportunity.
          </h5>
        </div>
      </div>
      <Highlights />
    </div>
  );
}

export default Section4;
