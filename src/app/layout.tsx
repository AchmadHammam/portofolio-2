import type { Metadata } from "next";
import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const robotoMono = Roboto_Mono({
  variable: "--font-robot-mono",
});

export const metadata: Metadata = {
  title: "Potofolio Achmad Hammam",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full min-w-screen flex-col bg-[#101111]">{children}</body>
    </html>
  );
}
