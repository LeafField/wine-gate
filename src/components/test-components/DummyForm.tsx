import React, { FC, PropsWithChildren, FormEvent } from "react";

const DummyForm: FC<PropsWithChildren> = ({ children }) => {
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return <form onSubmit={submitHandler}>{children}</form>;
};

export default DummyForm;
