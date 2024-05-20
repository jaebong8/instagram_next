import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { addUser } from "./service/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async signIn({ user: { id, name, email, image } }) {
      if (!email || !id) return false;
      addUser({
        id,
        name: name || "",
        email,
        image,
        username: email?.split("@")[0],
      });
      return true;
    },
    async session({ session }) {
      const user = session?.user;
      if (user) {
        session.user = {
          ...user,
          username: user.email?.split("@")[0],
        };
      }
      return session;
    },
  },
});
