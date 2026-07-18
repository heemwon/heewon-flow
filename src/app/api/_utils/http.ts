export const jsonError = (message: string, status = 500) =>
  Response.json({ message }, { status });

export async function readJson<T>(request: Request): Promise<T | null> {
  try {
    return (await request.json()) as T;
  } catch {
    return null;
  }
}
