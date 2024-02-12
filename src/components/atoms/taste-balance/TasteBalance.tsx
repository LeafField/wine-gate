"use client";
import React, { FC, useRef, useEffect } from "react";

type Props = {
  title: string;
  balance: number;
};

const TasteBalance: FC<Props> = ({ title, balance }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas === null) return;
    const ctx = canvas.getContext("2d");
    if (ctx === null) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.fillStyle = "black";
    ctx.strokeStyle = "gray";
    ctx.lineWidth = 1;
    for (let i = 0; i < 5; i++) {
      if (i < balance) {
        ctx.fillRect(i * 32 + i * 8, 14, 32, 32);
      } else {
        ctx.strokeRect(i * 32 + i * 8, 14, 32, 32);
      }
    }
    ctx.restore();
    ctx.save();
    ctx.font = "10px sans-serif";
    ctx.fillText("弱い", 0, 10);
    ctx.fillText("強い", 32 * 5 + 8 * 4 - 20, 10);
    ctx.restore();
  }, [canvasRef, balance]);

  return (
    <div className="text-main-text">
      <p>
        {title}:{balance}
      </p>
      <canvas className="mt-1" width={192} height={46} ref={canvasRef}></canvas>
    </div>
  );
};

export default TasteBalance;
