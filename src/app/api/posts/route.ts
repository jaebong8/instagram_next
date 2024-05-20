import { auth } from "@/auth";
import { getPostsByFollowing } from "@/service/post";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  const user = session?.user;
  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }
  return getPostsByFollowing(user.username).then((data) =>
    NextResponse.json(data)
  );
}
