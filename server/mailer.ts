import nodemailer from "nodemailer";

const RECIPIENT = "zbscsenter@zbentertainment.co.kr";

/**
 * 문의 이메일을 zbscsenter@zbentertainment.co.kr 로 발송합니다.
 * SMTP_HOST, SMTP_USER, SMTP_PASS 환경변수가 설정된 경우 실제 발송,
 * 미설정 시 콘솔에 로그만 출력합니다.
 */
export async function sendContactEmail(params: {
  name: string;
  phone: string;
  message: string;
}): Promise<boolean> {
  const { name, phone, message } = params;

  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpUser || !smtpPass) {
    // SMTP 미설정 시 콘솔 로그로 대체
    console.log(
      `[Mailer] SMTP not configured. Would send email to ${RECIPIENT}:\n` +
        `  이름: ${name}\n  연락처: ${phone}\n  문의내용: ${message}`
    );
    return true;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: `"제로빅엔터테인먼트 웹사이트" <${smtpUser}>`,
      to: RECIPIENT,
      subject: `[제로빅엔터테인먼트] 새 문의: ${name}`,
      text: `이름: ${name}\n연락처: ${phone}\n\n문의내용:\n${message}`,
      html: `
        <div style="font-family:'Noto Sans KR',sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#fff;padding:32px;border:1px solid #008069;">
          <h2 style="color:#008069;margin-bottom:24px;">새 문의가 접수되었습니다</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#aaa;width:100px;">이름</td><td style="padding:8px 0;color:#fff;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#aaa;">연락처</td><td style="padding:8px 0;color:#fff;">${phone}</td></tr>
            <tr><td style="padding:8px 0;color:#aaa;vertical-align:top;">문의내용</td><td style="padding:8px 0;color:#fff;white-space:pre-wrap;">${message}</td></tr>
          </table>
          <hr style="border-color:#333;margin:24px 0;" />
          <p style="color:#555;font-size:12px;">제로빅엔터테인먼트 공식 웹사이트 문의 시스템</p>
        </div>
      `,
    });

    console.log(`[Mailer] Email sent to ${RECIPIENT} for inquiry from ${name}`);
    return true;
  } catch (error) {
    console.error("[Mailer] Failed to send email:", error);
    return false;
  }
}
