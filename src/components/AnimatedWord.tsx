import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { CanvasSlice } from "../store/reducers/canavsSlice";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function AnimatedWord({ word, rotate }: { word: string; rotate: number }) {
  const showCanvas = useSelector(
    (state: CanvasSlice) => state.canvas.showCanvas
  );
  const lineRef = useRef(null);

  useGSAP(() => {
    if (!lineRef.current) return;

    gsap.from(lineRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      rotate: rotate,
      scrollTrigger: {
        trigger: lineRef.current,
        scrub: 2,
      },
    });
  }, [lineRef.current]);

  return (
    <span
      style={{ color: showCanvas ? "#000" : "#fff" }}
      className="text-[30px] inline-block"
      ref={lineRef}
    >
      {word}
    </span>
  );
}

export default AnimatedWord;
