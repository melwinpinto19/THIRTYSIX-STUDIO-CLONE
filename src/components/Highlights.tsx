import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CanvasSlice, showCanvas } from "../store/reducers/canavsSlice";
import { useSelector } from "react-redux";

gsap.registerPlugin(ScrollTrigger);

const items: { title: string; description: string }[] = [
  {
    title: "CREATIVE",
    description:
      "We create digital assets and immersive experiences for purposeful brands.",
  },
  {
    title: "DESIGN",
    description:
      "We design digital assets and immersive experiences for purposeful brands.",
  },
  {
    title: "ANIMATION",
    description:
      "We animate digital assets and immersive experiences for purposeful brands.",
  },
  {
    title: "TECHNOLOGY",
    description:
      "We use technology to create digital assets and immersive experiences for purposeful brands.",
  },
  {
    title: "PROJECT",
    description:
      "We deliver digital assets and immersive experiences for purposeful brands.",
  },
  {
    title: "PRODUCTS",
    description:
      "We provide examples of digital assets and immersive experiences for purposeful brands.",
  },
];

function Highlights() {
  const highlightRef = useRef<HTMLDivElement[]>([]);
  const textRef = useRef<HTMLDivElement[][]>([]);
  const displayCanvas = useSelector(
    (state: CanvasSlice) => state.canvas.showCanvas
  );

  useGSAP(() => {
    if (highlightRef.current.length === 0) return;

    highlightRef.current.forEach((el) => {
      gsap.from(el, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: el,
          scrub: 2,
        },
      });
    });

    textRef.current.forEach((el) => {
      gsap.from(el, {
        x: -20,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: el,
          scrub: 2,
        },
      });
    });
  });

  return (
    <div>
      {items.map((item, index) => (
        <div
          className="h-[215px] w-full flex items-center px-[30px] gap-[100px]"
          ref={(el) => {
            highlightRef.current[index] = el as HTMLDivElement;
          }}
          key={index}
        >
          <div className="w-[60%]">
            <span
              className={`text-[110px]`}
              style={{ color: displayCanvas ? "#000" : "#fff" }}
            >
              {item.title.split("").map((each) => (
                <span
                  ref={(el) => {
                    if (!textRef.current[index]) textRef.current[index] = [];
                    textRef.current[index].push(el as HTMLDivElement);
                  }}
                >
                  {each}
                </span>
              ))}
            </span>
          </div>
          <div className=" py-1 px-3 w-[20%]">
            <span
              className=""
              style={{ color: displayCanvas ? "#000" : "#fff" }}
            >
              {item.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Highlights;
