import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import type { User } from "../../drizzle/schema";
import { ENV } from "./env";
import { sdk } from "./sdk";

export type TrpcContext = {
  req: any;
  res: any;
  user: User | null;
};

export async function createContext(
  opts: CreateExpressContextOptions
): Promise<TrpcContext> {
  let user: User | null = null;

  // Skip auth entirely when OAuth server is not configured.
  // Without OAUTH_SERVER_URL, authenticateRequest tries to POST to an empty
  // URL which hangs for up to AXIOS_TIMEOUT_MS (30s) and kills the Lambda.
  if (ENV.oAuthServerUrl) {
    try {
      user = await sdk.authenticateRequest(opts.req);
    } catch (error) {
      user = null;
    }
  }

  return {
    req: opts.req,
    res: opts.res,
    user,
  };
}
