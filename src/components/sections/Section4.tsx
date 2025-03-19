import React from "react";
import Highlights from "../Highlights";
import { useSelector } from "react-redux";
import { CanvasSlice } from "../../store/reducers/canavsSlice";

function Section4() {
  const displayCanvas = useSelector(
    (state: CanvasSlice) => state.canvas.showCanvas
  );
  return (
    <div>
      <div className=" w-full  flex justify-center pt-[100px] border-b-gray-500 border-b pb-[150px]">
        <div className="w-[30%] h-full   p-5 ">
          <h4
            className="text-2xl"
            style={{ color: displayCanvas ? "#000" : "#fff" }}
          >
            02 - WHO WE ARE
          </h4>
        </div>
        <div className="w-[25%] h-full   p-5 pt-3 flex flex-col gap-[130px]">
          <h5
            className=" text-[30px]"
            style={{ color: displayCanvas ? "#000" : "#fff" }}
          >
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
