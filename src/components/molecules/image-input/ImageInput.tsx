import React, { ChangeEvent, FC, useRef, useState } from "react";

const ImageInput: FC = () => {
  const [imageName, setImageName] = useState<string>("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reader = new FileReader();
  const image = new Image();

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const file = files[0];
      setImageName(file.name);
      reader.readAsDataURL(file);
      reader.addEventListener("load", () => {
        image.src = typeof reader.result === "string" ? reader.result : "";

        image.addEventListener("load", () => {
          const ctx = canvasRef.current?.getContext("2d");
          const canvas = canvasRef.current;

          if (!canvas || !ctx) return;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          let width: number;
          let height: number;
          let dx: number = 0;
          let dy: number = 0;
          if (image.width > image.height) {
            width = canvas.width;
            height = (width / image.width) * image.height;
            dy = (canvas.height - height) / 2;
          } else {
            width = (canvas.height / image.height) * image.width;
            height = canvas.height;
            dx = (canvas.width - width) / 2;
          }

          ctx.drawImage(image, dx, dy, width, height);
        });
      });
    }
  };

  return (
    <div>
      <canvas
        width={320}
        height={300}
        className="bg-gray"
        ref={canvasRef}
      ></canvas>
      <div className="relative mt-4 w-80 overflow-hidden border-2 border-gray">
        <input
          type="file"
          name="image"
          id="image"
          className="w-80 cursor-pointer opacity-0"
          onChange={changeHandler}
        />
        <p className="pointer-events-none absolute inset-0 mt-[1px] truncate pl-2">
          {imageName ? imageName : "画像を選択してください"}
        </p>
      </div>
    </div>
  );
};

export default ImageInput;
