import { auth } from "@/auth";
import { getPost, getPostsByFollowing } from "@/service/post";
import { NextRequest, NextResponse } from "next/server";

type Context = {
  params: { id: string };
};

export async function GET(request: NextRequest, context: Context) {
  const session = await auth();
  const user = session?.user;
  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }
  return getPost(context.params.id).then((data) => NextResponse.json(data));
}
