import { z } from "zod";

const IMAGE_TYPE = ["image/png", "image/jpeg", "image/jpg"];
const IMAGE_SIZE = 153600;

export const searchSchema = z.object({
  search: z
    .string()
    .min(4, { message: "4文字以上入力してください" })
    .max(60, { message: "60文字以下で入力してください" }),
  category: z.string(),
  sort: z.enum(["new", "inexpensive", "popular"]),
});

export const editingPageSchema = z.object({
  title: z.string().min(4, { message: "4文字以上入力してください" }),
  // image: z
  //   .any()
  //   .refine((file) => file && file.length > 0, {
  //     message: "ワイン画像は必須です。",
  //   })
  //   .transform((file) => file[0])
  //   .refine((file) => file?.size < IMAGE_SIZE, {
  //     message: "画像サイズは150KB以下にしてください",
  //   })
  //   .refine((file) => IMAGE_TYPE.includes(file?.type), {
  //     message: "画像形式はjpegかpngにしてください",
  //   }),
  category_id: z.string().length(1, { message: "カテゴリーは必須です" }),
  place: z.string().min(4, { message: "4文字以上入力してください" }),
  price: z.number().int().min(100, { message: "価格の入力は必須です" }),
  description: z.string().min(20, { message: "20文字以上入力してください" }),
  erudition: z.string().optional(),
});

export type EditingPageSchemaType = z.infer<typeof editingPageSchema> & {
  image: File | null;
};
