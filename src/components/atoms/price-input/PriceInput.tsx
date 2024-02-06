import React, { FC } from "react";
import { NumberInput } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { EditingPageSchemaType } from "../../../utils/schema";

type Props = {
  form: UseFormReturnType<EditingPageSchemaType>;
};

const PriceInput: FC<Props> = ({ form }) => {
  return (
    <div className="flex items-end gap-x-1">
      <NumberInput
        {...form.getInputProps("price")}
        label="価格(必須)"
        name="price"
        id="price"
        required
      />
      <span className="block">円</span>
    </div>
  );
};

export default PriceInput;
