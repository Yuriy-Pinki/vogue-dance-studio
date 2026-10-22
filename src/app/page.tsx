import HeroSection from "@/components/HeroSection";
import { getDictionary } from "@/dictionaries";

export default function Home() {
  const dict = getDictionary();

  return (
    <main className="flex-1">
      <HeroSection dict={dict.hero} />
    </main>
  );
}
