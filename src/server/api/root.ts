import { createTRPCRouter, createCallerFactory } from "~/server/api/trpc";
import { postRouter } from "~/server/api/routers/post";
import { chatRouter } from "~/server/api/routers/chat";

export const appRouter = createTRPCRouter({
  post: postRouter,
  chat: chatRouter,
});

export type AppRouter = typeof appRouter;

// ✅ Adicione essa linha para permitir importação no server.ts
export const createCaller = createCallerFactory(appRouter);
