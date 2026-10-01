"use client";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0a0a0a] border-t border-white/[0.08] relative pt-24 pb-12 overflow-hidden text-[#e2ddd6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Statement Header */}
        <div className="mb-20 pb-16 border-b border-white/[0.08]">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#9DFF20] block mb-4">
            Start A Conversation
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
            LET&apos;S BUILD SOMETHING <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9DFF20] via-white to-[#9DFF20]">
              EXTRAORDINARY.
            </span>
          </h2>

          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="mailto:hello@itzfizz.com"
              className="px-8 py-4 bg-[#9DFF20] text-[#0d0d0d] font-bold text-xs tracking-[0.25em] uppercase hover:bg-white transition-all duration-300"
            >
              hello@itzfizz.com
            </a>
            <span className="text-xs text-[#77726a] px-4">
              Response time &lt; 24 hours
            </span>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-white mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs text-[#99948d]">
              {["Work Showcase", "Our Process", "About Studio", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#9DFF20] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-white mb-5">
              Capabilities
            </h4>
            <ul className="space-y-3 text-xs text-[#99948d]">
              {["Brand Strategy", "UI/UX Experience", "WebGL & 3D Motion", "Fullstack Engineering", "Growth & Commerce"].map((item) => (
                <li key={item}>
                  <span className="hover:text-white transition-colors cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-white mb-5">
              Locations
            </h4>
            <ul className="space-y-3 text-xs text-[#99948d]">
              <li>
                <strong className="text-white block">New York</strong>
                540 Broadway, 4th Fl
              </li>
              <li>
                <strong className="text-white block">London</strong>
                22 Soho Square
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-white mb-5">
              Connect
            </h4>
            <ul className="space-y-3 text-xs text-[#99948d]">
              {["Twitter / X", "Instagram", "LinkedIn", "Dribbble", "GitHub"].map((platform) => (
                <li key={platform}>
                  <a href="#" className="hover:text-[#9DFF20] transition-colors flex items-center gap-1">
                    <span>{platform}</span>
                    <span className="text-[9px] opacity-60">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#66615a]">
          <p>© {new Date().getFullYear()} ITZFIZZ Creative Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#99948d] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#99948d] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#99948d] transition-colors">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
