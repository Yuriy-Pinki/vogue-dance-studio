import HomeContent from "@/components/HomeContent";
import { LocaleProvider } from "@/components/LocaleProvider";

export default function Home() {
  return (
    <LocaleProvider>
      <HomeContent />
    </LocaleProvider>
  );
}
