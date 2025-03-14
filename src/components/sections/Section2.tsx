import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function Section2() {
  const leftBoxRef = useRef<HTMLDivElement>(null);
  const rightBoxRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(leftBoxRef.current, {
      x: -100,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: leftBoxRef.current,
        scrub: 2,
      },
    });

    gsap.from(rightBoxRef.current, {
      x: 100,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: rightBoxRef.current,
        scrub: 2,
      },
    });
  });

  return (
    <div
      className="min-h-screen w-full border flex justify-center"
      ref={leftBoxRef}
    >
      <div className="w-[30%] min-h-screen   text-white p-5">
        <h4 className="text-2xl">01 - WHAT WE DO</h4>
      </div>
      <div
        className="w-[30%] min-h-screen border  p-5 pt-3 flex flex-col gap-[130px]"
        ref={rightBoxRef}
      >
        <h5 className="text-white text-[30px]">
          We aim to elevate digital production in the advertising space,
          bringing your ideas to life.
        </h5>
        <div className="text-white flex flex-col gap-[30px]">
          <p>
            {" "}
            As a contemporary studio, we use cutting-edge design practices and
            the latest technologies to deliver current digital work.
          </p>
          <p>
            {" "}
            Our commitment to innovation and simplicity, paired with our agile
            approach, ensures your journey with us is smooth and enjoyable from
            start to finish.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section2;
