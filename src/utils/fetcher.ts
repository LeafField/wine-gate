import { supabase } from "./supabase";
import { EditingPageSchemaType, ImageInputSchemaType } from "./schema";
import { User } from "../store";

export const fetcher = async () => {
  const { data, error } = await supabase.from("categories").select();
  if (error) throw error;
  return data;
};

export const postWine = async ({
  value,
  user,
  image,
}: {
  value: EditingPageSchemaType;
  user: User;
  image: ImageInputSchemaType;
}) => {
  if (!image) throw new Error("画像が必須です");
  const IMAGE_SRC = `${user.id}/${image.name}`;

  const { error: imageError, data: imageData } = await supabase.storage
    .from("wines")
    .upload(IMAGE_SRC, image);

  if (imageError) throw new Error("画像のアップロードに失敗しました");
  if (imageData) {
    const { data, error } = await supabase
      .from("wines")
      .insert({
        title: value.title.replace(/　/g, " "),
        price: value.price,
        place: value.place,
        description: value.description,
        erudition: value.erudition,
        category_id: Number(value.category_id),
        fruity: value.fruity,
        tart: value.tart,
        sober_or_sweet: value.sober_or_sweet,
        tags: value.tags.join(),
        author_id: user.id,
        author_name: user.username,
        image_src: `https://bcssrfyaqnyvqtmabmnt.supabase.co/storage/v1/object/public/wines/${imageData.path}`,
      })
      .select();
    if (error) throw new Error("投稿に失敗しました");
    return data[0].id;
  }
};
