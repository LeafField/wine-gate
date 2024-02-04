import React, { FC, useState } from "react";
import { TagsInput } from "@mantine/core";

const OtherFlavor: FC = () => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <div className="w-64">
      <TagsInput
        value={value}
        onChange={setValue}
        label="その他特徴(任意、合計10文字以内)"
        placeholder="Enterで複数入力できます。"
      />
    </div>
  );
};

export default OtherFlavor;
