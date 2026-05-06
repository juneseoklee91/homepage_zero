import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility for merging Tailwind classes safely.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── 구글 드라이브 이미지 URL 헬퍼 ───────────────────────────────────────────
export function gdrive(id: string, size = 800) {
  return `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`;
}

export const LOGO_ID = "133RDwZaf9DugT-AV0iy4FIYs_XVFskiq";

export const GALLERY_DATA = {
  2025: [
    { id: "1944NYwW-j-XHgRCXitCZnul_-6G0ZFP9", title: "2025 월드써밋" },
    { id: "1eb2YyCCtiApwiCIXXqk71cUGzHKeCVHI", title: "2025 최종성과보고회" },
    { id: "1fnz0Ntae-m4_MBFoHV9DYg7m0qtP7Osk", title: "구미대학교 축제" },
    { id: "1ucTSz35BvWDi-MYcIM2REoiQACO8LvEa", title: "국방 로봇 경진대회" },
    { id: "11L3cUrx38aQA9oIP6AvZ3Q5ps9Rgm21c", title: "국방로봇경진대회 2" },
    { id: "1id8ToFE8qGqG5YKvvOuA4OuXEpbQapd2", title: "극한로봇경진대회 3D" },
  ],
  2026: [],
};
