import { motion } from "framer-motion";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { gdrive, LOGO_ID } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 백그라운드 이미지 */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Premium Theater Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-block p-10 md:p-16 rounded-[40px] border border-white/10 backdrop-blur-md bg-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <img
            src={gdrive(LOGO_ID, 400)}
            alt="Logo"
            className="h-20 md:h-28 mx-auto mb-10 object-contain"
            style={{ filter: "invert(1) brightness(2.5)", mixBlendMode: "screen" }}
          />
          <h1
            className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1]"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            상상을 넘어선
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008069] to-[#00d4af]">
              완벽한 순간의 디자인
            </span>
          </h1>
          <p
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            축제, 공연, 그리고 모든 이벤트가 하나의 예술이 됩니다.
            제로빅엔터테인먼트가 당신의 비전을 가장 빛나는 무대로 현실화합니다.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link href="/project">
              <button className="px-10 py-5 bg-[#008069] hover:bg-[#006b58] text-white font-bold rounded-full transition-all flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(0,128,105,0.4)] group">
                포트폴리오 보기 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-10 py-5 border border-white/20 hover:border-white/50 text-white font-bold rounded-full transition-all backdrop-blur-sm">
                문의하기
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* 스크롤 유도 */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/30"
      >import { motion } from "framer-motion";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { gdrive, LOGO_ID } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 백그라운드 이미지 */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Premium Theater Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-block p-10 md:p-16 rounded-[40px] border border-white/10 backdrop-blur-md bg-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <img
            src={gdrive(LOGO_ID, 400)}
            alt="Logo"
            className="h-20 md:h-28 mx-auto mb-10 object-contain"
            style={{ filter: "invert(1) brightness(2.5)", mixBlendMode: "screen" }}
          />
          <h1
            className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1]"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            상상을 넘어선
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008069] to-[#00d4af]">
              완벽한 순간의 디자인
            </span>
          </h1>
          <p
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            축제, 공연, 그리고 모든 이벤트가 하나의 예술이 됩니다.
            제로빅엔터테인먼트가 당신의 비전을 가장 빛나는 무대로 현실화합니다.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link href="/project">
              <button className="px-10 py-5 bg-[#008069] hover:bg-[#006b58] text-white font-bold rounded-full transition-all flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(0,128,105,0.4)] group">
                포트폴리오 보기 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-10 py-5 border border-white/20 hover:border-white/50 text-white font-bold rounded-full transition-all backdrop-blur-sm">
                문의하기
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* 스크롤 유도 */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/30"
      >
        <span className="text-[10px] tracking-[0.4em] font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#008069] to-transparent" />
      </motion.div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      
      {/* 회사 소개 프리뷰 */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#008069] text-sm tracking-[0.4em] mb-4 font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>WHO WE ARE</p>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              우리는 최고의<br />파트너 입니다.
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              제로빅엔터테인먼트는 풍부한 실무 경험과 탄탄한 기획력을 바탕으로 <br />
              고객사의 니즈를 정확히 파악하여 최적의 행사를 기획하고 운영합니다.
            </p>
            <Link href="/about">
              <button className="text-[#008069] font-bold flex items-center gap-2 group">
                자세히 보기 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-video rounded-[40px] overflow-hidden border border-white/10"
          >
            <img src={gdrive("1fnz0Ntae-m4_MBFoHV9DYg7m0qtP7Osk", 1200)} alt="Featured" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
STUB
        <span className="text-[10px] tracking-[0.4em] font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#008069] to-transparent" />
      </motion.div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      
      {/* 회사 소개 프리뷰 */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#008069] text-sm tracking-[0.4em] mb-4 font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>WHO WE ARE</p>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              우리는 최고의<br />파트너 입니다.
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              제로빅엔터테인먼트는 풍부한 실무 경험과 탄탄한 기획력을 바탕으로 <br />
              고객사의 니즈를 정확히 파악하여 최적의 행사를 기획하고 운영합니다.
            </p>
            <Link href="/about">
              <button className="text-[#008069] font-bold flex items-center gap-2 group">
                자세히 보기 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-video rounded-[40px] overflow-hidden border border-white/10"
          >
            <img src={gdrive("1fnz0Ntae-m4_MBFoHV9DYg7m0qtP7Osk", 1200)} alt="Featured" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
