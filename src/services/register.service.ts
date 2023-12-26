import prisma from "@/lib/db";
import { hash } from "bcrypt";

export const registerUser = async (
  email: string,
  username: string,
  gender: string,
  password: string
) => {
  const existingEmail = await prisma.user.findUnique({
    where: { email: email },
  });

  if (existingEmail) {
    throw "A user with this email already exists";
  }

  // CHECK UNIQUE USERNAME
  const existingUsername = await prisma.user.findUnique({
    where: { username: username },
  });

  if (existingUsername) {
    throw "A user with this username already exists";
  }

  // HASH PASSWORD
  const hashedPwd = await hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      username,
      email,
      gender,
      password: hashedPwd,
    },
  });

  return newUser;
};
