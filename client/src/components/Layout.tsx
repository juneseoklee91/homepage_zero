import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { gdrive, LOGO_ID } from "@/lib/utils";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "PROJECT", href: "/project" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10,10,10,0.95)"
          : "rgba(10,10,10,0.3)",
        backdropFilter: "blur(8px)",
        borderBottom: scrolled ? "1px solid rgba(0,128,105,0.3)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img
            src={gdrive(LOGO_ID, 200)}
            alt="제로빅엔터테인먼트 로고"
            className="h-10 w-auto object-contain cursor-pointer"
            style={{ filter: "invert(1) brightness(2)", mixBlendMode: "screen" }}
            onError={(e) => {
              const el = e.target as HTMLImageElement;
              el.style.display = "none";
              const parent = el.parentElement;
              if (parent) {
                parent.innerHTML = `<span style="font-family:'Oswald',sans-serif;font-size:1.2rem;font-weight:700;color:#fff;letter-spacing:0.05em">ZERO<span style="color:#008069">BIG</span></span>`;
              }
            }}
          />
        </Link>

        {/* 데스크톱 메뉴 */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <span
                  className={`text-sm font-semibold tracking-widest transition-colors relative group cursor-pointer ${
                    location === item.href ? "text-[#008069]" : "text-white/80 hover:text-white"
                  }`}
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                      location === item.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                    style={{ background: "#008069" }}
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* 모바일 햄버거 */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/10 p-6 md:hidden"
          >
            <ul className="flex flex-col gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setMenuOpen(false)}>
                    <span
                      className={`text-lg font-bold tracking-widest block ${
                        location === item.href ? "text-[#008069]" : "text-white/60"
                      }`}
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-[#050505] py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-black text-white mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>
              ZERO<span style={{ color: "#008069" }}>BIG</span>
            </h3>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
              우리는 상상을 현실로 만드는 최고의 파트너입니다.
              <br />
              축제, 공연, 이벤트의 모든 순간을
              <br />
              완벽하게 디자인합니다.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-widest text-white/40 mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
              OFFICE
            </p>
            <p className="text-sm text-white/60 leading-relaxed" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
              서울특별시 강남구 테헤란로 427
              <br />
              (주)제로빅엔터테인먼트
            </p>
          </div>
          <div>
            <p className="text-xs tracking-widest text-white/40 mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
              CONTACT
            </p>
            <p className="text-sm text-white/60 leading-relaxed" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
              대표자: 신창섭
              <br />
              Tel: 010-6641-3702
              <br />
              <a href="mailto:zbscsenter@zbentertainment.co.kr" className="hover:text-white transition-colors" style={{ color: "#008069" }}>
                zbscsenter@zbentertainment.co.kr
              </a>
            </p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-xs text-white/30" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
            Copyright © 2025 제로빅엔터테인먼트 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [children]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white selection:bg-[#008069] selection:text-white">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
