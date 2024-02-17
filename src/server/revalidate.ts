"use server";
import { revalidatePath } from "next/cache";

export const revalidateServer = (id: string) => {
  revalidatePath(`/article/${id}`);
};
