import { jsonError } from "../_utils/http";
import { getDashboardDataFromSource } from "@/features/dashboard/api/dashboard.server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return Response.json(await getDashboardDataFromSource());
  } catch (error) {
    return jsonError(
      error instanceof Error
        ? error.message
        : "대시보드 데이터를 불러오지 못했습니다."
    );
  }
}
