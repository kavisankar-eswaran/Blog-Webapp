import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Provider } from "../utils/Provider";

const firaCode = Rethink_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kavisankar Eswaran's Blog Posts",
  description: "Explore the wide fields of marketing, sales, design, engineering, personal tales, and business SaaS through the insightful view of Kavisankar Eswaran.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.className} h-full bg-amber-50 text-indigo-950 dark:bg-slate-950 dark:text-amber-50 dark:selection:bg-green-500`}
      >
        <Provider>
          <Navbar />
          <main className="h-full mx-auto max-w-5xl px-6">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
