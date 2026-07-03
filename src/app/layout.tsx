import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pontlook | Corporate Training Matchmaking Platform",
  description: "Stop chasing companies. Start talking to companies that already need training. Connect with verified businesses experiencing workforce challenges.",
  openGraph: {
    title: "Pontlook | Corporate Training Matchmaking Platform",
    description: "Connect with verified businesses experiencing workforce challenges.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased bg-white text-slate-600`}
    >
      <body className="min-h-full flex flex-col selection:bg-primary-500 selection:text-white">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
