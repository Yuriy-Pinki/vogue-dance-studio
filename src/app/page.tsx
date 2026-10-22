import HomeContent from "@/components/HomeContent";
import { LocaleProvider } from "@/components/LocaleProvider";

// Cache Components запрещают `new Date()` при пререндере без кэша — год для копирайта кэшируем.
async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Home() {
  const year = await getCurrentYear();

  return (
    <LocaleProvider>
      <HomeContent year={year} />
    </LocaleProvider>
  );
}
