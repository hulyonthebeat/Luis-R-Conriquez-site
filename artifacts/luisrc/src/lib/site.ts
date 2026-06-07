export const BASE = import.meta.env.BASE_URL;

/** Resolve a media filename to a full URL under the artifact base path. */
export function mediaUrl(file?: string): string | undefined {
  if (!file) return undefined;
  if (/^https?:\/\//.test(file)) return file;
  return `${BASE}media/${file}`;
}
