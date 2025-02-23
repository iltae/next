import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <header>
            <Link href={"/"}>Movie Info 🎥</Link>
          </header>
          <main>{children}</main>
          <footer>made by iltae</footer>
        </div>
      </body>
    </html>
  );
}
