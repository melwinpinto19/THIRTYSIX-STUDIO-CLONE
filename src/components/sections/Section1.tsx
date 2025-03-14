import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useDispatch, useSelector } from "react-redux";
import { CanvasSlice, toggleCanvas } from "../../store/reducers/canavsSlice";

function Section1() {
  const growingRef = useRef(null);
  const textRef = useRef(null);
  const dispatch = useDispatch();
  const showCanvas = useSelector(
    (state: CanvasSlice) => state.canvas.showCanvas
  );
  const boxRef = useRef<HTMLElement[]>([]);
  const linksRef = useRef<HTMLElement[]>([]);

  useGSAP(() => {
    if (showCanvas) {
      gsap.to(growingRef.current, {
        scale: 1000,
        duration: 1,
        ease: "power1.in",
      });
    } else {
      gsap.to(growingRef.current, {
        scale: 0,
        duration: 1,
        ease: "power1.in",
      });
    }
  }, [showCanvas]);

  useGSAP(() => {
    const timeline = gsap.timeline();

    const elements = boxRef.current;

    timeline.from(elements[0], {
      y: 50,
      opacity: 0,
      duration: 0.7,
    });

    timeline.from(linksRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.7,
      stagger: 0.2,
    });

    timeline.from(elements[1], {
      x: -50,
      opacity: 0,
      duration: 0.7,
    });

    timeline.from(elements[2], {
      x: 50,
      opacity: 0,
      duration: 0.7,
    });
  });

  useEffect(() => {
    if (textRef.current) {
      const element = textRef.current as HTMLHeadingElement;

      element.addEventListener("click", (e) => {
        console.log("Click");

        dispatch(toggleCanvas());

        gsap.set(growingRef.current, {
          top: e.clientY,
          left: e.clientX,
        });
      });
    }
  }, [textRef.current]);

  return (
    <>
      <span
        className=" fixed top-0 left-0 h-[20px] w-[20px] bg-[#e652525b] z-[-1]"
        ref={growingRef}
      ></span>
      <nav className="fixed top-0 left-0 w-full z-10 flex items-center justify-between h-[10vh] px-4 text-white">
        <h2
          className="text-xl"
          ref={(el) => {
            boxRef.current[0] = el as HTMLElement;
          }}
        >
          ThirtySixStudio
        </h2>
        <ul className="flex gap-4">
          {["Home", "About", "Services", "Contact"].map((link, index) => (
            <li
              key={index}
              ref={(el) => {
                linksRef.current[index] = el as HTMLElement;
              }}
            >
              {link}
            </li>
          ))}
        </ul>
      </nav>
      <section className="flex justify-center h-[90vh] w-full mt-[10vh]">
        <div className="relative  w-[30%] h-full text-white  p-3 leading-[1.5]">
          <h3
            className="text-4xl tracking-wide"
            ref={(el) => {
              boxRef.current[1] = el as HTMLElement;
            }}
          >
            At Thirtysixstudio, we build digital assets and immersive
            experiences for purposeful brands.
          </h3>
          <p
            className="mt-[40px]"
            ref={(el) => {
              boxRef.current[2] = el as HTMLElement;
            }}
          >
            We're a boutique production studio focused on design, animation, and
            technology, constantly rethinking what digital craft can do for
            present-day ads and campaigns.
          </p>
        </div>
        <div className=" w-[30%] h-full"></div>
      </section>
      <section>
        <h3 className="text-[18rem] text-white p-3" ref={textRef}>
          Thirtysixstudio
        </h3>
      </section>
    </>
  );
}

export default Section1;
