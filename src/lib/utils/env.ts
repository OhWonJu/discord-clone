import { z } from "zod";

/**
 * env 값의 타입을 제공할 수 있도록 함
 * 해당 env 값에 대한 검증을 핤 수 있음
 * env 에서 자동 완성을 제공할 수 있음
 */
const envSchema = z.object({
  CLERK_PUBLICHABLE_KEY: z.string().default(""),
  CLERK_SECRET_KEY: z.string().default(""),
});

export const env = envSchema.parse({
  CLERK_PUBLICHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
});
