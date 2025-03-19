import { Plus, Minus } from "lucide-react";
import { useSelector } from "react-redux";
import { CanvasSlice } from "../store/reducers/canavsSlice";
import { useEffect,  useState } from "react";
import { useGSAP } from "@gsap/react";
import EachCollapsibleChildren from "./EachCollapsibleChildren";

const items: { title: string; children: string[] }[] = [
  {
    title: "CREATIVE",
    children: ["Art direction", "Creative direction"],
  },
  {
    title: "DESIGN",
    children: ["Art direction", "Creative direction"],
  },
  {
    title: "DEVELOPMENT",
    children: ["Art direction", "Creative direction"],
  },
  {
    title: "STRATEGY",
    children: ["Art direction", "Creative direction"],
  },
  {
    title: "ANIMATION",
    children: ["Art direction", "Creative direction"],
  },
  {
    title: "MARKETING",
    children: ["Art direction", "Creative direction"],
  },
];

function Collapsible() {
  const displayCanvas = useSelector(
    (state: CanvasSlice) => state.canvas.showCanvas
  );
  const [collapsible, setCollapsible] = useState<boolean[]>([
    ...new Array(items.length).fill(false),
  ]);

  const { contextSafe } = useGSAP();

  useEffect(() => {}, [collapsible]);

  return (
    <div>
      {items.map((item, index) => (
        <div
          className=" border-b-[0.1px] border-b-white"
          style={{
            borderBottom: displayCanvas
              ? "0.1px solid #000"
              : "0.1px solid #fff",

            minHeight: collapsible[index] ? "150px" : "0px",
            transition: "all 0.7s",
          }}
        >
          <div
            className="w-full p-5 py-4 flex justify-center items-center gap-[100px]"
            style={{
              color: displayCanvas ? "#000" : "#fff",
            }}
          >
            <div className="w-[30%]">
              <span>{item.title}</span>
            </div>
            <div
              className="border border-[#ffffff4c] w-[55px] h-[30px] rounded-full grid place-items-center"
              onClick={() => {
                setCollapsible((prev) => {
                  const copy = [...prev];
                  copy[index] = !copy[index];
                  return copy;
                });
              }}
            >
              {collapsible[index] ? (
                <>
                  <Minus
                    className="absolute z-[1]"
                    style={{ color: displayCanvas ? "#fff" : "#000" }}
                  />
                  <div
                    className="w-[55px] h-[30px]  absolute z-[0] rounded-full"
                    style={{ backgroundColor: displayCanvas ? "#000" : "#fff" }}
                  ></div>
                </>
              ) : (
                <>
                  <Plus className="absolute z-[1]" />
                  {/* <div className="w-[55px] h-[30px] bg-amber-300 absolute z-[0] rounded-full"></div> */}
                </>
              )}
            </div>
          </div>

          {collapsible[index] && (
            <div
              className="  flex flex-col  items-center"
              style={{
                color: displayCanvas ? "#000" : "#fff",
              }}
            >
              {item.children.map((child, index) => (
                // <p key={index} className="w-[42%]">
                //   {child}
                // </p>
                <EachCollapsibleChildren value={child} key={index} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Collapsible;
