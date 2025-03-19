import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { CanvasSlice } from "../store/reducers/canavsSlice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function EachCollapsibleChildren({ value }: { value: string }) {
  const roleAnimationRef = useRef(null);
  const [mouseEnter, setMouseEnter] = useState(false);
  const showCanvas = useSelector(
    (state: CanvasSlice) => state.canvas.showCanvas
  );

  useGSAP(() => {
    if (roleAnimationRef.current) {
      gsap.to(roleAnimationRef.current, {
        duration: 0.2,
        height: "50px",
        display: "block",
      });
    }
  }, [roleAnimationRef.current]);

  const getTextColor = () => {
    if (!mouseEnter && !showCanvas) {
      return "#fff";
    }
    if (!mouseEnter && showCanvas) {
      return "#000";
    }
    if (mouseEnter && showCanvas) {
      return "#fff";
    }

    return "#000";
  };

  return ( 
    <div
      className="border-b-[0.1px] border-b-[#ffffff4c] h-[50px] flex items-center relative w-full"
      style={{ color: showCanvas ? "#000" : "#fff", paddingLeft: "29%" }}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      <span style={{ color: getTextColor() }} className="absolute z-[1]">
        {value}
      </span>
      {mouseEnter && (
        <div
          className="absolute bottom-0  left-0 w-full hidden"
          style={{ backgroundColor: showCanvas ? "#000" : "#fff" }}
          ref={roleAnimationRef}
        ></div>
      )}
    </div>
  );
}

export default EachCollapsibleChildren;
