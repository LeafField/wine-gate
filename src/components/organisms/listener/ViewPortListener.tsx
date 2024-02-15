"use client";
import { FC, useLayoutEffect } from "react";

const ViewPortListener: FC = () => {
  useLayoutEffect(() => {
    const ViewPortListener = () => {
      document.documentElement.style.setProperty(
        "--vw",
        `${document.documentElement.clientWidth}px`,
      );
    };
    ViewPortListener();
    window.addEventListener("resize", ViewPortListener);

    return () => {
      window.removeEventListener("resize", ViewPortListener);
    };
  }, []);
  return null;
};

export default ViewPortListener;
