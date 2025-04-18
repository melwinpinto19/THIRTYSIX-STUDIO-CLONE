import { useRef } from "react";
import Collapsible from "../Collapsible";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useSelector } from "react-redux";
import { CanvasSlice } from "../../store/reducers/canavsSlice";

function Section3() {
  const spanRef = useRef<HTMLSpanElement[]>([]);
  const displayCanvas = useSelector(
    (state: CanvasSlice) => state.canvas.showCanvas || false
  );

  useGSAP(() => {
    const timeline = gsap.timeline();
    spanRef.current.forEach((el) => {
      timeline.from(el, {
        y: 20,
        opacity: 0,
        duration: 0.1,
        scrollTrigger: {
          trigger: el,
          scrub: 2,
        },
      });
    });
  });

  return (
    <section>
      {/* our services section */}
      <div
        className="h-[50vh] w-full  
      flex flex-col items-center justify-center gap-[50px]"
      >
        <p
          className=" w-[50%] text-start"
          style={{ color: displayCanvas ? "#000" : "#fff" }}
        >
          OUR SERVICES
        </p>
        <p
          className=" w-[50%] text-[25px]"
          style={{ color: displayCanvas ? "#000" : "#fff" }}
        >
          {"We provide you with captivating design,interactive animations, reliable code,and immaculate project coordination.Whether you need a campaign built from scratch or assistanat a specific phase,we’vegot you covered."
            .split("")
            .map((each, index) => (
              <span
                ref={(ref) => {
                  spanRef.current[index] = ref as HTMLSpanElement;
                }}
              >
                {each}
              </span>
            ))}
        </p>
      </div>

      {/* collapsible section */}
      <Collapsible />

      {/* contact section */}
      <div className="h-[80vh] w-full pl-[300px] pt-[100px]">
        <div className="w-[30%] flex flex-col gap-[50px]">
          <p
            className=" text-[14px]"
            style={{ color: displayCanvas ? "#000" : "#fff" }}
          >
            Not sure what you need? We’re here to help you define the undefined.
          </p>

          <p
            className=" text-[14px]"
            style={{ color: displayCanvas ? "#000" : "#fff" }}
          >
            Not sure what you need? We’re here to help you define the undefined.
            Let’s explore all creative and technical possibilities together
            through one of our tailored labs, where we champion future-forward
            thinking within an ethical framework.
          </p>

          <button
            className=" w-fit border-gray-500 border rounded-2xl py-1 px-3"
            style={{ color: displayCanvas ? "#000" : "#fff" }}
          >
            <span className="" style={{ textDecoration: "underline" }}>
              TALK TO US
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section3;
