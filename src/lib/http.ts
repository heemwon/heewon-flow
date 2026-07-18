interface ApiErrorResponse {
  message?: string;
}

export async function getApiErrorMessage(
  response: Response,
  fallbackMessage: string
) {
  try {
    const data = (await response.json()) as ApiErrorResponse;

    return data.message || fallbackMessage;
  } catch {
    return fallbackMessage;
  }
}

export function getErrorMessage(error: unknown, fallbackMessage: string) {
  if (error instanceof Error && error.message) {
    return error.message;
  }

  return fallbackMessage;
}
