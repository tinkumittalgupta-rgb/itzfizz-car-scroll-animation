"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: "01", title: "Strategy", desc: "Research, Audit & Roadmap", pos: "20%" },
  { num: "02", title: "Design", desc: "Pixel-Perfect UI/UX Craft", pos: "50%" },
  { num: "03", title: "Deliver", desc: "Launch, Iterate & Grow", pos: "80%" },
];

/* ── Top-down SVG car ───────────────────────────────────────────────────── */
function CarSVG() {
  return (
    <svg
      viewBox="0 0 340 130"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", display: "block", overflow: "visible" }}
    >
      <defs>
        <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#9DFF20" floodOpacity="0.75" />
          <feDropShadow dx="0" dy="0" stdDeviation="15" floodColor="#9DFF20" floodOpacity="0.3" />
        </filter>
        <linearGradient id="bodyTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c6ff55" />
          <stop offset="40%" stopColor="#9DFF20" />
          <stop offset="100%" stopColor="#6ab800" />
        </linearGradient>
        <linearGradient id="cockpit" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1c2a10" />
          <stop offset="100%" stopColor="#0a1206" />
        </linearGradient>
        <radialGradient id="shine" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="white" stopOpacity="0.22" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g filter="url(#glow)">
        {/* Body */}
        <path
          d="M295 55 C315 55 332 60 335 65 C332 70 315 75 295 75 L262 77 C242 86 205 92 165 92 C110 92 58 85 34 77 L16 73 C7 70 3 67 3 65 C3 63 7 60 16 57 L34 53 C58 45 110 38 165 38 C205 38 242 44 262 53 Z"
          fill="url(#bodyTop)"
        />

        {/* Windshield */}
        <path
          d="M205 52 C226 50 244 54 254 58 L254 72 C244 76 226 80 205 78 C192 77 182 74 177 65 C182 56 192 53 205 52 Z"
          fill="url(#cockpit)"
          opacity="0.92"
        />

        {/* Cabin */}
        <path
          d="M148 54 C168 52 180 56 182 65 C182 74 170 78 148 79 C130 79 114 76 107 72 L107 58 C118 55 136 55 148 54 Z"
          fill="#0d1a06"
          opacity="0.88"
        />

        {/* Rear Spoiler */}
        <rect x="2" y="58" width="14" height="14" rx="2" fill="#7dcc00" />
        <rect x="0" y="56" width="4" height="18" rx="1" fill="#559900" />

        {/* Front Nose */}
        <path d="M295 60 L337 64 L337 66 L295 70 Z" fill="#7acc00" />
        <path d="M330 63 L340 65 L340 66 L330 67 Z" fill="#559900" />

        {/* Carbon Stripes */}
        <path d="M115 60 L248 54 L248 56 L115 62 Z" fill="#0a0a0a" opacity="0.35" />
        <path d="M115 68 L248 74 L248 76 L115 70 Z" fill="#0a0a0a" opacity="0.35" />

        {/* Wheels */}
        <ellipse cx="250" cy="45" rx="13" ry="7" fill="#111" />
        <ellipse cx="250" cy="45" rx="7" ry="4" fill="#1e1e1e" />
        <ellipse cx="250" cy="45" rx="3" ry="2" fill="#9DFF20" />

        <ellipse cx="250" cy="85" rx="13" ry="7" fill="#111" />
        <ellipse cx="250" cy="85" rx="7" ry="4" fill="#1e1e1e" />
        <ellipse cx="250" cy="85" rx="3" ry="2" fill="#9DFF20" />

        <ellipse cx="72" cy="45" rx="13" ry="7" fill="#111" />
        <ellipse cx="72" cy="45" rx="7" ry="4" fill="#1e1e1e" />
        <ellipse cx="72" cy="45" rx="3" ry="2" fill="#9DFF20" />

        <ellipse cx="72" cy="85" rx="13" ry="7" fill="#111" />
        <ellipse cx="72" cy="85" rx="7" ry="4" fill="#1e1e1e" />
        <ellipse cx="72" cy="85" rx="3" ry="2" fill="#9DFF20" />

        {/* Headlights */}
        <rect x="320" y="59" width="12" height="3" rx="1.5" fill="#9DFF20" opacity="0.95" />
        <rect x="322" y="68" width="9" height="2" rx="1" fill="#9DFF20" opacity="0.65" />

        {/* Taillights */}
        <rect x="5" y="59" width="9" height="3" rx="1.5" fill="#ff3333" opacity="0.85" />
        <rect x="5" y="68" width="7" height="2" rx="1" fill="#ff3333" opacity="0.6" />

        {/* Shine */}
        <path
          d="M165 40 C210 39 255 46 273 55 C255 52 210 48 165 49 C120 49 72 52 50 58 C70 47 125 40 165 40 Z"
          fill="url(#shine)"
        />
      </g>
    </svg>
  );
}

export default function ScrollSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const speedRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Heading entrance reveal ──
      const lines = headingRef.current?.querySelectorAll<HTMLElement>(".head-line");
      gsap.fromTo(
        lines ?? [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ── GSAP Pinned Scroll Timeline ──
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=220%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 1. Car movement along track (0 -> 1)
      tl.to(
        carRef.current,
        {
          x: () => {
            const road = wrapperRef.current?.querySelector<HTMLElement>(".road-track");
            const car = carRef.current;
            if (!road || !car) return window.innerWidth * 0.7;
            return road.clientWidth - car.offsetWidth - 10;
          },
          ease: "none",
          duration: 1,
        },
        0
      );

      // 2. Neon trail scales X with car
      tl.to(
        trailRef.current,
        {
          scaleX: 1,
          ease: "none",
          duration: 1,
        },
        0
      );

      // 3. Glow dot follows car
      tl.to(
        glowRef.current,
        {
          x: () => {
            const road = wrapperRef.current?.querySelector<HTMLElement>(".road-track");
            return road ? road.clientWidth * 0.88 : window.innerWidth * 0.65;
          },
          ease: "none",
          duration: 1,
        },
        0
      );

      // 4. Speed lines fade in & out dynamically during car travel
      speedRefs.current.forEach((line, i) => {
        if (!line) return;
        tl.fromTo(
          line,
          { scaleX: 0, opacity: 0, transformOrigin: "right center" },
          { scaleX: 1, opacity: 0.7, duration: 0.12, ease: "power2.out" },
          0.05 + i * 0.04
        );
        tl.to(
          line,
          { scaleX: 0, opacity: 0, transformOrigin: "right center", duration: 0.15, ease: "power2.in" },
          0.55 + i * 0.03
        );
      });

      // 5. Checkpoint Cards Reveal EXACTLY when car reaches each milestone
      // Card 01 (Strategy @ 20% position)
      if (card1Ref.current) {
        tl.fromTo(
          card1Ref.current,
          { y: 35, scale: 0.82, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, duration: 0.15, ease: "back.out(2)" },
          0.20 // Exact 20% mark
        );
      }

      // Card 02 (Design @ 50% position)
      if (card2Ref.current) {
        tl.fromTo(
          card2Ref.current,
          { y: 35, scale: 0.82, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, duration: 0.15, ease: "back.out(2)" },
          0.50 // Exact 50% mark
        );
      }

      // Card 03 (Deliver @ 80% position)
      if (card3Ref.current) {
        tl.fromTo(
          card3Ref.current,
          { y: 35, scale: 0.82, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, duration: 0.15, ease: "back.out(2)" },
          0.80 // Exact 80% mark
        );
      }
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapperRef}
      id="process"
      className="relative h-screen w-full bg-[#0d0d0d] flex flex-col items-center justify-center overflow-hidden font-outfit grain"
    >
      {/* Background Ambient Glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(157,255,32,0.05) 0%, transparent 75%)",
        }}
      />

      {/* Main Process Frame Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-14 flex flex-col justify-center h-full">
        
        {/* Section Heading */}
        <div ref={headingRef} className="mb-12 text-center">
          <div className="overflow-hidden mb-2">
            <p className="head-line text-xs font-semibold tracking-[0.4em] uppercase text-[#9DFF20] opacity-0 font-jakarta">
              How We Work
            </p>
          </div>
          <div className="overflow-hidden">
            <h2 className="head-line text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#f3f1ec] opacity-0">
              Our Process
            </h2>
          </div>
        </div>

        {/* Road Track & Car Journey */}
        <div className="relative w-full">
          
          {/* Tarmac Track */}
          <div className="road-track relative w-full h-[120px] md:h-[160px] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#090909]">
            
            {/* Subtle Road Texture */}
            <div
              className="absolute inset-0 pointer-events-none opacity-40"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(180deg, transparent 0px, transparent 18px, rgba(255,255,255,0.02) 18px, rgba(255,255,255,0.02) 19px)",
              }}
            />

            {/* Inner Shadow */}
            <div className="absolute inset-0 boxShadow-[inset_0_0_60px_rgba(0,0,0,0.9)] pointer-events-none" />

            {/* Yellow Edge lines */}
            <div className="absolute left-6 right-6 top-[10px] h-[1.5px] rounded-full bg-[#eab308]/20" />
            <div className="absolute left-6 right-6 bottom-[10px] h-[1.5px] rounded-full bg-[#eab308]/20" />

            {/* Center Dashes */}
            <div
              className="absolute inset-0 flex items-center pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0, rgba(255,255,255,0.12) 26px, transparent 26px, transparent 54px)",
                backgroundSize: "54px 1.5px",
                backgroundRepeat: "repeat-x",
                backgroundPosition: "0 50%",
              }}
            />

            {/* Neon Trail */}
            <div
              ref={trailRef}
              className="absolute top-0 left-0 h-full rounded-2xl"
              style={{
                width: "88%",
                transformOrigin: "left center",
                transform: "scaleX(0)",
                background:
                  "linear-gradient(90deg, rgba(157,255,32,0.02) 0%, rgba(157,255,32,0.22) 100%)",
              }}
            />

            {/* Glow Dot */}
            <div
              ref={glowRef}
              className="absolute top-1/2 left-0 pointer-events-none"
              style={{
                width: "75px",
                height: "75px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(157,255,32,0.6) 0%, transparent 70%)",
                filter: "blur(12px)",
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* Speed Lines */}
            {[40, 52, 64, 46, 58].map((top, i) => (
              <div
                key={i}
                ref={(el) => { if (el) speedRefs.current[i] = el; }}
                className="absolute pointer-events-none"
                style={{
                  top: `${top}%`,
                  left: "1%",
                  width: `${48 + i * 16}px`,
                  height: "1.5px",
                  borderRadius: "2px",
                  background: `rgba(157,255,32,${0.5 - i * 0.06})`,
                  opacity: 0,
                }}
              />
            ))}

            {/* Top-Down Car SVG */}
            <div
              ref={carRef}
              className="absolute top-1/2 left-0 z-20 pointer-events-none"
              style={{
                width: "clamp(130px, 20vw, 250px)",
                height: "clamp(52px, 8vw, 95px)",
                transform: "translateY(-50%)",
                willChange: "transform",
                filter:
                  "drop-shadow(0 0 12px rgba(157,255,32,0.6)) drop-shadow(0 0 30px rgba(157,255,32,0.25))",
              }}
            >
              <CarSVG />
            </div>
          </div>

          {/* Cards BELOW the road track */}
          <div className="relative h-[150px] md:h-[170px] mt-2">
            {steps.map((step, i) => {
              const refs = [card1Ref, card2Ref, card3Ref];
              return (
                <div
                  key={i}
                  ref={refs[i]}
                  className="absolute flex flex-col items-center"
                  style={{
                    left: step.pos,
                    top: 0,
                    transform: "translateX(-50%)",
                    opacity: 0,
                  }}
                >
                  {/* Stem line from road to dot */}
                  <div className="w-[1px] h-3 bg-white/20" />
                  
                  {/* Milestone dot */}
                  <div
                    className="w-2.5 h-2.5 rounded-full bg-[#9DFF20] shadow-[0_0_12px_rgba(157,255,32,0.9)] flex-shrink-0"
                  />
                  
                  <div className="w-[1px] h-2 bg-white/10" />

                  {/* Process Card */}
                  <div className="px-5 py-3.5 text-center bg-[#111111] border border-white/[0.08] rounded-lg min-w-[130px] md:min-w-[170px] shadow-lg font-jakarta">
                    <div className="font-extrabold text-[10px] tracking-[0.3em] uppercase text-[#9DFF20] mb-1 font-outfit">
                      {step.num}
                    </div>
                    <div className="font-extrabold uppercase text-xs md:text-sm text-[#f3f1ec] font-outfit">
                      {step.title}
                    </div>
                    <div className="text-[10px] md:text-xs text-[#88837c] mt-1 leading-snug hidden md:block">
                      {step.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Start / Finish Track Labels */}
          <div className="flex justify-between mt-2 px-1 text-[10px] font-semibold tracking-[0.3em] uppercase text-[#66615a] font-jakarta">
            <span>START</span>
            <span>LAUNCH</span>
          </div>
        </div>
      </div>
    </div>
  );
}
