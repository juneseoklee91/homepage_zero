import { motion } from "framer-motion";
import Layout from "@/components/Layout";

function OrgChart() {
  const departments = [
    {
      name: "대표이사",
      role: "CEO",
      members: [{ name: "신창섭", role: "Executive Director" }],
    },
    {
      name: "기획본부",
      role: "Planning & Strategy",
      members: [
        { name: "기획 1팀", role: "Festival & Event" },
        { name: "기획 2팀", role: "Promotion & Marketing" },
      ],
    },
    {
      name: "운영본부",
      role: "Operations",
      members: [
        { name: "운영팀", role: "On-site Management" },
        { name: "무대기술팀", role: "System & Tech" },
      ],
    },
    {
      name: "디자인본부",
      role: "Creative Design",
      members: [
        { name: "디자인팀", role: "Visual & 3D Design" },
      ],
    },
  ];

  return (
    <div className="py-20">
      <div className="text-center mb-20">
        <p className="text-[#008069] text-sm tracking-[0.3em] mb-4 font-medium" style={{ fontFamily: "'Oswald', sans-serif" }}>ORGANIZATION</p>
        <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>조직도</h2>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* CEO */}
        <div className="flex justify-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#008069] p-8 rounded-2xl text-center min-w-[240px] shadow-[0_20px_50px_rgba(0,128,105,0.2)]"
          >
            <p className="text-white/60 text-xs tracking-widest mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>CEO</p>
            <h3 className="text-white text-2xl font-bold">신창섭</h3>
          </motion.div>
          {/* Vertical Line */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-[#008069] to-transparent" />
        </div>

        {/* Departments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {departments.slice(1).map((dept, idx) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md relative"
            >
              <div className="mb-6">
                <p className="text-[#008069] text-xs tracking-widest mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>{dept.role}</p>
                <h4 className="text-white text-xl font-bold">{dept.name}</h4>
              </div>
              <ul className="space-y-4">
                {dept.members.map((member) => (
                  <li key={member.name} className="flex flex-col">
                    <span className="text-white font-medium">{member.name}</span>
                    <span className="text-white/40 text-xs">{member.role}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <Layout>
      {/* 서브 페이지 헤더 */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#008069]/10 to-transparent" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#008069] text-sm tracking-[0.4em] mb-4 font-bold"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            COMPANY PROFILE
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-8"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            회사소개
          </motion.h1>
        </div>
      </section>

      {/* 인사말/소개 */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
            "제로빅은 단순한 행사를 넘어,<br />
            사람의 마음을 움직이는 <span className="text-[#008069]">가치</span>를 만듭니다."
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-12">
            2025년 설립된 제로빅엔터테인먼트는 풍부한 경험과 창의적인 감각을 바탕으로
            지자체 축제, 대학 행사, 기업 프로모션 등 다양한 분야에서 혁신적인 솔루션을 제공합니다.
            우리는 상상을 현실로 구현하는 기술력과 감동을 전하는<br />
            기획력을 모두 갖춘 전문가 집단입니다.
          </p>
        </div>
      </section>

      {/* 조직도 */}
      <section className="bg-[#050505]">
        <OrgChart />
      </section>

      {/* 코어 밸류 (기존 Home에서 가져옴) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "CREATIVE", desc: "고정관념을 깨는 독창적인 아이디어" },
            { title: "PASSION", desc: "완벽한 무대를 향한 멈추지 않는 열정" },
            { title: "PROFESSIONAL", desc: "철저한 분석과 실행력을 갖춘 전문성" },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-12 rounded-3xl bg-white/5 border border-white/10 hover:border-[#008069]/50 transition-all group"
            >
              <h3 className="text-2xl font-bold text-[#008069] mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>{item.title}</h3>
              <p className="text-white/60">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
