import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { saveContactInquiry } from "./db";
import { notifyOwner } from "./_core/notification";
import { sendContactEmail } from "./mailer";
import { z } from "zod";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1).max(100),
        phone: z.string().min(1).max(30),
        message: z.string().min(1),
      }))
      .mutation(async ({ input }) => {
        // 이메일 발송 (가장 중요 - 먼저 실행)
        await sendContactEmail({
          name: input.name,
          phone: input.phone,
          message: input.message,
        });

        // DB 저장 (선택적 - 실패해도 성공 응답)
        try {
          await saveContactInquiry({
            name: input.name,
            phone: input.phone,
            message: input.message,
          });
        } catch (error) {
          console.warn("[Contact] DB 저장 실패:", error);
        }

        // 오너 알림 (선택적 - Manus 환경에서만 동작)
        try {
          await notifyOwner({
            title: `[제로빅엔터테인먼트] 새 문의: ${input.name}`,
            content: `이름: ${input.name}\n연락처: ${input.phone}\n문의내용:\n${input.message}`,
          });
        } catch (error) {
          console.warn("[Contact] 오너 알림 실패:", error);
        }

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
