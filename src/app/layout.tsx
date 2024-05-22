import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthContext from "@/context/AuthContext";
import SWRConfigContext from "./../context/SWRConfigContext";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Instagram",
    template: "Instagram | %s",
  },
  description: "Instagram Photos",
};
const OpenSans = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={OpenSans.className}>
      <body className="w-full overflow-auto bg-neutral-50">
        <AuthContext>
          <header className="sticky top-0 z-10 bg-white border-b ">
            <div className="max-w-screen-xl mx-auto">
              <Navbar />
            </div>
          </header>

          <main className="flex justify-center w-full max-w-screen-xl mx-auto">
            <SWRConfigContext> {children}</SWRConfigContext>
          </main>
        </AuthContext>
        <div id="portal"></div>
      </body>
    </html>
  );
}
