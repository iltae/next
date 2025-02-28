import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center bg-gray-50">
        <div className="w-full max-w-xl flex-1 bg-white p-4">
          <header className="mb-4">
            <Link href={"/"} className="text-2xl font-bold">
              Movie Info 🎥
            </Link>
          </header>
          <main>{children}</main>
        </div>
        <footer className="w-full max-w-xl bg-white px-4 pb-4">
          made by iltae 😊
        </footer>
      </body>
    </html>
  );
}
