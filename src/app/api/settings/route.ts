import { jsonError, readJson } from "../_utils/http";
import {
  getSettingsDataFromSource,
  updateSettingsInSource,
} from "@/features/settings/api/settings.server";
import type { Settings } from "@/features/settings/types/settings.types";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return Response.json(await getSettingsDataFromSource());
  } catch (error) {
    return jsonError(
      error instanceof Error
        ? error.message
        : "설정 정보를 불러오지 못했습니다."
    );
  }
}

export async function PUT(request: Request) {
  const payload = await readJson<Settings>(request);

  if (!payload) {
    return jsonError("설정 저장 요청 형식이 올바르지 않습니다.", 400);
  }

  try {
    return Response.json(await updateSettingsInSource(payload));
  } catch (error) {
    return jsonError(
      error instanceof Error ? error.message : "설정을 저장하지 못했습니다."
    );
  }
}
