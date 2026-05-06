import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// DB 및 알림 모킹
vi.mock("./db", () => ({
  saveContactInquiry: vi.fn().mockResolvedValue({ insertId: 1 }),
}));

vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

vi.mock("./mailer", () => ({
  sendContactEmail: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("contact.submit", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("유효한 문의 데이터로 성공적으로 제출된다", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "홍길동",
      phone: "010-1234-5678",
      message: "행사 기획 문의드립니다.",
    });

    expect(result).toEqual({ success: true });
  });

  it("이름이 비어있으면 유효성 검사 오류가 발생한다", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "",
        phone: "010-1234-5678",
        message: "문의 내용",
      })
    ).rejects.toThrow();
  });

  it("연락처가 비어있으면 유효성 검사 오류가 발생한다", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "홍길동",
        phone: "",
        message: "문의 내용",
      })
    ).rejects.toThrow();
  });

  it("문의 내용이 비어있으면 유효성 검사 오류가 발생한다", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "홍길동",
        phone: "010-1234-5678",
        message: "",
      })
    ).rejects.toThrow();
  });
});
