import { settingsMock } from "../mocks/settings.mock";
import type { Settings } from "../types/settings.types";

let memorySettings: Settings = { ...settingsMock };

export async function getSettingsData(): Promise<Settings> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return memorySettings;
}

export async function updateSettings(payload: Settings): Promise<Settings> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  memorySettings = payload;

  return memorySettings;
}
