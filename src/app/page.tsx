import HomeContent from "@/components/HomeContent";
import { LocaleProvider } from "@/components/LocaleProvider";

function getCurrentYear() {
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
