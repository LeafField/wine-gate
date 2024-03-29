import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { EditingPageSchemaType } from "../../../utils/schema";
import { UseFormReturnType } from "@mantine/form";
import { useStore } from "../../../store";
import ImageWrapper from "../../atoms/image-wrapper/ImageWrapper";

type Props = {
  form: UseFormReturnType<EditingPageSchemaType>;
};

const ImageInput: FC<Props> = ({ form }) => {
  const [imageName, setImageName] = useState<string>("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { image_src, clearImage_src } = useStore();

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const file = files[0];
      form.setFieldValue("image", file);
      setImageName(file.name);
    }
  };

  useEffect(() => {
    const file = form.values.image;

    if (file) {
      clearImage_src();
      const reader = new FileReader();
      const image = new Image();
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
          ctx.save();
          ctx.drawImage(image, dx, dy, width, height);
          ctx.restore();
        });
      });
    } else {
      const ctx = canvasRef.current?.getContext("2d");
      const canvas = canvasRef.current;
      if (!canvas || !ctx) return;
      ctx.save();
      ctx.font = "30px sans-serif";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("No Image", canvas.width / 2, canvas.height / 2 + 15);
      ctx.restore();
    }

    return () => {
      clearImage_src();
    };
  }, [form.values.image, clearImage_src]);

  return (
    <div>
      <div className="relative h-75 w-80">
        <canvas
          width={320}
          height={300}
          className="bg-gray"
          ref={canvasRef}
        ></canvas>
        {image_src && !form.values.image && <ImageWrapper src={image_src} />}
      </div>
      <div className="relative mt-4 w-80 overflow-hidden border-2 border-gray">
        <label
          htmlFor="image"
          className="pointer-events-none absolute inset-0 mt-[1px] truncate pl-2"
        >
          {imageName ? imageName : "画像選択(必須、150KBまで)"}
        </label>
        <input
          type="file"
          name="image"
          id="image"
          className="w-80 cursor-pointer opacity-0"
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};

export default ImageInput;
