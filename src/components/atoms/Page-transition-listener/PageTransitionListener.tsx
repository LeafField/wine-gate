"use client";
import { useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { useStore } from "../../../store";

const PageTransitionListener = () => {
  const ref = useRef<string>("");
  const { setMenu } = useStore();
  const pathname = usePathname();

  const menuClose = useCallback(() => {
    setMenu("close");
  }, [setMenu]);

  useEffect(() => {
    if (ref.current !== pathname) {
      setMenu("close");
      ref.current = pathname;
    }
  }, [pathname, setMenu]);

  useEffect(() => {
    window.addEventListener("resize", menuClose);

    return () => {
      window.removeEventListener("resize", menuClose);
    };
  }, [menuClose]);

  return null;
};

export default PageTransitionListener;
