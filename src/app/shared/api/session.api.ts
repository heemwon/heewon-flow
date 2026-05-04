import { sessionUserMock } from "../mocks/session.mock";
import { SessionUser } from "../types/session.types";

export async function getSessionUser(): Promise<SessionUser> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return sessionUserMock;
}
