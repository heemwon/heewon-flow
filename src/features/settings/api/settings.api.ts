import type { Settings } from "../types/settings.types";
import { getApiErrorMessage } from "@/lib/http";

export async function getSettingsData(): Promise<Settings> {
  const response = await fetch("/api/settings", { cache: "no-store" });

  if (!response.ok) {
    throw new Error(
      await getApiErrorMessage(response, "설정 정보를 불러오지 못했습니다.")
    );
  }

  return response.json();
}

export async function updateSettings(payload: Settings): Promise<Settings> {
  const response = await fetch("/api/settings", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(
      await getApiErrorMessage(response, "설정을 저장하지 못했습니다.")
    );
  }

  return response.json();
}
