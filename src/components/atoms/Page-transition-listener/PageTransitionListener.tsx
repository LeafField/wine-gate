"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useStore } from "../../../store";

const PageTransitionListener = () => {
  const ref = useRef<string>("");
  const { setMenu } = useStore();
  const pathname = usePathname();
  useEffect(() => {
    if (ref.current !== pathname) {
      setMenu("close");
      ref.current = pathname;
    }
  }, [pathname, setMenu]);
  return null;
};

export default PageTransitionListener;
