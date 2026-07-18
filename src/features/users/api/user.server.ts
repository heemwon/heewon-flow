import { createSupabaseServerClient } from "@/lib/supabase/server";
import { userMock } from "../mocks/user.mock";
import type { User, UserStatusUi } from "../types/user.types";

let memoryUsers: User[] = [...userMock];

interface Params {
  search?: string;
  status?: UserStatusUi;
}

interface UserRow {
  id: string;
  name: string;
  email: string;
  role: User["role"];
  status: User["status"];
  joined_at: string;
}

const toUser = (row: UserRow): User => ({
  id: row.id,
  name: row.name,
  email: row.email,
  role: row.role,
  status: row.status,
  joinedAt: row.joined_at,
});

const toUserRow = (user: User): UserRow => ({
  id: user.id,
  name: user.name,
  email: user.email,
  role: user.role,
  status: user.status,
  joined_at: user.joinedAt,
});

const filterUsers = (users: User[], { search, status }: Params = {}) => {
  const normalizedSearch = search?.trim().toLowerCase();

  return users.filter((user) => {
    const matchesSearch =
      !normalizedSearch ||
      user.name.toLowerCase().includes(normalizedSearch) ||
      user.email.toLowerCase().includes(normalizedSearch);
    const matchesStatus = !status || status === "all" || user.status === status;

    return matchesSearch && matchesStatus;
  });
};

export async function getUserDataFromSource(
  params: Params = {}
): Promise<User[]> {
  const supabase = createSupabaseServerClient();

  if (!supabase) {
    return filterUsers(memoryUsers, params);
  }

  const { data, error } = await supabase
    .from("users")
    .select("id,name,email,role,status,joined_at")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return filterUsers((data ?? []).map((row) => toUser(row as UserRow)), params);
}

export async function createUserInSource(payload: User): Promise<User> {
  const supabase = createSupabaseServerClient();

  if (!supabase) {
    memoryUsers = [payload, ...memoryUsers];

    return payload;
  }

  const { data, error } = await supabase
    .from("users")
    .insert(toUserRow(payload))
    .select("id,name,email,role,status,joined_at")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return toUser(data as UserRow);
}

export async function deleteUsersFromSource(userIds: string[]): Promise<void> {
  const supabase = createSupabaseServerClient();

  if (!supabase) {
    memoryUsers = memoryUsers.filter((user) => !userIds.includes(user.id));

    return;
  }

  const { error } = await supabase.from("users").delete().in("id", userIds);

  if (error) {
    throw new Error(error.message);
  }
}
