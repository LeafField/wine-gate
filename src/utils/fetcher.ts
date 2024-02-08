import { supabase } from "./supabase";
import { WinePostType } from "../types/article_types";

export const fetcher = async () => {
  const { data, error } = await supabase.from("categories").select();
  if (error) throw error;
  return data;
};

export const postWine = async (wine: WinePostType) => {
  const { data, error } = await supabase.from("wines").insert(wine).select();
  if (error) throw error;
  return data[0].id;
};
