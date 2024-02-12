"use client";
import React, { FC, useState, MouseEvent, useRef } from "react";

type Props = {
  content: string;
};

const Accordion: FC<Props> = ({ content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const clickHandler = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!contentRef.current) return;

    if (detailsRef.current?.open) {
      setIsOpen(false);
      const closeAnim = contentRef.current.animate(
        [
          { height: contentRef.current.offsetHeight + "px", opacity: 1 },
          { height: 0, opacity: 0 },
        ],
        {
          duration: 300,
          easing: "ease-out",
        },
      );

      closeAnim.onfinish = () => {
        if (detailsRef.current) {
          detailsRef.current.open = false;
        }
      };
    } else {
      setIsOpen(true);
      if (detailsRef.current) {
        detailsRef.current.open = true;
      }
      contentRef.current.animate(
        [
          {
            height: 0,
            opacity: 0,
          },
          {
            height: contentRef.current.offsetHeight + "px",
            opacity: 1,
          },
        ],
        {
          duration: 300,
          easing: "ease-out",
        },
      );
    }
  };

  return (
    <details ref={detailsRef} className="overflow-hidden">
      <summary
        onClick={clickHandler}
        className="block cursor-pointer select-none"
        aria-label="このワインのうんちく"
      >
        <div className="flex items-center justify-between border-b border-gray">
          <span className="text-heading3 font-bold">このワインのうんちく</span>
          <span className="relative block h-[14px] w-[14px]">
            <span className="absolute top-1/2 block h-[0.0625rem] w-full -translate-y-1/2 bg-black"></span>
            <span
              className={`absolute left-1/2 top-0 block h-full w-[0.0625rem] -translate-x-1/2 bg-black transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
            ></span>
          </span>
        </div>
      </summary>
      <div className="overflow-hidden" ref={contentRef}>
        <div className="">
          {content.split("\n").map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </div>
    </details>
  );
};

export default Accordion;
