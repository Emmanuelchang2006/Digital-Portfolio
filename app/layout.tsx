import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emmanuel Chang | Cybersecurity & Security Engineering",
  description:
    "Portfolio of Emmanuel Chang, Cybersecurity and Digital Forensics student with experience in DFIR, cybersecurity analysis, and AI security engineering.",
  keywords: [
    "cybersecurity",
    "digital forensics",
    "DFIR",
    "AI security",
    "security engineering",
    "Emmanuel Chang",
  ],
  authors: [{ name: "Emmanuel Chang" }],
  openGraph: {
    title: "Emmanuel Chang | Cybersecurity & Security Engineering",
    description:
      "DFIR foundation with experience across cybersecurity analysis, AI security engineering, incident management systems and security assurance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-[#fafafa] text-slate-900 antialiased selection:bg-blue-100">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
