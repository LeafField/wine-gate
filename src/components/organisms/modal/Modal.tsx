"use client";
import React, { FC, useEffect, useRef } from "react";
import { useStore } from "../../../store";

const Modal: FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { modal, clearModal } = useStore();

  useEffect(() => {
    if (modal.length !== 0) {
      buttonRef.current?.focus();
    }
  }, [buttonRef, modal]);

  if (modal.length !== 0) {
    return (
      <>
        <dialog open className="overlay z-overlay animate-fadeIn">
          <div className="relative z-nav-menu border border-gray bg-white px-4 py-4 shadow-md max-tablet:mx-4 tablet:w-[400px]">
            {modal.map((message, index) => (
              <p key={index} className={`text-base`}>
                {message}
              </p>
            ))}
            <button
              type="button"
              ref={buttonRef}
              onClick={clearModal}
              className="mx-auto mt-4 block border-2 border-gray px-3 py-1 transition-colors duration-300 hover:border-blue focus:border-blue focus:outline-none"
            >
              閉じる
            </button>
          </div>
        </dialog>
      </>
    );
  } else return null;
};

export default Modal;
