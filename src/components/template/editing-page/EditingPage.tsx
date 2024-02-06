"use client";
import React, { FC } from "react";
import Heading from "../../atoms/heading/Heading";
import { TextInput, Textarea, Button } from "@mantine/core";
import { useForm } from "@mantine/form";

import {
  editingPageSchema,
  EditingPageSchemaType,
} from "../../../utils/schema";
import { zodResolver } from "mantine-form-zod-resolver";

import TasteInput from "../../molecules/taste-input/TasteInput";
import ImageInput from "../../molecules/image-input/ImageInput";

import { categoryDummyData } from "../../../utils/dummyData";
import PriceInput from "../../atoms/price-input/PriceInput";

const EditingPage: FC = () => {
  const form = useForm<EditingPageSchemaType>({
    initialValues: {
      title: "",
      price: 0,
      place: "",
      description: "",
      erudition: "",
      category_id: "",
      image: null,
    },
    validate: zodResolver(editingPageSchema),
  });

  return (
    <div className="mx-auto my-15 max-w-[64.9375rem]">
      <Heading title="記事編集" />
      <form
        className="space-y-15"
        onSubmit={form.onSubmit((value) => console.log(value))}
      >
        <TextInput
          label="ワイン名(必須、日本語)"
          id="title"
          className="mt-15"
          required
          {...form.getInputProps("title")}
        />
        <ImageInput form={form} />
        <TasteInput categories={categoryDummyData} form={form} />
        <PriceInput form={form} />
        <TextInput
          label="何所で買えるか(必須)"
          required
          id="place"
          {...form.getInputProps("place")}
        />
        <Textarea
          label="味の特徴(20字以上400字以内)"
          required
          id="description"
          autosize
          minRows={4}
          {...form.getInputProps("description")}
        />
        <Textarea
          label="このワインについて語りたいうんちくがあればどうぞ（2000字以内、不記載可)"
          id="erudition"
          autosize
          minRows={4}
          {...form.getInputProps("erudition")}
        />
        <Button type="submit" className="w-full bg-blue">
          公開
        </Button>
      </form>
    </div>
  );
};

export default EditingPage;
