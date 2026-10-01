import HeroSection from "@/components/HeroSection";
import ScrollSection from "@/components/ScrollSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0d0d0d] min-h-screen text-[#e2ddd6] selection:bg-[#9DFF20]/20 selection:text-white">
      {/* ── Hero: WELCOME + ITZFIZZ reveal letter-by-letter on scroll ── */}
      <HeroSection />

      {/* ── Process: Top-down car interactive scroll journey ── */}
      <ScrollSection />

      {/* ── Selected Work Showcase ── */}
      <ShowcaseSection />

      {/* ── Editorial Agency Footer ── */}
      <Footer />
    </main>
  );
}
