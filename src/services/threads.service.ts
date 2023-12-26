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

export const getThreadService = async (id: number) => {
  try {
    const thread = await prisma.thread.findUnique({
      where: { id: Number(id) },
      include: {
        comments: true,
        author: {
          select: {
            id: true,
            username: true,
            email: true,
            bio: true,
            links: true,
          },
        },
      },
    });

    if (!thread) throw "Thread doesn't exist";

    return thread;
  } catch (error) {
    throw error;
  }
};

export const deleteThreadService = async (id: number) => {
  try {
    await prisma.thread.delete({
      where: { id: Number(id) },
    });
  } catch (error) {
    throw error;
  }
};

export const updateThreadService = async (
  id: number,
  title: string,
  category: string,
  content: string
) => {
  try {
    await prisma.thread.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        category,
        content,
      },
    });
  } catch (error) {
    throw error;
  }
};
