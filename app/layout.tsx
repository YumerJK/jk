import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Usta Kapı & Mobilya | Custom Doors and Furniture",
  description:
    "Modern, custom-made entrance doors, interior doors, kitchen cabinets, wardrobes, and fitted furniture for homes and businesses.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
