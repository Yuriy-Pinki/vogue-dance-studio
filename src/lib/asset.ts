/**
 * Prefixes a `public/` path with the GitHub Pages base path in production.
 * `next/image` with `unoptimized: true` does not apply `basePath` to `src`,
 * so every local asset URL must go through this helper.
 */
export function asset(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;

  const prefix = process.env.NODE_ENV === "production" ? "/vogue-dance-studio" : "";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  return `${prefix}${cleanPath}`;
}
