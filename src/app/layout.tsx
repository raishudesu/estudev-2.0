import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  AuthProvider,
  TanstackProvider,
  ThemeProvider,
} from "@/providers/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EStudev",
  description:
    "Discover a collaborative network of student developers to elevate your development skills and tech career aspirations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AuthProvider>
              <Header />
              <main className="min-h-screen overflow-hidden">{children}</main>
              <Footer />
            </AuthProvider>
          </ThemeProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
