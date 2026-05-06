import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Layout from "@/components/Layout";
import { gdrive, GALLERY_DATA } from "@/lib/utils";

export default function Projects() {
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const years = [2025, 2026];
  const currentGallery = GALLERY_DATA[selectedYear as keyof typeof GALLERY_DATA] || [];

  return (
    <Layout>
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <p className="text-[#008069] text-sm tracking-[0.4em] mb-4 font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>PORTFOLIO</p>
              <h1 className="text-5xl md:text-7xl font-black text-white" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>프로젝트</h1>
            </div>

            <div className="flex gap-4">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-10 py-3 text-sm font-bold tracking-widest transition-all duration-300 border ${
                    selectedYear === year
                      ? "bg-[#008069] border-[#008069] text-white shadow-[0_10px_30px_rgba(0,128,105,0.3)]"
                      : "border-white/10 text-white/40 hover:border-white/30 hover:text-white"
                  }`}
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {currentGallery.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentGallery.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setSelectedImage(item.id)}
                  className="group relative aspect-[4/3] overflow-hidden rounded-3xl cursor-pointer"
                >
                  <img
                    src={gdrive(item.id, 800)}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <p className="text-[#008069] text-xs tracking-widest mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>PROJECT {selectedYear}</p>
                    <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="py-40 text-center border border-dashed border-white/10 rounded-[40px]">
              <p className="text-white/20 text-xl font-light italic">
                {selectedYear}년도 행사가 준비 중입니다.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 이미지 라이트박스 모달 */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
              <X size={48} strokeWidth={1} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={gdrive(selectedImage, 1600)}
              alt="Project detail"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
