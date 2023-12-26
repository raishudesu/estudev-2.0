import { NextResponse } from "next/server";
import { threadSchema } from "@/lib/zod";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import {
  createThreadService,
  getThreadsService,
} from "@/services/threads.service";

//POST A THREAD
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();

    const { title, category, content, authorId } = threadSchema.parse(body); // VALIDATE BODY THRU ZOD SCHEMA

    const thread = await createThreadService(
      authorId,
      title,
      category,
      content
    );

    return NextResponse.json(
      { ok: true, threadId: thread.id, message: "Thread posted" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: "Something went wrong", error },
      { status: 500 }
    );
  }
}

// GET ALL THREADS
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const allThreads = await getThreadsService();

    return NextResponse.json(
      { ok: true, threads: allThreads },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: "Something went wrong", error },
      { status: 500 }
    );
  }
}
