import { supabase } from "./supabase";

export const fetcher = async () => {
  const { data, error } = await supabase.from("categories").select();
  if (error) throw error;
  return data;
};
