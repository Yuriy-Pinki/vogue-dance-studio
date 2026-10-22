export function asset(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  
  // В продакшене добавляем имя репозитория, локально — оставляем как есть
  const prefix = process.env.NODE_ENV === "production" ? "/vogue-dance-studio" : "";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  
  return `${prefix}${cleanPath}`;
}