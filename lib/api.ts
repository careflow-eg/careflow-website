/**
 * Centralized API client for CareFlow Website.
 * Uses base URL: https://api.careflowai.health/api/v1
 */

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.careflowai.health";
export const API_PREFIX = process.env.NEXT_PUBLIC_API_PREFIX || "/api/v1";

export async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE_URL.replace(/\/$/, "")}${API_PREFIX}/${endpoint.replace(/^\//, "")}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    throw new Error(`API error (${response.status}): ${await response.text()}`);
  }

  return response.json() as Promise<T>;
}
