"use client";

export default function CTAButton() {
  return (
    <a
      href="#"
      id="cta-button"
      className="inline-block px-10 py-4 font-black text-xs tracking-[0.3em] uppercase transition-all duration-300"
      style={{ background: "#9DFF20", color: "#0a0a0a" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "#7acc1a";
        (e.currentTarget as HTMLElement).style.letterSpacing = "0.35em";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "#9DFF20";
        (e.currentTarget as HTMLElement).style.letterSpacing = "0.3em";
      }}
    >
      Get In Touch
    </a>
  );
}
