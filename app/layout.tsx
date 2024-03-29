import type { Metadata } from "next";
import "./../scss/main.scss";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import logo from "@/public/images/logo/logo-dark.png";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="wrapper">
          <header>
            <Link href="/">
              <Image className="logo" src={logo} alt="" priority={true} />
            </Link>
            <Navbar />
          </header>
          {children}
          <footer>
            <h1>footer</h1>
          </footer>
        </div>
      </body>
    </html>
  );
}
