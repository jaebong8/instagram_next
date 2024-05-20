import { auth } from "@/auth";
import FollowingBar from "@/components/FollowingBar";
import PostList from "@/components/PostList";
import SideBar from "@/components/SideBar";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await auth();
  const user = session?.user;
  if (!user) redirect("/auth/signin");
  return (
    <section className="flex flex-col md:flex-row w-full max-w-[850px] p-4">
      <div className="w-full min-w-0 basis-3/4">
        <FollowingBar />
        <PostList />
      </div>
      <div className="ml-8 basis-1/4">
        <SideBar user={user} />
      </div>
    </section>
  );
}
