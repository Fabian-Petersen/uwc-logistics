import supabase from "../config/supabaseClient";

export async function getVehicles() {
  const { data, error } = await supabase.from("vehicles").select("*");

  if (error) {
    console.error(error);
    throw new Error("Vehicles Could Not be loaded");
  }

  return data;
}