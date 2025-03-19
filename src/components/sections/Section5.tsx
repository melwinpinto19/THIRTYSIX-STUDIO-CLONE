import  { useState } from "react";
import { useSelector } from "react-redux";
import { CanvasSlice } from "../../store/reducers/canavsSlice";
import { Minus, Plus } from "lucide-react";
import EachRole from "../EachRole";

function Section5() {
  const showCanvas = useSelector(
    (state: CanvasSlice) => state.canvas.showCanvas
  );
  const [collapse, setCollapse] = useState(false);
  const [roles] = useState([
    "Software Engineer",
    "Product Manager",
    "UX Designer",
    "Data Scientist",
    "Business Analyst",
    "Marketing Manager",
    "DevOps Engineer",
    "Sales Manager",
    "Product Designer",
    "Graphic Designer",
    "Content Writer",
    "Customer Support",
  ]);
  return (
    <div className="">
      <div className="w-full pl-[20%] flex items-center gap-[50px] h-[100px] border-b-[0.1px] border-b-[#ffffff4c]">
        <h4
          className="text-2xl w-[40%]"
          style={{
            color: showCanvas ? "#000" : "#fff",
          }}
        >
          ROLES - OPEN
        </h4>
        <div
          className="border border-[#ffffff4c] w-[55px] h-[30px] rounded-full grid place-items-center"
          style={{
            color: showCanvas ? "#000" : "#fff",
          }}
          onClick={() => setCollapse((prev) => !prev)}
        >
          {collapse ? <Minus /> : <Plus />}
        </div>
      </div>

      {/* FAQ's */}
      <div className="w-full flex flex-col  ">
        {roles.map((role, index) => (
          <EachRole role={role} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Section5;
