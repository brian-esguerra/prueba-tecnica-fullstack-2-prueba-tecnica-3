import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../shared/components/ui/navbar/NavBar";

export const metadata: Metadata = {
  title: "Nexus App",
  description: "Course Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/icon-16.png" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <div className="">
          {children}
        </div>
      </body>
    </html>
  );
}
