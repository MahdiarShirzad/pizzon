import supabase from "./supabase";

export async function getFoods() {
  let { data, error } = await supabase.from("foods").select("*");

  if (error) {
    console.log(error);
  } else {
    // console.log(data);
  }

  return data;
}
