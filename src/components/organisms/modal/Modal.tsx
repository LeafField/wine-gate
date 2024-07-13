"use client";
import React, { FC, useEffect, useRef } from "react";
import { useStore } from "../../../store";

const Modal: FC = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const { modal, clearModal } = useStore();

  useEffect(() => {
    if (modal.length > 0) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [modal]);

  return (
    <dialog
      ref={modalRef}
      className="relative animate-fadeIn border border-gray bg-white px-4 py-4 shadow-md backdrop:bg-[rgba(255,255,255,0.6)] backdrop:backdrop-blur-[4px] max-tablet:mx-4 tablet:w-[400px]"
    >
      {modal.map((message, index) => (
        <p key={index} className={`text-base`}>
          {message}
        </p>
      ))}
      <button
        type="button"
        onClick={clearModal}
        className="mx-auto mt-4 block border-2 border-gray px-3 py-1 transition-colors duration-300 hover:border-blue focus:border-blue focus:outline-none"
      >
        閉じる
      </button>
    </dialog>
  );
};

export default Modal;
