import prisma from "@/lib/db";

export const getUsersService = async () => {
  try {
    const users = await prisma.user.findMany({ take: 10 });
    return users;
  } catch (error) {
    throw error;
  }
};

export const getUserService = async (id: number) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    return user;
  } catch (error) {
    throw error;
  }
};
