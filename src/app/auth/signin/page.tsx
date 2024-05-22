import { auth, signIn } from "@/auth";
import ColorButton from "@/components/ui/ColorButton";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Signin",
  description: "Signup or Login to Instagram",
};
type Props = {
  searchParams: {
    callbackUrl: string;
  };
};
const SigninPage = async ({ searchParams: { callbackUrl } }: Props) => {
  const session = await auth();

  if (session?.user) redirect("/");

  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: callbackUrl });
      }}
      className="mt-[10%]"
    >
      <ColorButton
        type="submit"
        text="Sign in with Google"
        className="text-3xl p-[0.5rem] "
      />
    </form>
  );
};

export default SigninPage;
