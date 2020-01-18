export function isApiResponse<T extends { [k: string]: any }>(
  responseBody: unknown,
  prop: string
): responseBody is T {
  return Array.isArray((responseBody as T)[prop]);
}
