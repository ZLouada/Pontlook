import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { GlobalLoader } from "@/components/animations/GlobalLoader";
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
  description: "The premier B2B matchmaking platform for corporate training in the GCC. Connect with verified buyers and specialized training providers.",
  openGraph: {
    title: "Pontlook | Corporate Training Matchmaking Platform",
    description: "The premier B2B matchmaking platform for corporate training in the GCC. Connect with verified buyers and specialized training providers.",
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
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col selection:bg-primary-500 selection:text-white dark:selection:bg-primary-600">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GlobalLoader />
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
