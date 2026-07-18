import { type NextRequest } from "next/server";

import { jsonError, readJson } from "../_utils/http";
import {
  createUserInSource,
  deleteUsersFromSource,
  getUserDataFromSource,
} from "@/features/users/api/user.server";
import type { User, UserStatusUi } from "@/features/users/types/user.types";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const search = request.nextUrl.searchParams.get("search") ?? "";
    const status =
      (request.nextUrl.searchParams.get("status") as UserStatusUi | null) ??
      "all";

    return Response.json(await getUserDataFromSource({ search, status }));
  } catch (error) {
    return jsonError(
      error instanceof Error
        ? error.message
        : "사용자 목록을 불러오지 못했습니다."
    );
  }
}

export async function POST(request: Request) {
  const payload = await readJson<User>(request);

  if (!payload) {
    return jsonError("사용자 생성 요청 형식이 올바르지 않습니다.", 400);
  }

  try {
    return Response.json(await createUserInSource(payload), { status: 201 });
  } catch (error) {
    return jsonError(
      error instanceof Error ? error.message : "사용자를 생성하지 못했습니다."
    );
  }
}

export async function DELETE(request: Request) {
  const payload = await readJson<{ userIds: string[] }>(request);

  if (!payload?.userIds?.length) {
    return jsonError("삭제할 사용자를 선택해 주세요.", 400);
  }

  try {
    await deleteUsersFromSource(payload.userIds);
    return Response.json({ ok: true });
  } catch (error) {
    return jsonError(
      error instanceof Error ? error.message : "사용자를 삭제하지 못했습니다."
    );
  }
}
