import { useEffect, useRef, useState } from "react";
import Canvas from "./components/Canvas";
import canvasDetails from "./data/canvasDetails";
import LocomotiveScroll from "locomotive-scroll";
import Section1 from "./components/sections/Section1";
import Section2 from "./components/sections/Section2";
import Section3 from "./components/sections/Section3";
import Section4 from "./components/sections/Section4";
import { useSelector } from "react-redux";
import { CanvasSlice } from "./store/reducers/canavsSlice";
import gsap from "gsap";
import { colorPallet } from "./constants/index";
import Section5 from "./components/sections/Section5";

function App() {
  const showCanvas = useSelector(
    (state: CanvasSlice) => state.canvas.showCanvas
  );
  const mouseRef = useRef(null);

  useEffect(() => {
    new LocomotiveScroll();

    document.body.addEventListener("mousemove", (e) => {
      gsap.to(mouseRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
      });
    });
  }, []);

  return (
    <>
      {/* mouse follower */}
      <div
        className="h-[20px] w-[20px] rounded-full fixed z-[100] "
        ref={mouseRef}
        style={{
          backgroundColor: showCanvas ? "#000" : "#fff",
        }}
      ></div>

      <div className="overflow-x-hidden w-full">
        {/* section 1 */}
        <div
          className="min-h-screen w-full relative border-b-gray-500 border-b"
          style={{
            backgroundColor: showCanvas
              ? colorPallet.primaryColor.invert
              : "#000",
          }}
        >
          {showCanvas &&
            canvasDetails[0].map((canvasDetail, index) => (
              <Canvas key={index} canvasDetails={canvasDetail} />
            ))}
          <Section1 mouseRef={mouseRef} />
        </div>

        {/* section 2 */}
        <div
          className="min-h-screen w-full relative border-b-gray-500 border-b"
          style={{
            backgroundColor: showCanvas
              ? colorPallet.primaryColor.invert
              : "#000",
          }}
        >
          {showCanvas &&
            canvasDetails[1].map((canvasDetail, index) => (
              <Canvas key={index} canvasDetails={canvasDetail} />
            ))}
          <Section2 />
        </div>

        {/* section 3 */}
        <div
          className="min-h-screen w-full relative border-b-gray-500 border-b"
          style={{
            backgroundColor: showCanvas
              ? colorPallet.primaryColor.invert
              : "#000",
          }}
        >
          {showCanvas &&
            canvasDetails[2].map((canvasDetail, index) => (
              <Canvas key={index} canvasDetails={canvasDetail} />
            ))}
          <Section3 />
        </div>

        <div
          className="min-h-screen w-full  relative border-b-gray-500 border-b"
          style={{
            backgroundColor: showCanvas
              ? colorPallet.primaryColor.invert
              : "#000",
          }}
        >
          {showCanvas &&
            canvasDetails[3].map((canvasDetail, index) => (
              <Canvas key={index} canvasDetails={canvasDetail} />
            ))}
          <Section4 />
        </div>

        {/* section 5 */}
        <div
          className="min-h-screen w-full relative border-b-gray-500 border-b"
          style={{
            backgroundColor: showCanvas
              ? colorPallet.primaryColor.invert
              : "#000",
          }}
        >
          {showCanvas &&
            canvasDetails[4].map((canvasDetail, index) => (
              <Canvas key={index} canvasDetails={canvasDetail} />
            ))}
          <Section5 />
        </div>

        <div
          className="h-[50vh]"
          style={{
            backgroundColor: showCanvas
              ? colorPallet.primaryColor.invert
              : "#000",
          }}
        ></div>
      </div>
    </>
  );
}

export default App;
