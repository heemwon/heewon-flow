import { useQuery } from "@tanstack/react-query";
import { getSessionUser } from "../api/session.api";

export const useSession = () => {
  return useQuery({
    queryKey: ["session", "info"],
    queryFn: getSessionUser,
    retry: false,
  });
};
