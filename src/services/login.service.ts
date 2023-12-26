import prisma from "@/lib/db";
import { compare } from "bcrypt";

export const loginService = async (
  credentials: Record<"email" | "password", string>
) => {
  const existingUser = await prisma.user.findUnique({
    where: { email: credentials?.email },
  });

  if (!existingUser)
    throw new Error("Either email is incorrect or the account doesn't exist");

  const passwordMatched = await compare(
    credentials?.password,
    existingUser?.password
  );

  if (!passwordMatched) throw new Error("Incorrect password");

  return {
    id: `${existingUser.id}`,
    username: existingUser.username,
    email: existingUser.email,
    bio: existingUser.bio,
    links: existingUser.links,
    error: null,
  };
};
