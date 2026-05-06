import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      toast.success("문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.", {
        style: { background: "#1a1a1a", color: "#fff", border: "1px solid #008069" },
      });
      setForm({ name: "", phone: "", message: "" });
    },
    onError: (err) => {
      toast.error(`문의 전송 실패: ${err.message}`, {
        style: { background: "#1a1a1a", color: "#fff", border: "1px solid #ef4444" },
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      toast.error("모든 항목을 입력해 주세요.");
      return;
    }
    submitMutation.mutate(form);
  };

  const infoItems = [
    { icon: <Phone className="text-[#008069]" />, label: "Call Us", value: "010-6641-3702" },
    { icon: <Mail className="text-[#008069]" />, label: "Email", value: "zbscsenter@zbentertainment.co.kr" },
    { icon: <MapPin className="text-[#008069]" />, label: "Address", value: "서울특별시 강남구 테헤란로 427" },
  ];

  return (
    <Layout>
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#008069] text-sm tracking-[0.4em] mb-4 font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>CONTACT US</p>
            <h1 className="text-5xl md:text-7xl font-black text-white" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>문의하기</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info Side */}
            <div>
              <h2 className="text-3xl font-bold mb-12">함께 상상을 현실로<br />만들어볼까요?</h2>
              <div className="space-y-10">
                {infoItems.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-6 items-start"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white/40 text-xs tracking-widest mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>{item.label}</p>
                      <p className="text-white text-lg font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 border border-white/10 p-10 md:p-12 rounded-[40px] backdrop-blur-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs tracking-widest text-white/40 mb-3 ml-1" style={{ fontFamily: "'Oswald', sans-serif" }}>NAME</label>
                  <input
                    type="text"
                    placeholder="성함 또는 기업명"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-[#008069] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest text-white/40 mb-3 ml-1" style={{ fontFamily: "'Oswald', sans-serif" }}>PHONE</label>
                  <input
                    type="tel"
                    placeholder="010-0000-0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-[#008069] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest text-white/40 mb-3 ml-1" style={{ fontFamily: "'Oswald', sans-serif" }}>MESSAGE</label>
                  <textarea
                    rows={5}
                    placeholder="행사 내용, 일정 등 상세 내용을 입력해주세요."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-[#008069] transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="w-full bg-[#008069] hover:bg-[#006b58] text-white font-bold py-5 rounded-2xl transition-all shadow-[0_10px_30px_rgba(0,128,105,0.3)] disabled:opacity-50"
                >
                  {submitMutation.isPending ? "전송 중..." : "문의 보내기"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
