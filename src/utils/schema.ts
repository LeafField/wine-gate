import { z } from "zod";

const IMAGE_TYPE = ["image/png", "image/jpeg", "image/jpg"];
const IMAGE_SIZE = 153600;

export const searchSchema = z.object({
  search: z
    .string()
    .min(2, { message: "2文字以上入力してください" })
    .max(60, { message: "60文字以下で入力してください" }),
});

export const editingPageSchema = z.object({
  title: z.string().min(4, { message: "4文字以上入力してください" }),
  category_id: z.string().length(1, { message: "カテゴリーは必須です" }),
  place: z.string().min(4, { message: "4文字以上入力してください" }),
  price: z.number().int().min(100, { message: "価格の入力は必須です" }),
  description: z.string().min(20, { message: "20文字以上入力してください" }),
  erudition: z.string().optional(),
  sober_or_sweet: z.number().int().min(1).max(5),
  tart: z.number().int().min(1).max(5),
  fruity: z.number().int().min(1).max(5),
  tags: z
    .array(z.string().max(5, { message: "一つのタグに五文字までです。" }))
    .max(2, { message: "タグは2つまでです" }),
});

export type EditingPageSchemaType = z.infer<typeof editingPageSchema> & {
  image: File | null;
};

export const imageInputSchema = z
  .custom<File>()
  .refine((file) => file, { message: "ワイン画像は必須です。" })
  .refine((file) => file && file.size < IMAGE_SIZE, {
    message: "画像サイズは150KB以下にしてください",
  })
  .refine((file) => IMAGE_TYPE.includes(file.type), {
    message: "画像形式はjpegかpngにしてください",
  });

export type ImageInputSchemaType = z.infer<typeof imageInputSchema>;
