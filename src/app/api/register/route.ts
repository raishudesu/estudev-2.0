import { NextResponse } from "next/server";
import { userServerSchema } from "@/lib/zod";
import { registerService } from "@/services/register.service";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, username, gender, password } = userServerSchema.parse(body); // VALIDATE BODY THRU ZOD SCHEMA

    const newUser = await registerService(email, username, gender, password);

    // EXCLUDE PASSWORD UPON SUCCESS RESPONSE
    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      { user: rest, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong.", error },
      { status: 500 }
    );
  }
}
