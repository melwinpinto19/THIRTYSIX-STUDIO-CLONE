import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { CanvasSlice } from "../store/reducers/canavsSlice";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AnimatedWord from "./AnimatedWord";

function AnimatedLine({ line }: { line: string }) {
  const showCanvas = useSelector(
    (state: CanvasSlice) => state.canvas.showCanvas
  );

  // useGSAP(() => {
  //   if (!lineRef.current) return;

  //   gsap.from(lineRef.current, {
  //     y: 100,
  //     opacity: 0,
  //     duration: 1.5,
  //     scrollTrigger: {
  //       trigger: lineRef.current,
  //       scrub: 2,
  //     },
  //   });
  // }, [lineRef.current]);

  return (
    <div
      style={{ color: showCanvas ? "#000" : "#fff" }}
      className="text-[30px] h-[50px] flex gap-2"
    >
      {line.split(" ").map((each, index) => (
        <AnimatedWord word={each.concat(" ")} rotate={2 * index + 1} />
      ))}
    </div>
  );
}

export default AnimatedLine;
