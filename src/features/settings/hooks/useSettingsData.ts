import { useQuery } from "@tanstack/react-query";

import { getSettingsData } from "../api/settings.api";

export const useSettingsData = () => {
  return useQuery({
    queryKey: ["settings", "detail"],
    queryFn: getSettingsData,
  });
};
