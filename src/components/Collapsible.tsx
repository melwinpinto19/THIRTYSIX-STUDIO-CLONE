import { Plus } from "lucide-react";

const items: string[] = [
  "CREATIVE",
  "DESIGN",
  "ANIMATION",
  "TECHNOLOGY",
  "PROJECT DELIVERY",
  "EXAMPLE PRODUCTS",
];

function Collapsible() {
  return (
    <div>
      {items.map((item) => (
        <div className="text-white w-full border-b-[0.1px] border-b-white p-5 py-4 flex justify-center items-center gap-[100px]">
          <div className="w-[30%]">
            <span>{item}</span>
          </div>
          <div className="border border-[#ffffff4c] py-1 px-3 rounded-full">
            <Plus />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Collapsible;
