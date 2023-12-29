import { authOptions } from "@/lib/auth";
import { getUsersService } from "@/services/users.service";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session)
      return NextResponse.json(
        { ok: false, message: "Unauthorized" },
        { status: 401 }
      );

    const users = await getUsersService();

    return NextResponse.json({ ok: true, users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ ok: false, error }, { status: 500 });
  }
}
