import React from "react";
import { NumberInput } from "@mantine/core";

const PriceInput = () => {
  return (
    <div className="flex items-end gap-x-1">
      <NumberInput label="価格(必須)" name="price" id="price" required />
      <span className="block">円</span>
    </div>
  );
};

export default PriceInput;
