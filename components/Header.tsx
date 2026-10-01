"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0d0d0d]/85 backdrop-blur-xl border-b border-white/[0.06] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-black text-xl tracking-tighter text-[#e2ddd6] group-hover:text-white transition-colors">
            ITZFIZZ
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#9DFF20] inline-block animate-pulse" />
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "WORK", href: "#work" },
            { label: "PROCESS", href: "#process" },
            { label: "STUDIO", href: "#studio" },
            { label: "CONTACT", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] font-semibold tracking-[0.25em] text-[#99948d] hover:text-[#9DFF20] transition-colors relative py-1 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#9DFF20] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Badge & CTA */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-[10px] tracking-wider text-[#a09a90]">
            <span className="w-2 h-2 rounded-full bg-[#9DFF20]" />
            <span>AVAILABLE FOR H2 PROJECTS</span>
          </div>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-none border border-[#9DFF20]/40 text-[#9DFF20] hover:bg-[#9DFF20] hover:text-[#0d0d0d] font-bold text-[10px] tracking-[0.2em] uppercase transition-all duration-300"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </header>
  );
}
