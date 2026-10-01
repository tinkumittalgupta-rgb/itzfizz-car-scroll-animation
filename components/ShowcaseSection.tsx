"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BASE_PATH = "";

const projects = [
  {
    id: "01",
    title: "Data Dashboard",
    tag: "UI / Analytics Platform",
    img: `${BASE_PATH}/work1.jpg`,
    desc: "Real-time analytics platform built for high-throughput data visualization, instant reporting, and enterprise scale.",
    aspect: "hero",
  },
  {
    id: "02",
    title: "Brand Identity",
    tag: "Branding & Design System",
    img: `${BASE_PATH}/work2.jpg`,
    desc: "Comprehensive digital brand identity system crafted to elevate market positioning across all global channels.",
    aspect: "split-right",
  },
  {
    id: "03",
    title: "Mobile Experience",
    tag: "Mobile App & Product UX",
    img: `${BASE_PATH}/work3.jpg`,
    desc: "Fluid, high-performance mobile interface designed for maximum user engagement, micro-interactions, and speed.",
    aspect: "split-left",
  },
];

const marqueeWords = [
  "DIGITAL",
  "UI DESIGN",
  "BRANDING",
  "MOTION",
  "STRATEGY",
  "DEVELOPMENT",
  "PRODUCT DESIGN",
  "ANIMATION",
];

export default function ShowcaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectRowsRef = useRef<HTMLDivElement[]>([]);
  const lineRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Section Title Reveal ──
      const titleLines = titleRef.current?.querySelectorAll<HTMLElement>(".title-line");
      gsap.fromTo(
        titleLines ?? [],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ── Each Project Row Reveal ──
      projectRowsRef.current.forEach((row, i) => {
        if (!row) return;

        const imgContainer = row.querySelector<HTMLElement>(".project-img-wrapper");
        const img = row.querySelector<HTMLElement>(".project-img");
        const textElements = row.querySelectorAll<HTMLElement>(".project-text");
        const line = lineRefs.current[i];

        // Horizontal divider line expands
        if (line) {
          gsap.fromTo(
            line,
            { scaleX: 0, transformOrigin: "left center" },
            {
              scaleX: 1,
              duration: 1,
              ease: "expo.out",
              scrollTrigger: {
                trigger: row,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Image Container curtain wipe reveal
        if (imgContainer) {
          gsap.fromTo(
            imgContainer,
            { clipPath: "inset(100% 0% 0% 0%)", opacity: 0.3 },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              opacity: 1,
              duration: 1.2,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: row,
                start: "top 82%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Image inner zoom and parallax scroll
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.2 },
            {
              scale: 1,
              duration: 1.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
                start: "top 82%",
                toggleActions: "play none none reverse",
              },
            }
          );

          gsap.to(img, {
            yPercent: -10,
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          });
        }

        // Staggered text elements reveal
        if (textElements.length > 0) {
          gsap.fromTo(
            textElements,
            { y: 35, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
                start: "top 78%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      // ── Marquee Continuous Loop ──
      const marquee = sectionRef.current?.querySelector<HTMLElement>(".marquee-inner");
      if (marquee) {
        gsap.to(marquee, {
          xPercent: -50,
          duration: 26,
          repeat: -1,
          ease: "none",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      style={{ background: "#0d0d0d", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      className="py-24 md:py-36 px-6 md:px-12 overflow-hidden font-outfit"
    >
      {/* ── Marquee Ticker at Top ── */}
      <div className="mb-24 md:mb-32 overflow-hidden py-4 border-y border-white/[0.08] bg-[#080808]">
        <div className="marquee-inner flex gap-0 whitespace-nowrap" style={{ width: "200%" }}>
          {[...Array(2)].map((_, ri) => (
            <div key={ri} className="flex items-center gap-10 pr-10">
              {marqueeWords.map((word, wi) => (
                <span key={wi} className="flex items-center gap-10">
                  <span className="text-xs md:text-sm font-bold tracking-[0.35em] uppercase text-[#a09a90] hover:text-white transition-colors">
                    {word}
                  </span>
                  <span className="text-[#9DFF20] text-xs font-bold drop-shadow-[0_0_8px_rgba(157,255,32,0.6)]">
                    ✦
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Section Title Header ── */}
      <div ref={titleRef} className="mb-20 md:mb-28 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="title-line text-xs font-semibold tracking-[0.4em] uppercase text-[#9DFF20] mb-3 opacity-0 font-jakarta">
            Selected Portfolio
          </p>
          <h2 className="title-line text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-[#f3f1ec] opacity-0">
            Our Projects
          </h2>
        </div>
        <p className="text-xs md:text-sm text-[#88837c] max-w-xs font-jakarta leading-relaxed">
          Crafted digital products engineered with precision, high-impact aesthetic, and seamless interaction.
        </p>
      </div>

      {/* ── Editorial Asymmetrical Projects Grid ── */}
      <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
        {projects.map((project, i) => (
          <div
            key={i}
            ref={(el) => { if (el) projectRowsRef.current[i] = el; }}
            className="group"
          >
            {/* Top Divider Line */}
            <div
              ref={(el) => { if (el) lineRefs.current[i] = el; }}
              className="h-[1px] w-full bg-white/[0.08] mb-10"
            />

            {/* Layout Variant 1: Hero Full Width */}
            {project.aspect === "hero" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Meta details left */}
                <div className="md:col-span-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="project-text text-xl font-extrabold text-[#9DFF20] opacity-0">
                      {project.id}
                    </span>
                    <span className="project-text text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full text-[#a09a90] border border-white/[0.1] bg-white/[0.02] opacity-0 font-jakarta">
                      {project.tag}
                    </span>
                  </div>

                  <h3 className="project-text text-3xl md:text-5xl font-extrabold uppercase text-[#f3f1ec] tracking-tight leading-tight opacity-0">
                    {project.title}
                  </h3>

                  <p className="project-text text-xs md:text-sm text-[#88837c] font-jakarta leading-relaxed opacity-0">
                    {project.desc}
                  </p>
                </div>

                {/* Main Showcase Image right */}
                <div className="md:col-span-8">
                  <div
                    className="project-img-wrapper relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#111111]"
                    style={{ height: "clamp(320px, 42vw, 560px)", clipPath: "inset(100% 0% 0% 0%)" }}
                  >
                    <img
                      src={project.img}
                      alt={project.title}
                      className="project-img absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ transform: "scale(1.2)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/80 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Hover Action Circle */}
                    <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-[#9DFF20] text-[#0d0d0d] flex items-center justify-center font-bold transition-transform duration-300 group-hover:scale-110 shadow-[0_0_25px_rgba(157,255,32,0.5)]">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Layout Variant 2: Split Right Image */}
            {project.aspect === "split-right" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                {/* Image left */}
                <div className="md:col-span-7 order-2 md:order-1">
                  <div
                    className="project-img-wrapper relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#111111]"
                    style={{ height: "clamp(280px, 36vw, 480px)", clipPath: "inset(100% 0% 0% 0%)" }}
                  >
                    <img
                      src={project.img}
                      alt={project.title}
                      className="project-img absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ transform: "scale(1.2)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/80 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-[#9DFF20] text-[#0d0d0d] flex items-center justify-center font-bold transition-transform duration-300 group-hover:scale-110 shadow-[0_0_25px_rgba(157,255,32,0.5)]">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Details right */}
                <div className="md:col-span-5 order-1 md:order-2 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="project-text text-xl font-extrabold text-[#9DFF20] opacity-0">
                      {project.id}
                    </span>
                    <span className="project-text text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full text-[#a09a90] border border-white/[0.1] bg-white/[0.02] opacity-0 font-jakarta">
                      {project.tag}
                    </span>
                  </div>

                  <h3 className="project-text text-3xl md:text-5xl font-extrabold uppercase text-[#f3f1ec] tracking-tight leading-tight opacity-0">
                    {project.title}
                  </h3>

                  <p className="project-text text-xs md:text-sm text-[#88837c] font-jakarta leading-relaxed opacity-0">
                    {project.desc}
                  </p>
                </div>
              </div>
            )}

            {/* Layout Variant 3: Split Left Image */}
            {project.aspect === "split-left" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                {/* Details left */}
                <div className="md:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="project-text text-xl font-extrabold text-[#9DFF20] opacity-0">
                      {project.id}
                    </span>
                    <span className="project-text text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full text-[#a09a90] border border-white/[0.1] bg-white/[0.02] opacity-0 font-jakarta">
                      {project.tag}
                    </span>
                  </div>

                  <h3 className="project-text text-3xl md:text-5xl font-extrabold uppercase text-[#f3f1ec] tracking-tight leading-tight opacity-0">
                    {project.title}
                  </h3>

                  <p className="project-text text-xs md:text-sm text-[#88837c] font-jakarta leading-relaxed opacity-0">
                    {project.desc}
                  </p>
                </div>

                {/* Image right */}
                <div className="md:col-span-7">
                  <div
                    className="project-img-wrapper relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#111111]"
                    style={{ height: "clamp(280px, 36vw, 480px)", clipPath: "inset(100% 0% 0% 0%)" }}
                  >
                    <img
                      src={project.img}
                      alt={project.title}
                      className="project-img absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ transform: "scale(1.2)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/80 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-[#9DFF20] text-[#0d0d0d] flex items-center justify-center font-bold transition-transform duration-300 group-hover:scale-110 shadow-[0_0_25px_rgba(157,255,32,0.5)]">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
