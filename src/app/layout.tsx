import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Aditya Kumar Choubey -- Full Stack & IoT Developer",
  description: "Full Stack Developer experienced in building scalable web platforms and IoT-enabled systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${kanit.variable} h-full antialiased`}
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <body className="min-h-full flex flex-col bg-[#0C0C0C] text-[#D7E2EA] antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

