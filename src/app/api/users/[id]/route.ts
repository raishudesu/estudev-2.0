import { authOptions } from "@/lib/auth";
import { getUserService } from "@/services/users.service";
import { getServerSession } from "next-auth";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: Params }) {
  try {
    const session = await getServerSession(authOptions);
    const { id } = params;

    if (!session)
      return NextResponse.json(
        { ok: false, message: "Unauthorized" },
        { status: 401 }
      );

    const user = await getUserService(Number(id));

    return NextResponse.json({ ok: true, user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ ok: false, error }, { status: 500 });
  }
}
