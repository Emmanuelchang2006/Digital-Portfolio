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
  title: "Emmanuel Chang | Cybersecurity & Software Engineering Student",
  description:
    "Portfolio of Emmanuel Chang – Diploma in Cybersecurity and Digital Forensics student passionate about emerging threats, risk mitigation, and software engineering.",
  keywords: [
    "cybersecurity",
    "digital forensics",
    "software engineering",
    "portfolio",
    "Emmanuel Chang",
  ],
  authors: [{ name: "Emmanuel Chang" }],
  openGraph: {
    title: "Emmanuel Chang | Cybersecurity & Software Engineering",
    description:
      "Cybersecurity and Digital Forensics student portfolio – tools, projects, and experience.",
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
      <body className="bg-slate-900 text-slate-100 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
