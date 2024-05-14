import { auth, signIn } from "@/auth";
import ColorButton from "@/components/ui/ColorButton";
import { redirect } from "next/navigation";
import React from "react";
type Props = {
  searchParams: {
    callbackUrl: string;
  };
};
const SigninPage = async ({ searchParams: { callbackUrl } }: Props) => {
  const session = await auth();

  if (session?.user) redirect("/");
  console.log(callbackUrl, "callbackUrl");

  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: callbackUrl });
      }}
      className="flex justify-center mt-[20%]"
    >
      <ColorButton
        type="submit"
        text="Sign in with Google"
        className="text-3xl p-[0.5rem]"
      />
    </form>
  );
};

export default SigninPage;
