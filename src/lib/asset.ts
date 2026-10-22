// next/image не добавляет basePath к src — префиксуем пути из public/ вручную (GitHub Pages).
export function assetPath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
