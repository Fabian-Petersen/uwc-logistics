import { useQuery } from "@tanstack/react-query";
import { getVehicles } from "../services/getVehicles";

export function useVehicles() {
  const {
    isLoading,
    data: vehicles,
    error,
  } = useQuery({
    queryKey: ["vehicles"],
    queryFn: getVehicles,
  });
  return { isLoading, error, vehicles };
}
