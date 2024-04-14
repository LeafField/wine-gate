"use client";
import React, { FC, useEffect, useState } from "react";

import { TextInput, Textarea, Button, TagsInput } from "@mantine/core";
import { useForm } from "@mantine/form";

import {
  editingPageSchema,
  EditingPageSchemaType,
  imageInputSchema,
} from "../../../utils/schema";
import { zodResolver } from "mantine-form-zod-resolver";
import { useStore } from "../../../store";

import Heading from "../../atoms/heading/Heading";
import TasteInput from "../../molecules/taste-input/TasteInput";
import ImageInput from "../../molecules/image-input/ImageInput";
import LoadingOverlay from "../../atoms/loading-overlay/LoadingOverlay";

import { categoryDummyData } from "../../../utils/dummyData";
import PriceInput from "../../atoms/price-input/PriceInput";

import useMutateWines from "../../../hooks/useMutateWines";
import { Wines } from "../../../types/article_types";

type Props = {
  wine?: Wines | null;
};

const EditingPage: FC<Props> = ({ wine }) => {
  const { user, setImage_src } = useStore();
  const { winePostMutation, wineUpdateMutation } = useMutateWines();
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<EditingPageSchemaType>({
    initialValues: {
      title: wine?.title || "",
      price: wine?.price || 0,
      place: wine?.place || "",
      description: wine?.description || "",
      erudition: wine?.erudition || "",
      category_id: wine?.category_id.toString() || "",
      image: null,
      fruity: wine?.fruity || 1,
      tart: wine?.tart || 1,
      sober_or_sweet: wine?.sober_or_sweet || 1,
      tags: wine?.tags?.split(",") || [],
    },
    validate: zodResolver(editingPageSchema),
  });

  const submitHandler = async (value: EditingPageSchemaType) => {
    if (!user) {
      throw new Error("ログインしてください。");
    }
    if (!wine) {
      const image = imageInputSchema.safeParse(value.image);
      if (!image.success) {
        alert(image.error.errors[0].message);
      } else if (image.success) {
        setLoading(true);
        winePostMutation.mutate({ value, user, image: image.data });
      }
    } else if (wine) {
      wineUpdateMutation.mutate({
        id: wine.id,
        value,
        user_id: user.id,
        oldWineImage: wine.image_src,
        image: value.image,
      });
    }
  };

  useEffect(() => {
    if (wine?.image_src) {
      setImage_src(
        `https://bcssrfyaqnyvqtmabmnt.supabase.co/storage/v1/object/public/wines/${wine.image_src}`,
      );
    }

    return () => {
      setLoading(false);
    };
  }, [setImage_src, wine, setLoading]);

  return (
    <div className="relative z-0 mx-4 my-15 max-w-[64.9375rem] min-[1086px]:mx-auto">
      {loading && <LoadingOverlay />}
      {wineUpdateMutation.isPending && <LoadingOverlay />}
      <Heading title="記事編集" />
      <form className="space-y-15" onSubmit={form.onSubmit(submitHandler)}>
        <TextInput
          label="ワイン名(必須、日本語)"
          id="title"
          className="mt-15"
          required
          {...form.getInputProps("title")}
        />
        <ImageInput form={form} />
        <TasteInput categories={categoryDummyData} form={form} />
        <TagsInput
          name="tags"
          id="tags"
          label="その他味の特徴、5文字以下のタグ2つまで"
          placeholder="Enterでタグを区切る事が出来ます。"
          maxTags={2}
          maxLength={5}
          {...form.getInputProps("tags")}
        />
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
