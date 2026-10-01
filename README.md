# 🏎️ ITZFIZZ — Interactive Scroll-Driven Digital Studio

An award-winning, high-performance scroll-driven web application built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **GSAP (ScrollTrigger)**.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Active-brightgreen?style=for-the-badge&logo=vercel)](https://itzfizz-car-scroll.surge.sh)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/tinkumittalgupta-rgb/itzfizz-car-scroll-animation)

---

## 🌐 Quick Links

- 🚀 **Live Demo:** [https://itzfizz-car-scroll.surge.sh](https://itzfizz-car-scroll.surge.sh)
- 📂 **GitHub Repository:** [https://github.com/tinkumittalgupta-rgb/itzfizz-car-scroll-animation](https://github.com/tinkumittalgupta-rgb/itzfizz-car-scroll-animation)

---

## ✨ Features & Interactive Highlights

### 1. ✦ Kinetic Typography Hero Reveal
- **Zero-FOUC Landing**: On initial page load (`Scroll 0%`), all headline text is strictly hidden, providing a clean, minimal backdrop.
- **Sequential Letter-by-Letter Reveal**: Scrolling down dynamically reveals `WELCOME` and `ITZFIZZ` character-by-character using GSAP transform skew, blur-to-focus, and scaling animations.

### 2. 🏎️ Top-Down Car Process Journey
- **Seamless Pinned Viewport**: Viewport pins (`pin: true`) while scrolling through the process section.
- **Bird's-Eye SVG Supercar**: A custom top-down sports car moves along an asphalt tarmac track with glowing neon trails and speed lines.
- **Synchronized Checkpoints**: Milestone cards reveal at exact checkpoints:
  - `01. Strategy` — Triggers at **20%** track position.
  - `02. Design` — Triggers at **50%** track position.
  - `03. Deliver` — Triggers at **80%** track position.

### 3. 🖼️ Editorial Asymmetrical Project Showcase
- **Infinite Marquee Ticker**: Continuous scrolling banner featuring glowing green diamond stars (`✦`) and service highlights.
- **Curtain Wipe Reveals**: Case study project cards reveal with smooth bottom-to-top `clipPath` wipes and continuous image parallax scrubbing.

### 4. 🎨 Design System & Aesthetics
- **Typography**: Powered by Google Fonts — **Outfit** (display geometric headlines) and **Plus Jakarta Sans** (editorial body copy).
- **Color Palette**: Warm off-white (`#f3f1ec`), subtle warm grays (`#88837c`), and glowing lime green (`#9DFF20`) accents.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP (GreenSock Animation Platform) & ScrollTrigger
- **Hosting**: Surge.sh / GitHub Pages

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js 18+** installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tinkumittalgupta-rgb/itzfizz-car-scroll-animation.git
   cd itzfizz-car-scroll-animation
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
