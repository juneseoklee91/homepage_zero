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
        await saveContactInquiry({
          name: input.name,
          phone: input.phone,
          message: input.message,
        });

        // 이메일 발송 (zbscsenter@zbentertainment.co.kr)
        await sendContactEmail({
          name: input.name,
          phone: input.phone,
          message: input.message,
        });

        // 오너에게 내장 알림도 발송
        await notifyOwner({
          title: `[제로빅엔터테인먼트] 새 문의: ${input.name}`,
          content: `이름: ${input.name}\n연락처: ${input.phone}\n문의내용:\n${input.message}`,
        });

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
