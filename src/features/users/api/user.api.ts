import { userMock } from "../mocks/user.mock";
import { User, UserStatusUi } from "../types/user.types";

let memoryUsers: User[] = [...userMock];

interface Params {
  search?: string;
  status?: UserStatusUi;
}

export async function getUserData(params: Params = {}): Promise<User[]> {
  const { search, status } = params;

  await new Promise((resolve) => setTimeout(resolve, 500));

  let filteredData = [...memoryUsers];

  if (search) {
    const lowerSearch = search.toLowerCase();

    filteredData = filteredData.filter(
      (user) =>
        user.name.toLowerCase().includes(lowerSearch) ||
        user.email.toLowerCase().includes(lowerSearch)
    );
  }

  if (status !== "all") {
    filteredData = filteredData.filter((user) => user.status === status);
  }

  return filteredData;
}

export async function createUser(payload: User): Promise<User> {
  await new Promise((resolve) => setTimeout(resolve, 400));

  memoryUsers = [payload, ...memoryUsers];

  return payload;
}

export async function deleteUsers(userIds: string[]): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 400));

  memoryUsers = memoryUsers.filter((user) => !userIds.includes(user.id));
}
