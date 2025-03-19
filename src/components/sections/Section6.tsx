import React from "react";
import AnimatedLine from "../AnimatedLine";

function Section6() {
  const [paragraph, setParagraph] = React.useState<string[][]>([
    [
      "At Thirtysixstudio, we recognize that our industry",
      "can perpetuate harm. We believe we have to try ",
      "and reverse some of these imbalances. That's why",
      "we're launching SS36, our local social ",
      "sustainability hub.",
    ],
    [
      "At Thirtysixstudio, we recognize that our industry",
      "can perpetuate harm. We believe we have to try ",
      "and reverse some of these imbalances. That's why",
      "we're launching SS36, our local social ",
      "sustainability hub.",
    ],
  ]);

  return (
    <div className="w-full pl-[20%] flex flex-col gap-[20px] pt-[100px]">
      {paragraph.map((para, index) => (
        <div>
          {para.map((text, index) => (
            <AnimatedLine line={text} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Section6;
