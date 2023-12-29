import { authOptions } from "@/lib/auth";
import { searchThreadsService } from "@/services/search.service";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session)
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const body = await req.json();

    const threads = await searchThreadsService(body);

    return NextResponse.json({ ok: true, threads }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ ok: false, error }, { status: 500 });
  }
}
