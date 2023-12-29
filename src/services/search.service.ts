import prisma from "@/lib/db";
import { searchSchema } from "@/lib/zod";

export const searchThreadsService = async (body: object) => {
  try {
    const { keywords } = searchSchema.parse(body);
    const words = keywords.trim().replace(/\s+/g, " | ");

    const threads = await prisma.thread.findMany({
      where: {
        title: {
          search: words,
        },
        content: {
          search: words,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return threads;
  } catch (error) {
    throw error;
  }
};
