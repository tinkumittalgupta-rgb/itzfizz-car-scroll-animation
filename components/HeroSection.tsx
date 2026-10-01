"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WELCOME = "WELCOME";
const BRAND = "ITZFIZZ";

const stats = [
  { value: "95%", label: "Client Retention" },
  { value: "200+", label: "Products Launched" },
  { value: "50+", label: "Global Awards" },
  { value: "10+", label: "Years Experience" },
];

export default function HeroSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wLetters = welcomeRef.current?.querySelectorAll<HTMLElement>(".w-letter");
      const bLetters = brandRef.current?.querySelectorAll<HTMLElement>(".b-letter");

      // ── STRICT Initial hidden state on mount ──
      gsap.set(wLetters ?? [], { opacity: 0, y: 70, skewX: 6 });
      gsap.set(bLetters ?? [], {
        opacity: 0,
        y: 90,
        scale: 0.88,
        filter: "blur(16px)",
      });
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "center center" });
      gsap.set(taglineRef.current, { opacity: 0, y: 24 });
      gsap.set(statsRef.current?.querySelectorAll<HTMLElement>(".stat-item") ?? [], {
        opacity: 0,
        y: 40,
      });

      // ── Scrubbed Timeline ──
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=220%",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 1. As user scrolls (0.05 -> 0.38): WELCOME letters reveal one by one
      tl.to(
        wLetters ?? [],
        {
          opacity: 1,
          y: 0,
          skewX: 0,
          duration: 0.33,
          stagger: 0.035,
          ease: "power3.out",
        },
        0.05
      );

      // 2. (0.30 -> 0.50): Glowing line expands
      tl.to(
        lineRef.current,
        { scaleX: 1, duration: 0.2, ease: "expo.out" },
        0.30
      );

      // 3. (0.42 -> 0.80): ITZFIZZ letters reveal one by one
      tl.to(
        bLetters ?? [],
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.38,
          stagger: 0.045,
          ease: "power4.out",
        },
        0.42
      );

      // 4. (0.75 -> 0.90): Tagline reveals
      tl.to(
        taglineRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.18,
          ease: "power2.out",
        },
        0.75
      );

      // 5. (0.85 -> 1.00): Stats reveal
      tl.to(
        statsRef.current?.querySelectorAll<HTMLElement>(".stat-item") ?? [],
        {
          opacity: 1,
          y: 0,
          duration: 0.18,
          stagger: 0.05,
          ease: "power3.out",
        },
        0.85
      );

      // 6. Scroll indicator fades out as user scrolls
      tl.to(
        scrollIndicatorRef.current,
        { opacity: 0, y: 15, duration: 0.15 },
        0.02
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapperRef}
      id="studio"
      className="relative h-screen w-full bg-[#0d0d0d] overflow-hidden grain font-outfit"
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Ambient Radial Glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 50% 45%, rgba(157,255,32,0.06) 0%, rgba(13,13,13,0) 75%)",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-between pt-16 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
        
        {/* Hero Title Stack (Reveals on Scroll) */}
        <div className="text-center my-auto py-6">
          
          {/* 1. WELCOME (Geometric Outfit Display Font) */}
          <div
            ref={welcomeRef}
            className="flex items-center justify-center overflow-hidden mb-2"
            aria-label="WELCOME"
          >
            {WELCOME.split("").map((char, i) => (
              <span
                key={i}
                className="w-letter inline-block font-extrabold uppercase tracking-wider select-none text-[#f3f1ec]"
                style={{
                  fontSize: "clamp(2.5rem, 8vw, 7rem)",
                  fontFamily: "var(--font-outfit), sans-serif",
                  lineHeight: 1,
                  opacity: 0, // Hidden until user scrolls
                }}
              >
                {char}
              </span>
            ))}
          </div>

          {/* Accent Line */}
          <div
            ref={lineRef}
            className="h-[2px] w-full max-w-xl mx-auto my-4 bg-gradient-to-r from-transparent via-[#9DFF20] to-transparent"
            style={{ transform: "scaleX(0)" }}
          />

          {/* 2. ITZFIZZ (High-Impact Geometric Display with Accent Glow) */}
          <div
            ref={brandRef}
            className="flex items-center justify-center overflow-hidden mb-8"
            aria-label="ITZFIZZ"
          >
            {BRAND.split("").map((char, i) => (
              <span
                key={i}
                className="b-letter inline-block font-black uppercase tracking-tight select-none text-[#9DFF20]"
                style={{
                  fontSize: "clamp(3.8rem, 14vw, 12.5rem)",
                  fontFamily: "var(--font-outfit), sans-serif",
                  lineHeight: 0.9,
                  opacity: 0, // Hidden until user scrolls
                  textShadow:
                    "0 0 40px rgba(157,255,32,0.3), 0 0 90px rgba(157,255,32,0.1)",
                }}
              >
                {char}
              </span>
            ))}
          </div>

          {/* Subtitle with Pill Highlight aesthetic */}
          <p
            ref={taglineRef}
            className="text-xs sm:text-sm md:text-base font-medium text-[#a09a90] tracking-wider uppercase max-w-2xl mx-auto leading-relaxed opacity-0 font-jakarta"
          >
            Crafting Digital Products &amp; Motion Experiences That{" "}
            <span className="bg-[#9DFF20] text-[#0d0d0d] font-bold px-2.5 py-0.5 rounded-full inline-block transform -rotate-1 shadow-md">
              MOVE BRANDS
            </span>{" "}
            Forward.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 border-t border-white/[0.08] pt-6 font-jakarta"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-item text-center md:border-r border-white/[0.06] last:border-r-0 py-2 px-4 opacity-0"
            >
              <div className="font-extrabold text-2xl md:text-4xl text-[#f3f1ec] tracking-tight mb-1 font-outfit">
                {stat.value}
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#88837c] font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clean Scroll Cue */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 pointer-events-none font-jakarta"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase text-[#88837c] font-medium">
          Scroll To Begin
        </span>
        <div className="w-[1px] h-9 bg-gradient-to-b from-[#9DFF20] to-transparent animate-pulse" />
      </div>
    </div>
  );
}
