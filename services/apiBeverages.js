import supabase from "./supabase";

export async function getBeverages() {
  let { data, error } = await supabase.from("beverages").select("*");

  if (error) {
    console.log(error);
  }

  return data;
}
