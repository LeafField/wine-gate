import React, { FC, PropsWithChildren, FormEvent, useState } from "react";

type FormState = {
  [key: string]: FormDataEntryValue;
};

const DummyForm: FC<PropsWithChildren> = ({ children }) => {
  const [input, setInput] = useState<string>("");
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // const data = Object.fromEntries(formData.entries());
    const data = formData.get("search");
    if (data) {
      setInput(data.toString());
    }
  };

  return (
    <form onSubmit={submitHandler}>
      {children}
      <p>{input}</p>
    </form>
  );
};

export default DummyForm;
