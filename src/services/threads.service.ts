import prisma from "@/lib/db";

export const getThreadsService = async () => {
  try {
    const threads = await prisma.thread.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 10,
    });
    return threads;
  } catch (error) {
    throw error;
  }
};

export const createThreadService = async (
  authorId: number,
  title: string,
  category: string,
  content: string
) => {
  try {
    const thread = await prisma.thread.create({
      data: {
        authorId,
        title,
        category,
        content,
      },
    });

    return thread;
  } catch (error) {
    throw error;
  }
};
