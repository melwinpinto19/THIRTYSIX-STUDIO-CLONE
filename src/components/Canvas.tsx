import { useEffect, useRef, useState } from "react";
import { canvasImages } from "../data/canvasImages";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CanvasDetails } from "../types";

interface CanvasProps {
  canvasDetails: CanvasDetails;
}

function Canvas({ canvasDetails }: CanvasProps) {
  const { startIndex, numImages, duration, size, top, left, zIndex } =
    canvasDetails;
  const [index, setIndex] = useState({ value: startIndex });
  const canvasRef = useRef(null);

  useGSAP(() => {
    gsap.to(index, {
      value: index.value + numImages - 1,
      duration: duration,
      ease: "linear",
      repeat: -1,
      yoyo: true,
      onUpdate: () => {
        setIndex({ value: Math.round(index.value) });
      },
    });
  });

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = canvasImages[index.value];

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      if (ctx) ctx.drawImage(img, 0, 0);
    };
  }, [canvasRef.current, index]);

  return (
    <canvas
      data-scroll
      data-scroll-speed={Math.random().toFixed(2)}
      ref={canvasRef}
      className={`absolute`}
      style={{
        width: `${1.4 * size}px`,
        height: `${1.4 * size}px`,
        zIndex: zIndex,
        top: `${top}%`,
        left: `${left}%`,
      }}
    ></canvas>
  );
}

export default Canvas;
