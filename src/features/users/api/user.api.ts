import { User, UserStatusUi } from "../types/user.types";
import { getApiErrorMessage } from "@/lib/http";

interface Params {
  search?: string;
  status?: UserStatusUi;
}

export async function getUserData(params: Params = {}): Promise<User[]> {
  const { search, status } = params;
  const queryParams = new URLSearchParams();

  if (search) {
    queryParams.set("search", search);
  }

  if (status) {
    queryParams.set("status", status);
  }

  const queryString = queryParams.toString();
  const response = await fetch(
    `/api/users${queryString ? `?${queryString}` : ""}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error(
      await getApiErrorMessage(response, "사용자 목록을 불러오지 못했습니다.")
    );
  }

  return response.json();
}

export async function createUser(payload: User): Promise<User> {
  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(
      await getApiErrorMessage(response, "사용자를 생성하지 못했습니다.")
    );
  }

  return response.json();
}

export async function deleteUsers(userIds: string[]): Promise<void> {
  const response = await fetch("/api/users", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userIds }),
  });

  if (!response.ok) {
    throw new Error(
      await getApiErrorMessage(response, "사용자를 삭제하지 못했습니다.")
    );
  }
}
